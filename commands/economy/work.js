const economy = require('../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['work', 'w'],
  maxArgs: 0,
  expectedArgs: "",
  cooldown: 60,
  callback: async (message) => {
    const guildId = message.guild.id
    const userId = message.author.id
    const coins = await economy.getCoins(guildId, userId)
    const randomCoins = Math.floor(Math.random() * 900) +1

    let workArray = [
      `You cleaned your room and you were paid ${randomCoins} coin(s)`,
      `Your friend payed back ${randomCoins} coin(s)`,
      `You worked at McDonalds and got ${randomCoins} coin(s)`,
      `You won a giveaway and got ${randomCoins} coin(s)`,
      `You done some jobs on the computer and collected ${randomCoins} coin(s)`,
      `Wow! You just won ${randomCoins}`,
      `I got bored and paid you ${randomCoins} for entertaining me!`,
      `You sent ideas of what jobs you can do to DJMadcopp33#2053 (My owner) and he paid you ${randomCoins} coin(s)`,
      `You helped an old pal and he gave you ${randomCoins} coin(s)`,
      `You mowed your neighbours lawn and they gave you ${randomCoins} coin(s)`,
    ]

    const randomWorkArray = Math.floor(Math.random() * workArray.length)
    const workEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL())
        .setDescription(workArray[randomWorkArray])
        .setFooter('Money!')
        .setTimestamp()

    await economy.addCoins(guildId, userId, randomCoins)
    message.channel.send(workEmbed)
  },
}