var express = require('express');
var app = express();
var http = require('http').Server(app);

var redis = require('redis');
var subscriber = redis.createClient();
var publisher = redis.createClient();

var io = require('socket.io')(http)

// const {Client} = require('pg');
// const client = new Client();

// await client.connect();
// client.on('style_update', fucntion(){
//     // TODO geoserver rest
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

subscriber.on('message', function(chan, msg) {
  console.log(chan + ': ' + msg);
});

subscriber.on('subscribe', function(chan, count) {
    publisher.publish(chan, 'client ' + count + ' has subscribed to ' + chan);
});

io.on('connection', function(socket){
    socket.on('new client', function(){
        subscriber.subscribe('channel');
    });
    socket.on('update', function(){
        publisher.publish('channel', 'update');
        io.emit('update');
    });
    socket.on('sytle_update', function(){
        client.query
    });
});