const TelegramBot = require('node-telegram-bot-api');

// Bot token
const TOKEN = '8485700851:AAHgcRS0kZRTFkjBJpqN9h8BUIOikk1gzlE';

// Create bot instance
const bot = new TelegramBot(TOKEN, { polling: true });

// Messages in different languages
const MESSAGES = {
    en: `🎰 Get Premium Casinos, Poker & Sports Betting Handpicked & Verified for Your Area.

🔹 Top Rated Online Casino 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 SportsBook: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Real Live Poker ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Best Crypto Casino
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Get daily premium sports betting tips! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    es: `🎰 Obtén Casinos, Póker y Apuestas Deportivas Premium Seleccionados y Verificados para tu Área.

🔹 Casino Online Mejor Calificado 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 Casa de Apuestas: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Póker en Vivo Real ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Mejor Cripto Casino
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ ¡Obtén consejos premium diarios de apuestas deportivas! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    ru: `🎰 Получите Премиум Казино, Покер и Ставки на Спорт, Отобранные и Проверенные для Вашего Региона.

🔹 Лучшее Онлайн Казино 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 Букмекер: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Настоящий Живой Покер ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Лучшее Крипто Казино
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Получайте ежедневные премиум советы по спортивным ставкам! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    pt: `🎰 Obtenha Cassinos, Pôquer e Apostas Esportivas Premium Selecionados e Verificados para Sua Região.

🔹 Cassino Online Melhor Avaliado 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 Casa de Apostas: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Pôquer Ao Vivo Real ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Melhor Cripto Cassino
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Receba dicas premium diárias de apostas esportivas! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    id: `🎰 Dapatkan Kasino, Poker & Taruhan Olahraga Premium yang Dipilih & Diverifikasi untuk Wilayah Anda.

🔹 Kasino Online Teratas 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 SportsBook: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Poker Langsung Asli ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Kasino Kripto Terbaik
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Dapatkan tips taruhan olahraga premium harian! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    de: `🎰 Holen Sie sich Premium-Casinos, Poker & Sportwetten, handverlesen & verifiziert für Ihre Region.

🔹 Top Bewertetes Online-Casino 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 Sportwetten: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Echtes Live Poker ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Bestes Krypto-Casino
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Erhalte tägliche Premium Sportwetten Tipps! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    tr: `🎰 Bölgeniz için seçilmiş ve doğrulanmış Premium Kumarhane, Poker & Spor Bahisleri alın.

🔹 En İyi Online Kumarhane 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 Spor Bahisleri: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Gerçek Canlı Poker ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 En İyi Kripto Kumarhane
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Günlük premium spor bahis ipuçları alın! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    ar: `🎰 احصل على كازينوهات وبوكر ومراهنات رياضية مميزة تم اختيارها والتحقق منها لمنطقتك.

🔹 أفضل كازينو عبر الإنترنت 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 مراهنات رياضية: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 بوكر حي حقيقي ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 أفضل كازينو للعملات المشفرة
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ احصل على نصائح مراهنات رياضية يومية مميزة! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    fr: `🎰 Obtenez des Casinos, du Poker & des Paris Sportifs Premium Sélectionnés & Vérifiés pour Votre Région.

🔹 Casino en Ligne le Mieux Noté 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 Paris Sportifs: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Véritable Poker en Direct ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Meilleur Crypto-Casino
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Recevez des conseils premium quotidiens sur les paris sportifs! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    sv: `🎰 Få Premium Casinoer, Poker & Sportbetting Handplockade & Verifierade för Ditt Område.

🔹 Topprankat Online Casino 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 SportsBook: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 Äkta Live Poker ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 Bästa Kryptocasino
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ Få dagliga premium sportbetting tips! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`,

    he: `🎰 קבל קזינו, פוקר והימורי ספורט פרמיום נבחרים ומאומתים לאזור שלך.

🔹 קזינו מקוון מדורג ביותר 🎰
👉 https://casinobetings.com?kw=best_gambling_tips_bot

🔹 הימורי ספורט: ⚽️🏀🎾
👉 https://sportbetings.com?kw=best_gambling_tips_bot

🔹 פוקר חי אמיתי ♣️
👉 https://pokerbetnow.com?kw=best_gambling_tips_bot

🔹 קזינו קריפטו הטוב ביותר
👉 https://crypto-bettings.com?kw=best_gambling_tips_bot

⚽️ קבל טיפים יומיים פרמיום להימורי ספורט! 🏈
🏀 https://bit.ly/sport_bet_tips ⚾️`
};

// Function to get message by language code
function getMessage(langCode) {
    if (!langCode) return MESSAGES.en;
    
    // Extract main language code (e.g., "en-US" -> "en")
    const mainLang = langCode.split('-')[0];
    
    return MESSAGES[mainLang] || MESSAGES.en;
}

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const langCode = msg.from.language_code;
    const message = getMessage(langCode);
    
    console.log(`✓ Received /start from user ${msg.from.username || msg.from.id} (lang: ${langCode})`);
    
    bot.sendMessage(chatId, message)
        .then(() => {
            console.log(`✓ Sent response to user ${msg.from.username || msg.from.id}`);
        })
        .catch((error) => {
            console.error('✗ Error sending message:', error);
        });
});

// Handle any text message (fallback)
bot.on('message', (msg) => {
    // Skip if it's a command (already handled above)
    if (msg.text && msg.text.startsWith('/')) {
        return;
    }
    
    const chatId = msg.chat.id;
    const langCode = msg.from.language_code;
    
    console.log(`✓ Received message from user ${msg.from.username || msg.from.id}: "${msg.text}"`);
    
    // Send the same promotional message for any text
    const message = getMessage(langCode);
    
    bot.sendMessage(chatId, message)
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

// Start message
console.log('🚀 Telegram Bot started successfully!');
console.log('📱 Send /start to your bot to test it');
console.log('🛑 Press Ctrl+C to stop the bot');
console.log('=====================================');
