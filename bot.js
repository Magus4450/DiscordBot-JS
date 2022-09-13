const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "*";

const fs = require('fs');



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.mCommands = new Discord.Collection();

const musicFiles = fs.readdirSync('./music/').filter(file => file.endsWith('.js'))
for (const musicFile of musicFiles){
    const mCommand = require(`./music/${musicFile}`);

    client.mCommands.set(mCommand.name, mCommand)
}

client.on('ready', () => {
    console.log('Bot Online')
    //client.commands.get('ping').execute(message);
    client.user.setActivity("with your mom")
    
   
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){    /* Strict operator  Type must be same too*/ 
        client.commands.get('ping').execute(message, args);

    } else if (command === 'mod'){
        client.commands.get('mod').execute(message, args);

    } else if (command === 'emotes'){
        client.commands.get('emotes').execute(message, args);

    } else if (command === 'role'){
        client.commands.get('role').execute(message, args);

    } else if (command === 'unrole'){
        client.commands.get('unrole').execute(message, args);

    } else if (command === 'av'){
        client.commands.get('av').execute(message, args);

    } else if (command === 'emote'){
        client.commands.get('emote').execute(message, args);

    } else if (command === 'test'){
        client.commands.get('test').execute(message, args); 

    } else if (command === 'userinfo'){
        client.commands.get('userinfo').execute(message, args);

    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
        
    } else if (command === 'counter'){
        client.commands.get('counter').execute(message, args);
    }


    if (command === 'play'){    /* Strict operator  Type must be same too*/ 
        client.mCommands.get('play').execute(message, args);

    }
})

/* //queue
const status = (queue) => `Volume: \`${queue.volume}\` | Filter: \`${queue.filter || "OFF"}\` | Loop: \`${queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"} | `

//Embed Builder
function embedBuilder(client, message, color, title, description){
    
    let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    if(title) embed.setTitle(title);
    if(description) embed.setDescription(description);
    return message.channel.send(embed);
}

 */






client.login('ODQ4ODM2NzI3MTk5MTA1MDU1.YLSazg.-z7wicqu3dZUby5wkNA4jI4bW9o')