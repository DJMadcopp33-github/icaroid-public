const { MessageEmbed } = require('discord.js')


module.exports = {
    commands: ['userinfo', 'wi', 'whois'],
    expectedArgs: 'User info command',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        const { guild, channel } = message
        const guildId = 770371126328819754

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        const userStatus = member.presence.status
        let types = [
          "Playing",
          "Streaming",
          "Listening",
          "Watching"
        ],
          status = {
          "online": `🟢 Online`,
          "idle": `🟡 Idle`,
          "dnd": `🔴 DND`,
          "offline": `⚫ Offline`
        },
          st = {
          "desktop": "🖥 Desktop",
          "mobile": "📱 Mobile",
          "web": "🌐 Web"
        }
    
        console.log(member)
        console.log(userStatus)
    
        const embed = new MessageEmbed()
          .setColor('#900CC7')
          .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
          .addFields(
            {
              name: 'User',
              value: `:white_small_square: **Name:** ${user.tag}\n:white_small_square: **Discriminator:** ${user.discriminator}\n:white_small_square: **Id:** ${user.id}\n:white_small_square: **Is bot:** ${user.bot}\n:white_small_square: **Account Created:** ${new Date(user.createdTimestamp).toLocaleDateString()}`,
            },
            {
              name: 'Member',
              value: `:white_small_square: **Joined Server:** ${new Date(member.joinedTimestamp).toLocaleDateString()}\n:white_small_square: **Nickname:** ${member.nickname || 'None'}\n:white_small_square: **Roles:** ${member.roles.cache ? member.roles.cache.map(r => `${r}`).join(' | ') : ""}`,
            },
          )
          .addField('Presence', `:white_small_square: **Status:** ${status[userStatus]}`, true)
          if(member.presence.clientStatus.desktop) active = "desktop"
            if(member.presence.clientStatus.mobile) active = "mobile"
            if(member.presence.clientStatus.web) active = "web"
            if(st[active] !== undefined){
            embed.addField(`Active on`, st[active], true)
            }

    
        channel.send(embed)
      },
    permissions: '',
    requiredRoles: [],
}
