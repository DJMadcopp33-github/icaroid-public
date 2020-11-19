const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['listwarnings', 'lw'],
  minArgs: 1,
  expectedArgs: "<Target user's @>",
  requiredRoles: ['Moderator'],
  callback: async (message, arguments, text) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify a user to load the warnings for.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    await mongo().then(async (mongoose) => {
      try {
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })

        let reply = `Previous warnings for <@${userId}>:\n\n`

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning

          reply += `By ${author} on ${new Date(
            timestamp
          ).toLocaleDateString()} for "${reason}"\n\n`
        }
        
        const warnEmbed = new MessageEmbed()
            .setColor('#900CC7')
            .setAuthor(`${target.username}`, target.displayAvatarURL())
            .setDescription(reply)
            .setFooter(`Requested by ${message.author.username}.`)
            .setTimestamp()

        message.reply(warnEmbed)
      } finally {
        mongoose.connection.close()
      }
    })
  },
}