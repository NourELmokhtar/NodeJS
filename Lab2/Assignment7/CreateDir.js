var fs = require('fs');

if (!fs.existsSync("Assignment7/Dir")){
    fs.mkdirSync("Assignment7/Dir");
    return console.log("Done!!");
}
return console.log("This Dir Is Already Exist!!");
