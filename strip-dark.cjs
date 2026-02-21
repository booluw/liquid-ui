const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.vue')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex matches "dark:[something]" up to space, quote, backtick, or comma.
    // Handles dynamic tailwind values like dark:bg-black/50, dark:border-white/10
    // Keep in mind to also clean up double spaces left behind
    const stripped = content.replace(/dark:[^\s'",`\]]*\]?/g, '')
                            .replace(/ +/g, ' ')
                            .replace(/ \'/g, "'")
                            .replace(/\' /g, "'")
                            .replace(/ \"/g, '"')
                            .replace(/\" /g, '"');
    if (content !== stripped) {
      fs.writeFileSync(filePath, stripped, 'utf8');
      console.log('Stripped dark mode from:', filePath);
    }
  }
});
