import * as fs from 'fs';
import * as yaml from 'js-yaml';

/* 
    - load ymal files
 */

function loadMapping(file: string): any {
    try {
        const fileContent = fs.readFileSync(file, 'utf8');
        return yaml.load(fileContent);
    } catch (error) {
        throw new Error(`Failed to load mapping from file: ${file}`);
    }
}

export { loadMapping };
