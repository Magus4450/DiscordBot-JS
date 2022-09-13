const Discord = require('discord.js');

const client = new Discord.Client();
module.exports = {
    name: 'mod',
    description: "mod command",
    execute(message, args){

        if (message.member.roles.cache.has('696300232643837992')){
            const PogU = message.guild.emojis.cache.find(emoji => emoji.name === 'PogU');
            message.reply(`Mod ${PogU}`);
        } else {
            const KEKL = message.guild.emojis.cache.find(emoji => emoji.name === 'KEKL');
            message.reply(`Not even a mod ${KEKL}`);
        }
        
    }
}