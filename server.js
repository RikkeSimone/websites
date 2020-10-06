const path = require('path')
const express = require('express')

const server = express()

const port = process.env.PORT || 80

server.listen(port, function () {
  console.log('Listening on port', port)
})

server.use(express.static(path.join(__dirname, 'public')))

server.get('/', function(req, res) {
    var hostname = req.headers.host;
    if (hostname === 'rikkesimone.com') {
        res.sendFile(path.join(__dirname, 'public', 'portfolioindex.html'))
    }   
    else if (hostname === 'pawsomepackadventures.co.nz') {
        res.sendFile(path.join(__dirname, 'public', 'lisaindex.html'))
    }   
})

server.get('/home', function(req, res) {
    var hostname = req.headers.host;   
    if (hostname === 'pawsomepackadventures.co.nz') {
        res.sendFile(path.join(__dirname+'/lisa/client/components/Home.jsx'))
    }   
})

server.get('/info', function(req, res) {
    var hostname = req.headers.host;   
    if (hostname === 'pawsomepackadventures.co.nz') {
        res.sendFile(path.join(__dirname+'/lisa/client/components/Info.jsx'))
    }   
})

server.get('/gallery', function(req, res) {
    var hostname = req.headers.host;   
    if (hostname === 'pawsomepackadventures.co.nz') {
        res.sendFile(path.join(__dirname+'/lisa/client/components/Gallery.jsx'))
    }   
})

server.get('/contact', function(req, res) {
    var hostname = req.headers.host;   
    if (hostname === 'pawsomepackadventures.co.nz') {
        res.sendFile(path.join(__dirname+'/lisa/components/Form.jsx'))
    }   
})


module.exports = server
