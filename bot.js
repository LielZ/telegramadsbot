const TelegramBot = require('node-telegram-bot-api');

// Bot token
const TOKEN = '8485700851:AAHgcRS0kZRTFkjBJpqN9h8BUIOikk1gzlE';

// Create bot instance
const bot = new TelegramBot(TOKEN, { polling: true });

// Messages in different languages
const MESSAGES = {
    en: `🤖 The most accurate and profitable predictions powered by advanced AI for:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    es: `🤖 Las predicciones más precisas y rentables impulsadas por IA avanzada para:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    ru: `🤖 Самые точные и прибыльные прогнозы на основе передового ИИ для:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    pt: `🤖 As previsões mais precisas e lucrativas alimentadas por IA avançada para:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    id: `🤖 Prediksi paling akurat dan menguntungkan didukung oleh AI canggih untuk:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    de: `🤖 Die genauesten und profitabelsten Vorhersagen, unterstützt von fortschrittlicher KI für:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    tr: `🤖 En doğru ve karlı tahminler, gelişmiş yapay zeka tarafından destekleniyor:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    ar: `🤖 أدق وأكثر التوقعات ربحية مدعومة بالذكاء الاصطناعي المتقدم لـ:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    fr: `🤖 Les prédictions les plus précises et rentables alimentées par une IA avancée pour :

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    sv: `🤖 De mest exakta och lönsamma förutsägelserna drivna av avancerad AI för:

👉 https://www.sports-ai.dev/?ext=telegram_ad`,

    he: `🤖 התחזיות המדויקות והרווחיות ביותר מופעלות על ידי בינה מלאכותית מתקדמת עבור:

👉 https://www.sports-ai.dev/?ext=telegram_ad`
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
