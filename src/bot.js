require('dotenv').config();

const { Client, Intents, Collection } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '.';
bot.prefix = prefix;
let token = process.env.token;
bot.login(token);

bot.on('ready', () => {
    console.log(`${bot.user.tag} is ready`)
});


const commandHandler = require('./commandHandler');

bot.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        commandHandler(bot, message);
    }
});