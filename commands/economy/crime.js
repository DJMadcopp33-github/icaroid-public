const economy = require('../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['crime'],
  maxArgs: 0,
  expectedArgs: "",
  cooldown: 60,
  callback: async (message) => {
    const guildId = message.guild.id
    const userId = message.author.id
    const coins = await economy.getCoins(guildId, userId)
    const randomCoins = Math.floor(Math.random() * 900) +1

    let workArray = [
      `You grew some illegal things, you were paid ${randomCoins} coin(s)`,
      `You hacked into Microsoft and stole ${randomCoins} coin(s)`,
      `You hacked into a bank and stole ${randomCoins} coin(s)`,
      `You broke into a bank and stole ${randomCoins} coin(s)`,
      `You done some jobs for an illegal group they gave you ${randomCoins} coin(s)`,
    ]

    
    const randomWorkArray = Math.floor(Math.random() * workArray.length)
    
    if(randomWorkArray === 6) {
        const embed = new MessageEmbed()
        .setColor('#c90000')
        .setAuthor(`🚨${message.author.username}🚨`, message.author.displayAvatarURL())
        .setDescription(`You were arrested and had to pay ${randomCoins} coin(s)`)
        .setFooter('I warned you!')
        .setTimestamp()

        await economy.addCoins(guildId, userId, randomCoins * -1)
        message.channel.send(embed)
    } else {
        const workEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL())
            .setDescription(workArray[randomWorkArray])
            .setFooter('Watch out the police might catch you!')
            .setTimestamp()

        await economy.addCoins(guildId, userId, randomCoins)
        message.channel.send(workEmbed)
    }
  },
}