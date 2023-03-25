var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    var Login = fs.readFileSync('Login.html', 'utf8')
    var Profile = fs.readFileSync('Profile.html', 'utf8')
    var SignUp = fs.readFileSync('SignUp.html', 'utf8')
    var CssFile = fs.readFileSync('Login.css', 'utf8')
    if (req.url === '/') {
        var Home = fs.readFileSync("HomePage.html")
        res.writeHead(200, { 'content-type': "text/html" })
        res.write(Home)
    }

    else if(req.url==="/Login.css"){
        res.writeHead(200, { 'content-type': "text/css" })
        
        res.write(CssFile)
    }
    else if (req.url === '/Login' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write(Login)
    }
    else if (req.url === '/Login' && req.method === 'POST') {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write("Login Sucess")
    }
    else if (req.url === '/SignUp' && req.method === 'GET') {
        res.writeHead(201, { 'content-type': "text/html" })
        res.write(SignUp)
    }
    else if (req.url === '/SignUp' && req.method === 'POST') {
        res.writeHead(201, { 'content-type': "text/html" })
        res.write("Register Sucess")
    }
    else if (req.url === '/profile' && req.method === 'GET') {
        res.writeHead(201, { 'content-type': "text/html" })
        res.write(Profile)
    }
    else {
        res.writeHead(404)
        res.write("Error 404 Page Not Found")
    }
    res.end()

}).listen(3000)