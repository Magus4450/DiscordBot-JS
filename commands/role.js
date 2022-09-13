
module.exports = {
    name: 'role',
    description: "Gives certain role",
    execute(message, args){
        try{
            
            if ( message.author.id == '567772805446500374'){
                //console.log(args[1] + "aa")
                //console.log(message.guild);
                //message.guild.roles.cache.each(guildRole => console.log(guildRole.name));
                const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === args[1].toLowerCase());
                const member = message.mentions.members.first(); 
                member.roles.add(role);

            } else {
                message.reply("You dont have the permissions!");
            }
        } catch (e){
            console.error(e);
        }
        
    }
}