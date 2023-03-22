const fs = require('fs');

fs.writeFile("Assignment3/info.txt","Hello ITI", function(err) {
    if(err) {
        return console.log(err);
    }
    return console.log("Done!!");
}); 