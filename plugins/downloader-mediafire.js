const { mediafireDl } = require('../lib/mediafire.js')
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`${mg}*Ingrese un Enlace vΓ‘lido de Mediafire*\n\n*EJEMPLO*\n*${usedPrefix + command}*`)
if (!args[0].includes('mediafire.com')) return m.reply(error.linkmf)
let mdjon = args.join(' ')
res = await mediafireDl(mdjon)
result = `*β­πππβ¦ MEDIAFIRE β¦πππβ¬£*
 βΈ *_π‘ InformaciΓ³n encontrada_*
 βΈδΈδΈδΈδΈδΈδΈδΈδΈδΈδΈ
 βΈ *_β Nombre_* β ${res[0].nama}
 βΈ *_β Peso_* β ${res[0].size}
 βΈ *_β Enlace_* β ${res[0].link}
 *β°ππππβ¦ β ${vs} β¦ππππβ¬£*`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message":  { 
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
   m.reply(conn.sendBut(m.chat, result, `α΄α΄α΄Ιͺα΄κ°ΙͺΚα΄ | ${wm}`, `π π ππ‘π¨ ππ’π π£πππ§π’`, '.? all', fkontak,  m ))
    m.reply(conn.sendBut(m.chat, global.wait, `${wm}`, `π π ππ‘π¨`, '.menu', fkontak,  m ))
//m.reply(result)
//await sleep(100)
      conn.sendFile(m.chat, res[0].link, res[0].nama, null, m, false, {asDocument:true, mimetype:res[0].mime})
}
handler.help = ['mediafire'].map(v => v + ' *enlace*')
handler.command = /^(mediafire)/i
module.exports = handler 


