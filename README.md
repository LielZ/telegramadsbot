# Telegram Bot Setup

## JavaScript Bot

**Quick Start:**
1. **Install Node.js** from https://nodejs.org/ if not installed
2. **Double-click `install_node_bot.bat`** - Installs dependencies and runs the bot
3. **Or double-click `run_js_bot.bat`** - Just runs the bot (after dependencies are installed)

**Manual Setup:**
```bash
npm install
node bot.js
```

## Files

**JavaScript (Working):**
- `bot.js` - Main JavaScript bot
- `package.json` - Node.js dependencies
- `install_node_bot.bat` - Install and run JS bot
- `run_js_bot.bat` - Run JS bot only

**Python (Problematic):**
- `main.py` - Original bot code
- `run_bot.py` - Enhanced bot with better error handling
- `test_env.py` - Environment testing script
- `quick_fix.bat` - Simple installation and run script
- `install_and_run.bat` - Detailed installation script

## Bot Features

- Multi-language support (English, Hebrew, Spanish, Russian, Portuguese, German, Turkish, Arabic, French, Swedish, Indonesian)
- Responds to `/start` command and any text message
- Sends gambling/casino promotional messages based on user's language
- Better error handling and logging

## Token

environment variable:
```bash
# Node.js
export TELEGRAM_BOT_TOKEN=your_token_here

# Windows
set TELEGRAM_BOT_TOKEN=your_token_here
```
