const Discord = require('discord.js')
const db = require('quick.db')
const economy = require('../../economy')


module.exports = {
    commands: ['buy', 'purchase'],
    expectedArgs: '[What you want to buy]',
    permissionError: '',
    minArgs: 1,
    maxArgs: null,
    callback: async (message, arguments, text, client) => {
        const guildId = message.guild.id
        const userId = message.author.id
        let items = await db.fetch(message.author.id, { items: [] });
        const coins = await economy.getCoins(guildId, userId)
        const notEnough = "That is not enough coins. Get more and try again."

        if(text.toLowerCase() === 'test laptop') {
            if(coins < 75000) return message.channel.send(notEnough);
            economy.addCoins(guildId, userId, 75000 * -1)  
            db.push(userId, "<:Laptop:784150324465893396>Test Laptop")
        } else if(text.toLowerCase() === 'car') {
            if(coins < 1000) return message.channel.send(notEnough);
            economy.addCoins(guildId, userId, 1000 * -1)
            db.push(userId, ":race_car:Car")
        } else if(text.toLowerCase() === 'christmas card') {
            if(coins < 1000) return message.channel.send(notEnough);
            economy.addCoins(guildId, userId, 1000 * -1)
            db.push(userId, ":christmas_tree:Christmas Card")
        }
    },
    permissions: '',
    requiredRoles: [],
}