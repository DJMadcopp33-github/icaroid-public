const Discord = require('discord.js')

module.exports = {
    commands: ['store', 'shop'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text, client) => {
        const shopEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} here's the shop!`, message.author.displayAvatarURL())
            .setDescription(`[Limited Items:](https://www.youtube.com/watch?v=tbNlMtqrYS0)\n <:Laptop:784150324465893396>Test Laptop - 75000\n :christmas_tree:Christmas Card - 100\n **Items:**\n :race_car:Car - 1000 Coins\n `)
            .setTimestamp()

        message.channel.send(shopEmbed)
    },
    permissions: '',
    requiredRoles: [],
}