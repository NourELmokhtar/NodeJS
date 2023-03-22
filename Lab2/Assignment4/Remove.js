var fs = require('fs');
fs.unlink( 'Assignment4/Nour.html', function(err) {
    if ( err ) return console.log('ERROR: ' + err);
    return console.log("Success");
});