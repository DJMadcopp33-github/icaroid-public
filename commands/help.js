const loadCommands = require('./load-commands')
const { prefix } = '?'
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['help', 'h'],
  description: "Describes all of this bot's commands",
  callback: (message, arguments, text) => {
    let reply = 'I am Icaroid bot, here are my supported commands:\n\n'

    const commands = loadCommands()

    for (const command of commands) {
      // Check for permissions
      let permissions = command.permission

      if (permissions) {
        let hasPermission = true
        if (typeof permissions === 'string') {
          permissions = [permissions]
        }

        for (const permission of permissions) {
          if (!message.member.hasPermission(permission)) {
            hasPermission = false
            break
          }
        }

        if (!hasPermission) {
          continue
        }
      }

      // Format the text
      const mainCommand =
        typeof command.commands === 'string'
          ? command.commands
          : command.commands[0]
      const args = command.expectedArgs ? ` ${command.expectedArgs}` : ''
      const { description } = command

      reply += `**?${mainCommand}${args}** = ${description}\n`
    }
    const beHelpEmbed = new MessageEmbed().setColor('#900CC7')
    .setAuthor(`Requested by ${message.author.username}!`, message.author.displayAvatarURL())
    .setDescription('Loading menu...')
    .setFooter(`Need help? Join our support server.`).setFooter()

    const helpEmbed = new MessageEmbed().setColor('#900CC7')
    .setAuthor(`Here are my commands ${message.author.username}!`, message.author.displayAvatarURL())
    .setDescription(reply)
    .setFooter(`Need help? Join our support server.`).setTimestamp()
    message.channel.send(beHelpEmbed).then((resultMesssage) => {
      setTimeout(function() {
        resultMesssage.edit(helpEmbed)
      }, 5000)
    })
  },
}