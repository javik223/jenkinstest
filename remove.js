const dockerContainers = require('./docker-containers.txt');
let filesArray;

filesArray = dockerContainers.split('\r\n');
console.log(filesArray.length);
console.log("Here's another one for the boys");

// console.log(dockerContainers);
