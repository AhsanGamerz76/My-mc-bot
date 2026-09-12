const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({ 
        host: 'subdomain.mcsh.io', 
        port: 25565, 
        username: 'AFK_Bot_247', 
        version: '1.21.4' 
    });

    bot.on('spawn', () => { 
        console.log('Bot logged in successfully to 1.21.4!'); 
        setTimeout(() => { 
            bot.chat('/register AhsanGamer'); 
            bot.chat('/login AhsanGamer'); 
        }, 3000); 
    });

    bot.on('end', () => setTimeout(createBot, 10000));
    bot.on('error', (err) => console.log('Network status:', err.message));
}
createBot();
