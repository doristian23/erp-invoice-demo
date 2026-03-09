const fs = require('fs');
const path = require('path');

const TOKENS_CSS = path.join(__dirname, '..', 'src', 'tokens', 'tokens.css');
const TOKENS_SPEC = path.join(__dirname, '..', 'src', 'tokens', 'tokens.spec.json');

function parseCssTokens(css) {
  const tokens = {};
  const re = /--([\w-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = re.exec(css)) !== null) {
    tokens['--' + match[1]] = match[2].trim().toLowerCase();
  }
  return tokens;
}

function run() {
  const css = fs.readFileSync(TOKENS_CSS, 'utf8');
  const spec = JSON.parse(fs.readFileSync(TOKENS_SPEC, 'utf8'));
  const implemented = parseCssTokens(css);

  let mismatches = 0;
  let checked = 0;

  for (const [section, tokens] of Object.entries(spec)) {
    if (section.startsWith('_')) continue;
    for (const [name, expected] of Object.entries(tokens)) {
      checked++;
      const actual = implemented[name];
      if (!actual) {
        console.log(`  MISSING  ${name} — expected ${expected}, not found in tokens.css`);
        mismatches++;
      } else if (actual !== expected.toLowerCase()) {
        console.log(`  MISMATCH ${name} — expected ${expected}, got ${actual}`);
        mismatches++;
      } else {
        console.log(`  OK       ${name} = ${expected}`);
      }
    }
  }

  console.log(`\n${checked} tokens checked, ${mismatches} mismatch(es)\n`);
  process.exit(mismatches > 0 ? 1 : 0);
}

run();
