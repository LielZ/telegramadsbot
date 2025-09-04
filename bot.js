const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
    console.error("❌ BOT_TOKEN is not set! Please define it as an environment variable.");
    process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(TOKEN, { polling: true });

// Messages in different languages
const MESSAGES = {
    en: `🎰 Play *Quick Hit Slots* – Free Slot Game on Google Play!  
✨ 100% Free to Play – No Real Money Required!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    es: `🎰 Juega *Quick Hit Slots* – Juego de tragamonedas gratis en Google Play!  
✨ 100% gratis para jugar – ¡sin dinero real!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    ru: `🎰 Играйте в *Quick Hit Slots* – Бесплатные слоты в Google Play!  
✨ 100% бесплатно – без реальных денег!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    pt: `🎰 Jogue *Quick Hit Slots* – Jogo de caça-níqueis grátis no Google Play!  
✨ 100% grátis – sem dinheiro real!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    id: `🎰 Mainkan *Quick Hit Slots* – Game Slot Gratis di Google Play!  
✨ 100% Gratis – Tanpa Uang Asli!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    de: `🎰 Spiele *Quick Hit Slots* – Kostenloses Slot-Spiel bei Google Play!  
✨ 100% kostenlos – kein echtes Geld nötig!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    tr: `🎰 *Quick Hit Slots* oyna – Google Play’de Ücretsiz Slot Oyunu!  
✨ %100 Ücretsiz – Gerçek Para Yok!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    ar: `🎰 العب *Quick Hit Slots* – لعبة سلوتس مجانية على Google Play!  
✨ 100٪ مجانية – بدون أموال حقيقية!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    fr: `🎰 Jouez à *Quick Hit Slots* – Jeu de machines à sous gratuit sur Google Play!  
✨ 100% gratuit – pas d'argent réel!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    sv: `🎰 Spela *Quick Hit Slots* – Gratis slotspel på Google Play!  
✨ 100% gratis – inga riktiga pengar!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`,

    he: `🎰 שחקו ב-*Quick Hit Slots* – משחק מכונות מזל חינמי ב-Google Play!  
✨ 100% חינמי – לא נדרש כסף אמיתי!  

👉 https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots`
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
