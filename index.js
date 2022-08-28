const express = require('express');
const app = express();
const { PORT } = require('./server/config/config');
const auth = require('./server/middlewares/auth')
const routes = require('./server/routes');
const router = require('express').Router();
const path = require("path")
const http = require('http').createServer(app);
require("dotenv").config();
require('./server/config/express')(app);
require('./server/config/mongoose');
app.use(auth())

// const io = require("socket.io")(http, {
//     cors: {
//         origin: ["http://localhost:3000/"],
//         credentials: true
//     }
// });

// const ChatRoom = require('./models/ChatRoom')

// io.on('connection', async function (socket) {
    
//     // Get chats from mongo collection
//     let asd = await ChatRoom.find().populate("buyer").populate("seller");

//     socket.emit('output', asd);

//     socket.on('input', function(data){
//         console.log(data)
//     });
// });

 // Handle input events
//  io.on('input', async function (data) {
//     console.log(data)

    // let chat = await ChatRoom.findById(chatId);
    // console.log(chat)
    // chat.insert({name: name, message: message}, function(){
    //     io.emit('output', [data]);

    //     // Send status object
    //     sendStatus({
    //         message: 'Message sent',
    //         clear: true
    //     });
    // });

// });

app.use(express.static(path.join(__dirname, "client", "build")))
router.get('/*', (req, res) => {
    res.send('Server Running')
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(routes);
http.listen(PORT, () => console.log(`Server is active at https://nexnotesapp.herokuapp.com/${PORT}...`));
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
