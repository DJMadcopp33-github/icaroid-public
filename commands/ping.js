const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'ping',
    callback: (message, arguments, text, client) => {
    const calcEmbed = new MessageEmbed()
        .setColor('#900CC7')
        .setTitle('**Ping!**')
        .setDescription('*Calaculating ping...*')
        .setFooter('Powered by Icaroid!')
        .setTimestamp()
      message.reply(calcEmbed).then((resultMessage) => {
        setTimeout(function() {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const pingEmbed = new MessageEmbed()
                .setColor('#900CC7')
                .setTitle('**Ping!**')
                .setDescription(`Bot latency: ${ping},\nAPI Latency: ${client.ws.ping}`)
                .setFooter('Powered by Icaroid!')
                .setTimestamp()
            resultMessage.edit(pingEmbed)
        }, 3000)
      })
    },
  }