
module.exports = {
    name: 'test',
    description: "Gives certain role",
    execute(message, args){

        if(!message.guild) return;
        //if(!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return console.log("NO PERMS :(");
            var colors = ['#8585ff','#fff681','#a073fd','#fd73b9', '#dd2b13', '#13dd2e'];
            for(let i = 0; i<= colors.length;i++){
                var role = message.guild.roles.cache.find(role => role.name === "rainbow");
                setInterval(() => {
                    role.edit({
                        color: colors[i]
                    })
                }, 1000);
                

            }
        }
}