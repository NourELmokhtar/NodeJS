
const fs = require('fs');

//Read As Sync

// var JsonDatasync = fs.readFileSync('Assignment5/data.json', 'utf8');
// console.log(JsonDatasync);


//Read As Async

fs.readFile( 'Assignment5/data.json', 'utf8', function(err, data) {
	if(err){
        return err;
    }
    console.log(data);
});