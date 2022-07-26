let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5.00'
let sn = '10.00'
let ss = '20.00'
let sp = '40.00'
let sv = '50.00'
//premium
let ph = '10.00'
let pn = '20.00'
let pp = '30.00'
let pv = '50.00'
let ppm = '100.00'
let info = `
╭──「 *_SEWABOT_* 」
│❏  1 Minggu : RM 5.00
│❏  2 Minggu : RM 10.00
│❏  1 Bulan : RM 20.00
│❏  3 Bulan : 40.00
│❏  5 Bulan : 50.00
╰────
╭─ [ *_KELEBIHAN BOT_* ]
│❏  On 24 Jam
│❏  Fitur Lengkap
╰────
╭─[ *_Keuntungan_* ]
│❏  Antilink ( Auto Kick )
│❏  Welcome Image
│❏  Leave Image
│❏  Cocok Buat Jaga Grup
│❏  Dan Ratusan Fitur Lainnya
╰────
╭─[ *_MINAT CHAT_* ]
│❏  🪀 wa.me/60109102984
╰────

╭──「 *_JADIBOT + OWNER_* 」
│❏   RM 20.00
╰────
╭─ [ *_FASILITAS_* ]
│❏  Cuma Scan QR Doang
│❏  Fitur Bot Nya Banyak
│❏  Banyak Fitur Langka
╰────
╭─[ *_KEUNTUNGAN_* ]
│❏  Bisa Open Sewabot
│❏  Nama Bot + Owner
│❏  Bisa Dapat Cuan
╰────
╭─[ *_MINAT CHAT_* ]
│❏  🪀 wa.me/60109102984
╰──── 

╭─[ *_PEMBAYARAN_*  ]
│❏  Via Digi 0109102984
╰────────────

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'Ringgit (1 minggu)' },
	    {title: "🔖 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'Ringgit (2 minggu)' },
	{title: "🔖 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'Ringgit (1 bulan)' },
	{title: "🔖 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'Ringgit (3 bulan)' },
	{title: "🔖 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'Ringgit (5 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'Ringgit (1 minggu)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'Ringgit (1 bulan)' },
	{title: "🌟 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'Ringgit (4 bulan)' },
	{title: "🌟 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'Ringgit (8 bulan)' },
	{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'Ringgit (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
