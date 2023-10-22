var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connect',(Socket)=>{
    console.log(Socket.id+':\u001b[36m Se Conectou')
    Socket.on('disconnect',()=>{
        console.log(Socket.id+': SE Desconectou')
    })
    Socket.on('msg',(msg)=>{
        Socket.emit('response',msg)
        console.log(msg)
    })
    Socket.on('welcome',(dados)=>{
        console.log('\u001b[33mEntrou No Chat',dados.nome+' -> '+Socket.id)
    })

})


app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.set('view engine','ejs')

http.listen(3000,()=>{console.log('running...')})