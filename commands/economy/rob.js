const economy = require('../../economy')
const { MessageEmbed, MessageFlags } = require('discord.js')

module.exports = {
  commands: ['rob'],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "[Target]",
  cooldown: 60,
  callback: async (message) => {
    const target = message.mentions.users.first()
    const targetId = target.id

    if(targetId === message.author.id) {
      message.reply(`You can't rob yourself, silly.`)
      return;
    }

    const guildId = message.guild.id
    const userId = message.author.id
    const coins = await economy.getCoins(guildId, userId)
    const targetCoins = await economy.getCoins(guildId, targetId)
    const randomCoins = Math.floor(Math.random() * targetCoins / 100) +1
      let robArray = [
        `You got caught you have been fined ${randomCoins}`,
        `You successfully robbed ${randomCoins} from ${target}!`,
      ]
    const randomNumber = Math.floor(Math.random() * robArray.length)
    if(randomNumber === 1) {
      await economy.addCoins(guildId, userId, randomCoins * -1)
      const embed1 = new MessageEmbed().setColor('RANDOM').setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL()).setDescription(`You got caught you have been fined ${randomCoins}`)
      message.channel.send(embed1)
    } else {
      await economy.addCoins(guildId, userId, randomCoins)
      await economy.addCoins(guildId, targetId, randomCoins * -1)
      const embed2 = new MessageEmbed().setColor('RANDOM').setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL()).setDescription(`You successfully robbed ${randomCoins} from ${target}!`)
      message.channel.send(embed2)
    }
  },
}