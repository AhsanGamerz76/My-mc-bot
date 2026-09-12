const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'subdomain.mcsh.io', 
        port: 25565,                  
        username: 'AFK_Bot_247',
    });

    bot.on('spawn', () => {
        console.log('Bot successfully joined the server!');
    });

    bot.on('end', () => {
        console.log('Bot disconnected! Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();
