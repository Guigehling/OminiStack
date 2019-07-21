const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(3333)

app.use((req, res, next) => {
    req.io = io
    next()
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))

mongoose
    .connect('mongodb+srv://omini:omini@cluster0-qwfrc.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    )