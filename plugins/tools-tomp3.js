const { toPTT, toAudio } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `විධාන සමඟ වීඩියෝ/ශ්‍රව්‍ය පිළිතුරු දෙන්න *${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'මාධ්‍ය බාගත කළ නොහැක'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'පරිවර්තනය කිරීමට අසමත් විය.'
    conn.sendMessage(m.chat, { audio: audio.data, mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.help = ['toaudio (reply)']
handler.tags = ['tools']
handler.command = /^to(a(udio)?)$/i

module.exports = handler
