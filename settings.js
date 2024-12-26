/*
Credit Pairing NdXz
Sc by : Deku Ganz
*/

const fs = require('fs');
const chalk = require('chalk');

// NO YANG MAU DI PAIRING
global.nopairing = "6289521240176"

//owmner v card
global.ytname = "Yt: sDoger" //ur yt chanel name
global.socialm = "IG: sDogerD" //ur github or insta name
global.location = "Indonesia" //ur location

global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autorecord = true
global.autoswview = true //auto status/story view
global.autoread = true
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
global.pesanon = true //show pesan on bot

global.ftreply = [
"https://files.catbox.moe/n9dq8n.jpg",
"https://files.catbox.moe/z1qpyr.jpg",
"https://files.catbox.moe/h80k2k.jpg",
"https://files.catbox.moe/gnykvj.jpg",
"https://files.catbox.moe/4u7utd.jpg"
]

//new
global.botname = 'YuraBot' //ur bot name
global.ownernumber = ['6287833288249'] //ur owner number, dont add more than one
global.ownername = 'sDoger' //ur owner name
global.ownername2 = 'Hiraa' //ur owner name
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/GOvnMFXMHXr5DAiE8BQNZH"
global.saluran = "120363335989645846@newsletter"
global.jidgroupnotif = '120363327820383938@g.us'
global.saluran2 = "120363325328533494@newsletter"
global.jidgroup = '120363327820383938@g.us'
global.jidch = '120363335989645846@newsletter'
global.themeemoji = '🪀'
global.wm = "Yura Bot"
global.botscript = '' //script link
global.packname = "Yura Botzz"
global.author = "ʙʏ: sDoger"
global.creator = "6281249643011@s.whatsapp.net"
global.xprefix = '.'
global.tiktokname = '@sDoger' //name tiktok owner
global.tiktokname2 = '@celzyundefined' //name tiktok2 owner
global.tiktokname3 = '@leooganz._' //name tiktok3 owner
global.linkch = "https://whatsapp.com/channel/0029VawWaW38PgsEEn8s3b0U"
global.linkgc = "https://chat.whatsapp.com/GOvnMFXMHXr5DAiE8BQNZH"
global.linksosmed = "https://youtube.com/@sDoger"
global.version = "v20"

global.premium = ["6281249643011"] // Premium User
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
global.sessionName = 'session'

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://dapxzprib.serverpanell.biz.id"
global.apikey = "ptla_Sp587hIO3tqqah1846RcA7ROxnoKOLHL8zUBzP3bLSL" //ptla
global.capikey = "ptlc_8yJkNNiqnnubdoVLA4G6IrSIQorp1dweMoyvN4Vr7I2" //ptlc


//bot sett
global.typemenu = 'v7' // menu type 'v1' => 'v4'
global.typemenulist = 'v5' // menu type 'v1' => 'v4'
global.typereply = 'v6' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.ftyuta = [
"https://telegra.ph/file/67def6817bede6ba3cdf1.jpg",
]

global.ftsc = [
"https://files.catbox.moe/7l39zv.jpg",
]

global.fotofl = [
fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')
]

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 0,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: '*[ ᴇʀʀʀᴏʀ ]* Error',
	nsfw: '*[ ɴsғᴡ ]* Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done',
	loading: '*[ ʟᴏᴀᴅɪɴɢ ]* Please Wait....'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});