const economy = require('../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['beg'],
  maxArgs: 0,
  expectedArgs: "",
  cooldown: 30,
  callback: async (message) => {
    const guildId = message.guild.id
    const userId = message.author.id
    const coins = await economy.getCoins(guildId, userId)
    const randomCoins = Math.floor(Math.random() * 900) +1

    const workEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL())
        .setDescription(`You begged and collected ${randomCoins}`)
        .setFooter('Money!')
        .setTimestamp()

    const newCoins = await economy.addCoins(guildId, userId, randomCoins)
    message.channel.send(workEmbed)
  },
}