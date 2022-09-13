const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'userinfo',
    description: "displays user info",
    execute(message, args){    
        try{
            const target = message.mentions.users.first() || message.author;
            const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(target.username)
            //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription(target.tag)
            .setThumbnail(target.avatarURL(['png', true, 512]))
            .addFields(
                { name: 'Created At', value: target.createdAt },
                { name: 'ID', value: target.id },
                { name: 'Presence', value: target.presence.status.toUpperCase() },
            )
            //.addField('Inline field title', 'Some value here', true)
            .setImage(target.avatarURL(['png', true, 1024]))
            .setTimestamp()

            //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

            message.channel.send(embed);
        } catch (e){
            console.error(e);
        }

    }
}