const fetch = require('node-fetch');


module.exports = {
    name: 'emote',
    description: "emotes",
    async execute(message, args) {

        async function myFetch(message, args) {
            try{
                let response = await fetch(`https://api.frankerfacez.com/v1/emotes?q=${args[0]}&sensitive=false&high_dpi=off&page=1&per_page=50`);
                
                let json = await response.json();            
                let emotes = await json["emoticons"]; 
                let emote = await emotes[0];
                let urls = await emote["urls"];  
                let url = await urls["2"];
                message.delete();
                message.channel.send("https:"+url);
            } catch (e){
                console.error(e);
            }
            
        }
        try{
            myFetch(message,args);
        } catch (e){
            console.error(e);
        }

        /* await fetch(`https://api.frankerfacez.com/v1/emotes?q=${args[1]}&sensitive=false&high_dpi=off&page=1&per_page=50`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            emotes = json["emoticons"];
            emote = emotes["urls"];
            console.log(emote);
            url = emote["2"];
            message.channel.send(url);
        })
 */
    }
}