
module.exports = {
    name: 'unrole',
    description: "Removes certain role",
    execute(message, args){
        try{
            if (message.member.roles.cache.has('696300232643837992') || message.author.id == '326686679983194142'|| message.member.roles.cache.has('682968461508739142') || message.member.roles.cache.has('740626072164630661') || message.member.roles.cache.has('637566910635966464')){
                //console.log(args[1])
                let role = message.guild.roles.cache.find(role => role.name === args[1]);                
                //console.log(role);
                const member = message.mentions.members.first(); 
                member.roles.remove(role);
                

            } else {
                message.reply("You dont have the permissions!");
            }
        } catch (e){
            console.error(e);
        }
        
    }
}