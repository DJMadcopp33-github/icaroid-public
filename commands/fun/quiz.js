const Discord = require('discord.js');
const config = require('../../config.json')
const fetch = require('node-fetch');
const { duration } = require('moment');

module.exports = {
    commands: ['quiz'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text, client) => {
        const response = await fetch('https://opentdb.com/api.php?amount=5&category=9&type=boolean');
        const data = await response.json();
        console.log(data)

        var length = data.results.length
        var randomNumber = Math.floor(Math.random() * length)
        var randomQuestion = data.results[randomNumber]
        var question = randomQuestion.question
        var answer = randomQuestion.correct_answer

        console.log(question)

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Quiz for ${message.author.username}!`, message.author.displayAvatarURL())
            .setDescription(question)
            .setTimestamp()
        message.channel.send(embed)
        .then(function(m) {
            m.react('✔️')
            m.react('❌')

            const durationFilter = (reaction, user) => {
                return ['✔️', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            m.awaitReactions(durationFilter, { max:1, time:120000 }).then(function(collected) {
                const durationReaction = collected.first()

                if(durationReaction.emoji.name === '✔️') {
                    if(answer === 'True') {
                        message.channel.send(`You got it right, well done!`)
                    } else {
                        message.channel.send(`You got it wrong, good luck next time!`)
                    }
                } else if(durationReaction.emoji.name === '❌') {
                    if(answer === 'False') {
                        message.channel.send(`You got it right, well done!`)
                    } else {
                        message.channel.send(`You got it wrong, good luck next time!`)
                    }
                }
            })
        })
    },
    permissions: '',
    requiredRoles: [],
}