const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'packages', 'cartflow', 'src');
const searchString = '@evershop/evershop';
const replaceString = '@cartflow/core';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk(targetDir);
let changedCount = 0;

files.forEach(file => {
    if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(searchString)) {
            const newContent = content.split(searchString).join(replaceString);
            fs.writeFileSync(file, newContent, 'utf8');
            changedCount++;
        }
    }
});

console.log(`Successfully updated ${changedCount} files.`);
