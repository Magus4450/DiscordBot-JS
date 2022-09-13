const Discord = require('discord.js');
const client = new Discord.Client(); 
//const {client} = require("./bot.js")
const DisTube = require('distube');
// Create a new DisTube
const distube = new DisTube(client);

module.exports = {
    name: 'play',
    description: "Plays music",
    execute(message, args){
        console.log("working");
        distube.play(message, args.join(' '));
    }
}