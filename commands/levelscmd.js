const mongo = require('../mongo')

module.exports = {
    commands: [ 'lvl', 'level', 'levels'],
    expectedArgs: "[Target user's @]",
    permissionError: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        message.channel.send('Coming soon!')
    },
    permissions: '',
    requiredRoles: [],
}