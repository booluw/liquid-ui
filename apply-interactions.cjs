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

// Global Apple HIG interactive easing function we want to add
const APPLE_EASE = 'transition-all duration-200 ease-out active:scale-[0.98]';

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.variants.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Process known components that should have scale/bounce interactions
    if (
      filePath.includes('Button.variants.ts') ||
      filePath.includes('Switch.variants.ts') ||
      filePath.includes('Checkbox.variants.ts') ||
      filePath.includes('Radio.variants.ts') ||
      filePath.includes('Accordion.variants.ts') ||
      filePath.includes('Menu.variants.ts') ||
      filePath.includes('Pagination.variants.ts') ||
      filePath.includes('Tabs.variants.ts')
    ) {
      
      // Inject the interaction utility if it's not already there
      if (!content.includes('active:scale-[0.98]')) {
        // Find strategic injection points per component for the base string
        content = content.replace(/'(?=bg-white\/70|inline-flex items-center|cursor-pointer|peer|flex flex-1|relative flex|z-50 min-[^']*')/, `'${APPLE_EASE} `);
        
        // Manual fallbacks if Regex misses the prefix string
        if (filePath.includes('Button.variants.ts')) {
          content = content.replace(/base: '/, `base: '${APPLE_EASE} `);
        }
        if (filePath.includes('Switch.variants.ts')) {
          content = content.replace(/root: \[/, `root: [\n      '${APPLE_EASE}',`);
        }
        if (filePath.includes('Checkbox.variants.ts')) {
          content = content.replace(/root: \[/, `root: [\n      '${APPLE_EASE}',`);
        }
        if (filePath.includes('Radio.variants.ts')) {
          content = content.replace(/item: \[/, `item: [\n      '${APPLE_EASE}',`);
        }
        if (filePath.includes('Menu.variants.ts')) {
          content = content.replace(/item: \[/, `item: [\n      '${APPLE_EASE}',`);
        }
        if (filePath.includes('Pagination.variants.ts')) {
          content = content.replace(/item: \[/, `item: [\n      '${APPLE_EASE}',`);
        }
        if (filePath.includes('Tabs.variants.ts')) {
          content = content.replace(/trigger: \[/, `trigger: [\n      '${APPLE_EASE}',`);
        }
        if (filePath.includes('Accordion.variants.ts')) {
          content = content.replace(/trigger: \[/, `trigger: [\n      '${APPLE_EASE}',`);
        }
        
        // Clean up any potential double trailing spaces
        content = content.replace(/  +/g, ' ');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Injected HIG micro-interactions to:', filePath);
      }
    }
  }
});
