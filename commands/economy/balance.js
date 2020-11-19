const economy = require('../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  expectedArgs: "[Target user's @]",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id
    const coins = await economy.getCoins(guildId, userId)

    const balEmbed = new MessageEmbed()
      .setColor('#900CC7')
      .setAuthor(`💰 Balance for ${target.username} 💰`, target.displayAvatarURL())
      .setDescription(`${target.username} has ${coins} coins!`)
      .setFooter(`Requested by ${message.author.username}.`)
      .setTimestamp()

    message.reply(balEmbed)
  },
}