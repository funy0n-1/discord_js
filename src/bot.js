require('dotenv').config();

const { Client, Intents, Collection } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '.';
let token = process.env.botToken;
bot.login(token)

bot.on('ready', () => {
    console.log(`${bot.user.tag} is ready`)
});


const commandHandler = require('./commands');

bot.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        commandHandler(prefix, message);
    }
});