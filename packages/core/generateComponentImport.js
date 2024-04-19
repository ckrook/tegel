import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const directoryName = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(directoryName, '/dist/components');

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const components = files
    .filter((file) => file.startsWith('tds-') && file.endsWith('.js')) // Filter files starting with "tds-" and ending with ".js"
    .reduce((acc, file) => {
      const baseName = path.basename(file, '.js'); // Get the base name without extension
      acc[`./${baseName}`] = {
        import: `./dist/components/${baseName}.js`,
        types: `./dist/components/${baseName}.d.ts`,
      };
      return acc;
    }, {});

  console.log(JSON.stringify(components, null, 2));
});
