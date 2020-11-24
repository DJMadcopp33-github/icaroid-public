module.exports = (client) => {
    const totalMembers = eval(client.guilds.cache.map(g => g.memberCount).join(' + '));
    client.user.setActivity(`Bot Restarted!`, { type: "WATCHING" });
    var status = [
        "?help | Thank you for using Icaroid!", 
        `${client.guilds.cache.size} servers and ${totalMembers} members!`
    ];
    setInterval(() => {
        let gameval = Math.floor((Math.random() * status.length));
        client.user.setActivity(`${status[gameval]}`, { type: "WATCHING" });
    }, 6 * 10 * 1000);
}