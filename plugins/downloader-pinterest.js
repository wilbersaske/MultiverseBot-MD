let xfar = require('xfarr-api')
let handler = async (m, { usedPrefix, command, conn, args, text }) => {
	 	  if (!args[0]) throw `${mg}*Escriba el nombre para buscar la Imagen!!*\n\n*EJEMPLO*\n*${usedPrefix + command}* Animales`
xfar.Pinterest(args[0]).then(async data => {
	
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
	
let pincpt = `πLink media : ${data.url}`
await conn.sendFile(m.chat, data.url, 'pin.jpg', `π *Resultado de:* _${text}_\n${wm}`, fkontak, m)
 await conn.send3But(m.chat, wm, `α΄Ι΄Κα΄α΄α΄ | α΄ΙͺΙ΄α΄α΄Κα΄κ±α΄ \n${data.url}`, 'π¦πππ¨πππ‘π§π  π', `${usedPrefix}pinterest ${text}`, 'π‘ ππ¨π¦πππ₯ ππ‘ ππ’π’πππ', `${usedPrefix}image ${text}`, 'π ππ‘π¨ π£π₯ππ‘πππ£ππ β‘', `.menu`, fkontak, m)})
 }
handler.help = ['pinterest *texto*']
handler.tags = ['internet', 'downloader']
handler.command = /^(pinterest)$/i

module.exports = handler
