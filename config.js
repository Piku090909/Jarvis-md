const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  AUDIO_DATA: process.env.AUDIO_DATA || 'alex;piku;https://telegra.ph/file/83b9c9d01c9c571501d8e.mp4',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  LOGS: toBool(process.env.LOGS) || true,
  KOYEB_API: process.env.KOYEB_API || '',
  SERVERURL: process.env.SERVERURL || '',
  SERVER: process.env.SERVER || 'defeat',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_de39_7dfd_cf50_f33a_0c92_c8aa_7c2c_1c75',
  LANG: process.env.LANG || 'EN',
  AUTO_REACTION: process.env.AUTO_REACTION || 'true',
  HANDLERS: process.env.HANDLER  || 'null',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: 'main',
  PORT: toBool(process.env.PORT) || 8000,
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'alex;piku',
  AUTO_STATUS_VIEWS: toBool(process.env.AUTO_STATUS_VIEWS || 'true'),
  WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
  GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
  AUTHOR: process.env.AUTHOR || 'alexpiku',
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;alexpiku;https://telegra.ph/file/83b9c9d01c9c571501d8e.mp4',
  SUDO: process.env.SUDO || '918536881026,',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || 'alex;piku;https://telegra.ph/file/83b9c9d01c9c571501d8e.mp4',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
