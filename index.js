const { Client } = require('discord.js');
const Raven = require('raven');
require('dotenv').config();

Raven.config(process.env.SENTRY, { captureUnhandledRejections: true }).install();

const client = new Client()

client.ws.on('GUILD_DELETE', (d) => {
    Raven.captureException(d);
    console.log(d);
});

client.once('ready', () => console.log('Ready'))

client.login(process.env.TOKEN);