const { MessageEmbed, Discord } = require('discord.js')

module.exports =  {
    commands: ['botinfo', 'botinformation', 'info'],
    expectedArgs: '[bot-information]',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: ( message, arguments, text, client ) => {
        const totalMembers = eval(client.guilds.cache.map(g => g.memberCount).join(' + '));

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        

        const embed = new MessageEmbed()
        .setColor('#900CC7')
        .setAuthor(
            `Information about the ${client.user.username} Bot`,
            client.user.displayAvatarURL()
          )
          .addFields(
            {
              name: 'Bot tag',
              value: client.user.tag,
            },
            {
              name: 'Uptime',
              value: uptime,
            },
            {
              name: 'Time since last restart',
              value: `${process.uptime().toFixed(2)}s`,
            },
            {
              name: 'Server count',
              value: client.guilds.cache.size,
            },
            {
              name: 'Total members',
              value: totalMembers,
            }
          )
    
        message.channel.send(embed)
    },
    permissions: '',
    requiredRoles: [],
}