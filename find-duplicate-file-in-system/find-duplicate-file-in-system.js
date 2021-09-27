/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const duplicates = [];
    const fileMap = {};
    
    paths.forEach(path => parseString(path, fileMap));
    for (let key in fileMap) {
        const values = fileMap[key];
        if (values.length > 1) 
            duplicates.push(values);
    }
    
    return duplicates;
};

var parseString = function(str, fileMap) {
    const splitStrArray = str.split(' ');
    const path = splitStrArray[0];
    
    for (let i = 1; i < splitStrArray.length; i++) {
        const fileNameAndContents = seperateFileAndContents(splitStrArray[i]);
        const fileName = fileNameAndContents[0];
        const fileContents = fileNameAndContents[1];
        const fullFilePath = path + "/" + fileName;
        
        if (fileContents in fileMap) {
            fileMap[fileContents].push(fullFilePath);
        } else {
            fileMap[fileContents] = [fullFilePath];
        }
    }
}

var seperateFileAndContents = function(str) {
    let indexOfBracket = str.indexOf("(");
    const path = str.substring(0, indexOfBracket);
    const contents = str.substring(indexOfBracket + 1, str.length - 1);
    
    return [path, contents];
}

// "root/a 1.txt(abcd) 2.txt(efgh)""
// ["root/a","1.txt(abcd)","2.txt(efgh)"]


// {
//     abcd: [root/a/1.txt, root/c/3.txt]
//     efgh: [root/b/2.txt, root/c/d/4.txt, root/4.txt]
// }