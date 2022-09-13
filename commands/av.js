const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'av',
    description: "displays user avatar",
    execute(message, args){
        const user = message.mentions.users.first() || message.author;
 
        try{
            const user = message.mentions.users.first() || message.author;
            const embed = new MessageEmbed()
            .setColor(0xff0000)
            .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`);
            message.channel.send(embed);
      
        } catch (e){
            console.error(e);
        }
    }
}