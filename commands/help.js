module.exports = {
    name: 'help',
    description: "list commands",
    execute(message, args){
        const allCommands =  {
            emotes: "Baydan",         
            mod: "Ali",         
            ping: 1,         
         };
        message.channel.send('pong!');
    }
}