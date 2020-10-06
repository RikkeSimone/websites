const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'pawsome-pack-adventures/server/public')))



module.exports = server
