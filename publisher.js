var mqtt = require('mqtt');
var savedObj = require("./constants");
var client  = mqtt.connect(savedObj.ip);
client.on('connect',  () =>{
client.publish('topic2', 'Check multiple topics');
setInterval(()=> {
client.publish('topic1', 'Hello mqtt');
console.log('Message Sent');
}, 5000);

});