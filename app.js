const socketio=require("socket.io");
const express=require("express");
const app=express();
const http=require("http");

const PORT=process.env.PORT || 2021;
const server=http.createServer(app);
const io=socketio(server,{
    cors:{
        origin:"*",
        methods:["GET","POST","OPTIONS"]
    }
});

server.listen(PORT,()=>{
    console.log("server listening")
    io.on("connection",socket=>{
        console.log(socket.id);
        // socket.emit("WELCOME_MESSAGE",`Client number ${socket.id}, welcome...`);
        socket.on("MESSAGE",(message)=>{
            console.log("message",message); 
            io.emit("MESSAGE",message)
            // socket.emit("MESSAGE",message)
        })
    })
})
