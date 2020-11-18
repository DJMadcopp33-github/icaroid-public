const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['userinfo', 'wi', 'whois'],
    expectedArgs: 'User info command',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
    
        console.log(member)
    
        const embed = new MessageEmbed()
          .setColor('#900CC7')
          .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
          .addFields(
            {
              name: 'User tag',
              value: user.tag,
            },
            {
              name: 'Is bot',
              value: user.bot,
            },
            {
              name: 'Nickname',
              value: member.nickname || 'None',
            },
            {
              name: 'Joined Server',
              value: new Date(member.joinedTimestamp).toLocaleDateString(),
            },
            {
              name: 'Joined Discord',
              value: new Date(user.createdTimestamp).toLocaleDateString(),
            },
            {
              name: 'Roles',
              value: member.roles.cache.size - 1,
            }
          )
    
        channel.send(embed)
      },
    permissions: '',
    requiredRoles: [],
}
