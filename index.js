
‎‎const TelegramBot = require("node-telegram-bot-api");
‎
‎const bot = new TelegramBot(process.env.8588316505:AAEh5vsJZ8fCBnb-1Y38EDMlS7lwVS3wVZs, {
‎  polling: true
‎});
‎
‎bot.onText(/\/start/, (msg) => {
‎
‎bot.sendMessage(msg.chat.id, "OPEN WEBSITE", {
‎
‎reply_markup: {
‎inline_keyboard: [
‎[
‎{
‎text: "OPEN",
‎url: "https://xtraderpvtserver.netlify.app/"
‎}
‎]
‎]
‎}
‎
‎});
‎
‎});
‎
‎console.log("Bot Running...");
