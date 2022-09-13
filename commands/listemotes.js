module.exports = {
    name: 'emotes',
    description: "lists all emotes",
    execute(message, args){
        try {
            const emotes = message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
            const emoteList = emotes.split(" ");
            //console.log(emoteList);
            let emotesList50 = [];
            for (var i = 0; i < 50; i++){
                emotesList50.push(emoteList[i]);
            }
            //console.log(emotesList50)
            message.channel.send(emotesList50.join(""));
        } catch (e){
            console.error(e);
        }
        
    }
}


