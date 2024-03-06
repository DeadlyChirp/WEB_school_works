// Common use for the File System module:
//
// Read files
// Create files
// Update files
// Delete files
// Rename files

const fs = require('fs');

console.log('ReadFileSync starting to read file synchronously\n');

try{
    const data = fs.readFileSync('random.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.log('error reading file');
    console.log(err);
}
console.log('\nReadFileSync finished reading file synchronously\n');


console.log('ReadFile starting to read file asynchronously\n');
fs.readFile('random.txt', 'utf8', function (err, data) {
    if(err){
        console.log('error reading file');
        return console.log(err);
    }
    console.log(data);
});
console.log('\nReadFile called readFile function but this message will be printed first before the file is fully read asynchronously\n');
