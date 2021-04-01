const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')
const welcome = require('./welcome')

client.on('ready', () => {
    console.log('the client is ready!')

    client.user.setActivity('need staff? type !h')

    command(client, 'h', (message) => {
        message.channel.send(`<@&825476758370910229> !
        המשתמש ${message.author} צריך את עזרתכם !
        נא לחכות בסבלנות לצוות שיגיע.`)
    })

    command(client, 'help', (message) => {
        message.channel.send(`<@&825476758370910229> !
        המשתמש ${message.author} צריך את עזרתכם !
        נא לחכות בסבלנות לצוות שיגיע.`)
    })

    command(client, 'helpme', (message) => {
        message.channel.send(`<@&825476758370910229> !
        המשתמש ${message.author} צריך את עזרתכם !
        נא לחכות בסבלנות לצוות שיגיע.`)
    })

    command(client, ['clear'], message => {
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(20)
                message.channel.send('20 has been cleared')
            })
        }
    })

    command(client, 'server', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `** ${guild.name} ** has total ** ${guild.memberCount} ** members`
            )
        })
    })

    welcome(client)
})

client.login(config.tokem)