
var mqtt = require("mqtt");
var constants= require("./constants")
var client = mqtt.connect(constants.ip);
client.on("connect",function(){
    console.log("connected to client");
    client.subscribe('topic1')
    client.subscribe('topic2')
})
client.on("message",function(topic,payload){
    console.log("topic:",topic)
    var context = payload.toString();
    console.log(context)
})