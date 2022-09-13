
module.exports = {
    name: 'counter',
    description: "counts members",
    async execute(message, args){
        try{
            const guild = message.guild;
            setInterval(() => {
                const memberCount = guild.memberCount;
                let channel = message.guild.channels.cache.find(
                    channel => channel.name.toLowerCase().startsWith('members:')
                )
                channel.setName(`Members: ${memberCount.toLocaleString()}`);
                //console.log(channel);
                console.log('Updating');
                
            }, 1000);
        } catch (e){
            console.error(e);
        }
    }
}