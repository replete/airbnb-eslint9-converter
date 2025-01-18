import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const thisDirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = `${thisDirname}/eslint-airbnb-base-rules.json`; //process.argv[2];

const compat = new FlatCompat({
    baseDirectory: thisDirname,
});

const flatConfig = compat.config({
    extends: ['airbnb-base'],
});

const allRules = flatConfig.reduce((acc, config) => ({
    ...acc,
    ...(config.rules || {}),
}), {});

// Write rules to the specified file
try {
    fs.writeFileSync(
        outputPath,
        JSON.stringify(allRules, null, 4),
    );
    console.log(`Rules extracted to ${outputPath}`);
} catch (error) {
    console.error('Error writing file:', error.message);
    process.exit(1);
}
