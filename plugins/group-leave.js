let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('බොට් කණ්ඩායම හැර යනු ඇත', m.chat) 
        await sleep(1000)
        await conn.groupLeave(group)
        }
handler.command = handler.help = ['out', 'leavegc']
handler.tags = ['group']

handler.owner = true

module.exports = handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
