const economy = require('../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['crime', 'c'],
  maxArgs: 0,
  expectedArgs: "Crime command",
  cooldown: 60,
  callback: async (message) => {
    const guildId = message.guild.id
    const userId = message.author.id
    const coins = await economy.getCoins(guildId, userId)

    const randomMath = Math.floor(Math.random() * 1) +1
    
    const randomCoins = Math.floor(Math.random() * 900) +1

    const workEmbed = new MessageEmbed()
        .setColor('#900CC7')
        .setTitle(`You done some jobs and collected ${randomCoins}`)
        .setFooter('Money!')
        .setTimestamp()

    const newCoins = await economy.addCoins(guildId, userId, randomCoins)
    message.channel.send(workEmbed)
  },
}