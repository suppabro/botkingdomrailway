let handler = async (m, { conn }) => {
  try {
    conn.reply(m.chat, `*Link Group:* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) + `\n\n${conn.user.name}`, m)
  } catch {
    conn.reply(m.chat, `ඒක හදන්න@${conn.user.jid.split('@')[0]} පරිපාලක ලෙස මෙම විධානය භාවිතා කරන්න!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(g(c)?ro?up)?$/i

handler.group = true
handler.admin = true

module.exports = handler