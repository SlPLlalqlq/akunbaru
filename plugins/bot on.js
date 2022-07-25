let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak BebanBot天 tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(bebanboton)$/i

handler.admin = true

export default handler
