const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

async function handler(m, { conn, usedPrefix, command, args, text }) {
	if (!text) return m.reply('සිරස්තල සහිත වීඩියෝ/රූපය/ශ්‍රව්‍ය යවන්න.fakesize <අංක>');
  	const angka = args.join` `
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (!mime) throw 'Reply video/image/audio'
      const img = await q.download();
      const out = await uploadImage(img);
	let fileSizeLimit = 15 * 1024 * 1024 // 15MB ðŸ—¿
  if (img.length > fileSizeLimit) {
    throw 'මාධ්‍ය ප්‍රමාණය 15MB ඉක්මවිය නොහැක'
  }
	if (/^audio/.test(mime)) {
      conn.sendMessage(m.chat, {
    audio: img,
    mimetype: 'audio/mpeg',
    fileLength: angka})
   } else if (/^video/.test(mime)) {
      conn.sendMessage(m.chat, {
    video: img,
    gifPlayback: false,
    fileLength: angka})
   } else if (/^image/.test(mime)) {
    	conn.sendMessage(m.chat, {
    image: img,
    fileLength: angka})
    } else {
      m.reply(`සිරස්තල සහිත පින්තූර/වීඩියෝ/ශ්‍රව්‍ය යවන්න *${usedPrefix + command}* <number> හෝ යවා ඇති රූපය/වීඩියෝ/ශ්‍රව්‍ය ටැගය.`);
    }
}

handler.help = ['fakesize <angka>'];
handler.tags = ['tools'];
handler.command = ['fakesize'];
handler.premium = false;
handler.limit = false;

module.exports = handler;
