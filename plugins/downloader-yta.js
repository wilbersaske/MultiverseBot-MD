let axios = require('axios')
const fetch = require('node-fetch')
let limit = 1024354
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `${mg}*Ingrese un enlace vΓ‘lido de YouTube para descargar el Audio*\n\n*EJEMPLO*\n*${usedPrefix + command}* https://www.youtube.com/watch?v=c5gJRzCi0f0&t=265s`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize 
  const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
 if (!isLimit) m.reply(conn.sendBut(m.chat, 
`*β­πππβ¦ AUDIO β¦πππβ¬£*
 βΈ *YOUTUBE MP3*
 βΈ *π΄ππππππππππ©ππ-π΄π«*
 βΈβββββββββββββββ
 βΈπ§ *TΓ­tulo:* ${title}
 βΈπ§ *Tipo:* MP3
 βΈπ§ *Peso:* ${filesizeF}
*β°ππβ¦ β ${vs} β¦ππβ¬£*`, `${wm} | α΄κ±α΄α΄Κα΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄`, `β¨ π ππ‘π¨`, '.menu', fkontak,  m ))
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', ``.trim(), m, null, { asDocument: chat.useDocument })
}
handler.help = ['yta | ytmp3 *enlace*']
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.fail = null
handler.exp = 2
handler.limit = true

module.exports = handler

