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
    
    // Replace slate text colors with Apple HIG text colors
    let stripped = content
      .replace(/text-slate-500/g, 'text-[#8E8E93]')
      .replace(/text-slate-600/g, 'text-[#8E8E93]')
      .replace(/text-slate-700/g, 'text-black')
      .replace(/text-slate-800/g, 'text-black')
      .replace(/text-slate-900/g, 'text-black')
      
      // Replace blue with Apple HIG Blue (#007AFF)
      .replace(/bg-blue-500/g, 'bg-[#007AFF]')
      .replace(/text-blue-900/g, 'text-[#00408A]')
      .replace(/border-blue-500/g, 'border-[#007AFF]')
      .replace(/rgba\(59,130,246/g, 'rgba(0,122,255')
      
      // Replace green with Apple HIG Green (#34C759)
      .replace(/bg-green-500/g, 'bg-[#34C759]')
      .replace(/rgba\(34,197,94/g, 'rgba(52,199,89');
      
    if (content !== stripped) {
      fs.writeFileSync(filePath, stripped, 'utf8');
      console.log('Updated Apple HIG colors in:', filePath);
    }
  }
});
