const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: [],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: null,
    callback: (message, arguments, text) => {
        let totalMembers = 0

    for (const guild of this.client.guilds.cache) {
      totalMembers += (await guild[1].members.fetch()).size
    }

    const embed = new MessageEmbed()
      .setAuthor(
        `Information about the ${this.client.user.username} Bot`,
        this.client.user.displayAvatarURL()
      )
      .addFields(
        {
          name: 'Bot tag',
          value: this.client.user.tag,
        },
        {
          name: 'Version',
          value: version,
        },
        {
          name: "Server's command prefix",
          value: message.guild.commandPrefix,
        },
        {
          name: 'Time since last restart',
          value: `${process.uptime().toFixed(2)}s`,
        },
        {
          name: 'Server count',
          value: this.client.guilds.cache.size,
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