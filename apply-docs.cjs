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

walkDir('./docs/components', function(filePath) {
  if (filePath.endsWith('.md')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace dark mode demo backgrounds with light mode equivalents
    let stripped = content
      .replace(/bg-white\/5/g, 'bg-black/5')
      .replace(/border-white\/20/g, 'border-black/5')
      .replace(/text-slate-500/g, 'text-[#8E8E93]')
      .replace(/text-slate-200/g, 'text-black')
      .replace(/text-slate-400/g, 'text-[#8E8E93]')
      .replace(/text-slate-800/g, 'text-black')
      .replace(/text-slate-900/g, 'text-black')
      .replace(/bg-black\/50/g, 'bg-black/5');
      
    if (content !== stripped) {
      fs.writeFileSync(filePath, stripped, 'utf8');
      console.log('Updated light mode demo wrappers in:', filePath);
    }
  }
});
