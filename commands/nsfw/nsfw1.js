const discordNsfw = require('discord-nsfw')
const NSFW = new discordNsfw
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['anal'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text, client) => {
        if(message.channel.nsfw === true){
            const image = await NSFW.anal()
            const embed = new MessageEmbed()
            .setTitle('Take some anal!')
            .setImage(image)
            .setTimestamp()
            message.channel.send(embed)
        } else {
            message.channel.send(`We know you wanted to use this command, but please change the channel to nsfw first!`)
        }
    },
    permissions: '',
    requiredRoles: [],
}