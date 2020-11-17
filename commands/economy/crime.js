const economy = require('../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['crime', 'c'],
  maxArgs: 0,
  expectedArgs: "Crime command",
  cooldown: 60,
  callback: async (message) => {
      message.channel.send('Coming soon!')
  },
}