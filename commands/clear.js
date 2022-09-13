
module.exports = {
    name: 'clear',
    description: "clears messages",
    async execute(message, args){
        if (!args[0]) return message.reply("Parameter Required!");
        if (isNaN(args[0])) return message.reply("Enter a number!");

        if (args[0] > 100) return message.reply("You cannot delete more than 100 message!");
        if (args[0] < 1) return message.reply("Enter number greater than 1!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}   