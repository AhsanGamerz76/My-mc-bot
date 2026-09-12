const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'subdomain.mcsh.io', 
        port: 25565,                  
        username: 'AFK_Bot_247',
    });

    bot.on('spawn', () => {
        console.log('Bot successfully joined the server!');
        
        // Wait 3 seconds after spawning, then type the login command
        setTimeout(() => {
            // CHANGE "YourPassword123" to the password you want the bot to use
            bot.chat('/login YourPassword123'); 
            console.log('Sent login command.');
        }, 3000);
    });

    bot.on('end', () => {
        console.log('Bot disconnected! Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();
