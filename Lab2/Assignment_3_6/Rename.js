var fs = require('fs');
fs.rename( 'Assignment3/greet.txt','info.txt', function(err) {
    if ( err ) return console.log('ERROR: ' + err);
    return console.log("Success");
});