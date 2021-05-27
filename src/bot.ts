import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import checkStatus from './github';
dotenv.config();

const token = `${process.env.BOT_TOKEN}`;
const bot = new Telegraf(token);

bot.start((ctx) => {
  const keyboard = Markup.keyboard([['Check']]).resize();

  ctx.reply('Welcome', keyboard);
});

bot.hears('Check', async (ctx) => {
  const status = (await checkStatus()) || 'undefined';

  ctx.reply(status);
});

bot.launch();
