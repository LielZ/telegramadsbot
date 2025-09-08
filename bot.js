const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.BOT_TOKEN_FOR_FKPC;

if (!TOKEN) {
    console.error("❌ BOT_TOKEN is not set! Please define it as an environment variable.");
    process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(TOKEN, { polling: true });

// Messages in different languages
const MESSAGES = {
    en: `⚽ Are you ready for real penalty kicks?  
Play *Football Kicks Pro Soccer* – PREMIUM football game with free kick competitions & multiplayer!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    es: `⚽ ¿Listo para penaltis reales?  
Juega *Football Kicks Pro Soccer* – Juego de fútbol PREMIUM con competiciones de tiros libres y multijugador.  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    ru: `⚽ Готовы к настоящим пенальти?  
Играйте в *Football Kicks Pro Soccer* – ПРЕМИУМ футбольная игра с штрафными ударами и мультиплеером!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    pt: `⚽ Preparado para pênaltis reais?  
Jogue *Football Kicks Pro Soccer* – Jogo de futebol PREMIUM com competições de faltas e multijogador.  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    id: `⚽ Siap untuk adu penalti nyata?  
Mainkan *Football Kicks Pro Soccer* – Game sepak bola PREMIUM dengan tendangan bebas & multiplayer!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    de: `⚽ Bereit für echte Elfmeter?  
Spiele *Football Kicks Pro Soccer* – PREMIUM-Fußballspiel mit Freistoß-Wettbewerben & Multiplayer!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    tr: `⚽ Gerçek penaltılara hazır mısın?  
*Football Kicks Pro Soccer* oyna – PREMIUM futbol oyunu, serbest vuruşlar ve çok oyunculu!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    ar: `⚽ هل أنت مستعد لركلات الجزاء الحقيقية؟  
العب *Football Kicks Pro Soccer* – لعبة كرة القدم PREMIUM مع ركلات حرة وطور متعدد اللاعبين!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    fr: `⚽ Prêt pour de vrais penaltys ?  
Jouez à *Football Kicks Pro Soccer* – Jeu de football PREMIUM avec coups francs et multijoueur.  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    sv: `⚽ Redo för riktiga straffsparkar?  
Spela *Football Kicks Pro Soccer* – PREMIUM fotbollsspel med frisparkar & multiplayer!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`,

    he: `⚽ מוכן לפנדלים אמיתיים?  
שחק ב-*Football Kicks Pro Soccer* – משחק כדורגל PREMIUM עם בעיטות חופשיות ומולטיפלייר!  

👉 https://play.google.com/store/apps/details?id=sk.inlogic.footballkicksprosoccer`
};

// Function to get message by language code
function getMessage(langCode) {
    if (!langCode) return MESSAGES.en;
    
    const mainLang = langCode.split('-')[0];
    return MESSAGES[mainLang] || MESSAGES.en;
}

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const langCode = msg.from.language_code;
    const message = getMessage(langCode);
    
    console.log(`✓ Received /start from user ${msg.from.username || msg.from.id} (lang: ${langCode})`);
    
    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' })
        .then(() => {
            console.log(`✓ Sent response to user ${msg.from.username || msg.from.id}`);
        })
        .catch((error) => {
            console.error('✗ Error sending message:', error);
        });
});

// Handle any text message (fallback)
bot.on('message', (msg) => {
    if (msg.text && msg.text.startsWith('/')) return;
    
    const chatId = msg.chat.id;
    const langCode = msg.from.language_code;
    
    console.log(`✓ Received message from user ${msg.from.username || msg.from.id}: "${msg.text}"`);
    
    const message = getMessage(langCode);
    
    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' })
        .then(() => {
            console.log(`✓ Sent promotional message to user ${msg.from.username || msg.from.id}`);
        })
        .catch((error) => {
            console.error('✗ Error sending message:', error);
        });
});

// Error handling
bot.on('error', (error) => {
    console.error('✗ Bot error:', error);
});

bot.on('polling_error', (error) => {
    console.error('✗ Polling error:', error);
});

console.log('🚀 Telegram Bot started successfully!');
console.log('📱 Send /start to your bot to test it');
console.log('🛑 Press Ctrl+C to stop the bot');
console.log('=====================================');
