
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `සිරස්තලයක් සහිත ස්ටිකරයට පිළිතුරු දෙන්න *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `සිරස්තලයක් සහිත ස්ටිකරයට පිළිතුරු දෙන්න *${usedPrefix + command}*`
  try {
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', '*DONE*', m, false, {
    thumbnail: Buffer.alloc(0)
  })
  } catch (e) {
  return `*Media does not support!*`
  }
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
module.exports = handler
