const randomPuppy = require('random-puppy')
const Discord = require('discord.js')
const https = require('https');
const fetch = require('snekfetch')
const memePages = [
    'holup',
    'memes',
    'dankmemes',
    'wholesomememes',
    'memeeconomy'
]

module.exports = {
    commands: ['meme'],
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text, client) => {
        try {
            const randomMemeNumber = Math.floor(Math.random() * memePages.length)
            const randomMemeReddit = memePages[randomMemeNumber]
            const { body } = await fetch
                .get(`https://www.reddit.com/r/${randomMemeReddit}.json?sort=top&t=week`)
                .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            var awards = allowed[randomnumber].total_award_received
            if(awards === undefined){
                awards = 0
            }
            const embed = new Discord.MessageEmbed()
            .setColor(0x00A2E8)
            .setTitle(allowed[randomnumber].data.title)
            .setDescription("Posted by: " + allowed[randomnumber].data.author)
            .setImage(allowed[randomnumber].data.url)
            .setFooter(`👍${allowed[randomnumber].data.ups} 💬${allowed[randomnumber].data.num_comments} 🏆${awards}\nMeme from r/${randomMemeReddit}`)
            message.channel.send(embed).then(m => {
                m.react('👍')
                m.react('🤣')
                m.react('👎')
            })
        } catch (err) {
            return console.log(err);
        }
    },
    permissions: '',
    requiredRoles: [],
}