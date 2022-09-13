const Discord = require('discord.js');
const client = new Discord.Client(); 
module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute(message, args){

        //message.channel.send(`Ping is \`${client.ws.ping} ms \``);
        message.channel.send(`🏓Latency is \`${Date.now() - message.createdTimestamp}ms.\``);
        //message.channel.send(`🏓Latency is \`${Math.round(client.ping)}ms.\``);
    }
}