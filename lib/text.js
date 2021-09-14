const moment = require('moment-timezone'); 

const listmenu = (prefix) => {
	let p = 0
	let a = 0
	return `
*┏━──Information Bot*
*┃*
*┃➥ Bot Name : Emilia*
*┃➥ Whatsapp Bot Ver : 2.6.0*
*┃➥ Creator : Tor II*
*┃➥ Prefix : Multi* 
*┃*
*┗━──────────────*
	
*┏━──INFORMATION*
*┃➥ ${prefix}owner*
*┃➥ ${prefix}limit*
*┃➥ ${prefix}speed*
*┃➥ ${prefix}runtime*
*┃➥ ${prefix}listvn*
*┃➥ ${prefix}stickermenu*
*┃➥ ${prefix}sourcecode*
*┗━─────────────────────────────*

*┏━──GROUP ONLY*
*┃➥ ${prefix}group* *open|close*
*┃➥ ${prefix}antilink* *on|off*
*┃➥ ${prefix}antitagall* *on|off*
*┃➥ ${prefix}antiviewonce* *on|off*
*┃➥ ${prefix}welcome* *on|off*
*┃➥ ${prefix}leave* *on|off*
*┃➥ ${prefix}setgroupicon* *replyImage*
*┃➥ ${prefix}setgroupname* *text*
*┃➥ ${prefix}setgroupdesc* *text*
*┃➥ ${prefix}hidetag* *text*
*┃➥ ${prefix}promote* *@tag*
*┃➥ ${prefix}demote* *@tag*
*┃➥ ${prefix}kick* *@tag*
*┃➥ ${prefix}add* *number*
*┃➥ ${prefix}getpp* *@tag*
*┃➥ ${prefix}tagall*
*┃➥ ${prefix}linkgroup*
*┃➥ ${prefix}revoke*
*┃➥ ${prefix}leave*
*┗━─────────────────────────────*

*┏━──DOWNLOADER*
*┃➥ ${prefix}play* *query*
*┃➥ ${prefix}playvid* *query*
*┃➥ ${prefix}youtubedl* *query*
*┃➥ ${prefix}ytmp3* *link*
*┃➥ ${prefix}ytmp4* *link*
*┃➥ ${prefix}igstory* *username*
*┃➥ ${prefix}ig* *link*
*┃➥ ${prefix}tiktok* *link*
*┃➥ ${prefix}joox* *song*
*┗━────────────────━─────────────────*

*┏━──STICKER*
*┃➥ ${prefix}stickerwm* *pack|author*
*┃➥ ${prefix}takestick* *pack|author*
*┃➥ ${prefix}toimg* *replySticker*
*┃➥ ${prefix}togif* *replySticker*
*┃➥ ${prefix}semoji* *emoji*
*┃➥ ${prefix}stickerfire*
*┃➥ ${prefix}stickernobg*
*┃➥ ${prefix}stickergif*
*┃➥ ${prefix}sticker*
*┗━─────────────────────────────*

*┏━──EDUCATION* 
*┃➥ ${prefix}nulis* *text*
*┃➥ ${prefix}brainly* *query*
*┃➥ ${prefix}kbbi* *query*
*┃➥ ${prefix}wiki* *query*
*┗━─────────────────────────────*

*┏━──SEARCNING* 
*┃➥ ${prefix}playstore* *apk*
*┃➥ ${prefix}happymod* *apk*
*┃➥ ${prefix}iguser* *username*
*┃➥ ${prefix}igstalk* *username*
*┃➥ ${prefix}ytsearch* *query*
*┃➥ ${prefix}ytplaylist* *query*
*┃➥ ${prefix}ytchannel* *channel*
*┃➥ ${prefix}shoppe* *product*
*┃➥ ${prefix}spotify* *song*
*┃➥ ${prefix}gsmarena* *hp*
*┃➥ ${prefix}searchmusic* *replyAudio*
*┃➥ ${prefix}wallpaper* *query*
*┃➥ ${prefix}pinterest* *query*
*┃➥ ${prefix}googleimage* *query*
*┃➥ ${prefix}jagokata* *kata*
*┗━──────────────────━──────────────────*

*┏━──PRIMBON*
*┃➥ ${prefix}jodoh* *kamu|dia*
*┃➥ ${prefix}artinamav* *nama*
*┃➥ ${prefix}artimimpi* *mimpi*
*┗━──────────────────━──────────────────*

*┏━──RANDOM* 
*┃➥ ${prefix}fml*
*┃➥ ${prefix}randomquran*
*┃➥ ${prefix}meme*
*┃➥ ${prefix}darkjoke*
*┃➥ ${prefix}pantun*
*┃➥ ${prefix}nickepep*
*┃➥ ${prefix}quotes*
*┃➥ ${prefix}estetikpic*
*┗━──────────────────━────────────*

*── 「 TEXT MAKER 」 ──* 
*┃➥ ${prefix}wolflogo* *text1|text2*
*┃➥ ${prefix}logoaveng* *text1|text2*
*┃➥ ${prefix}phlogo* *text1|text2*
*┃➥* ${prefix}marvellogo* *text1|text2*
*┃➥ ${prefix}gtext* *text1|text2*
*┃➥ ${prefix}pubglogo* *text1|text2*
*┃➥ ${prefix}snowwrite* *text1|text2*
*┃➥ ${prefix}watercolour* *text1|text2*
*┃➥ ${prefix}harta* *text*
*┃➥ ${prefix}thundertext* *text*
*┃➥ ${prefix}flametext* *text*
*┃➥ ${prefix}glowtext* *text*
*┃➥ ${prefix}smoketext* *text*
*┃➥ ${prefix}lithgtext* *text*
*┃➥ ${prefix}flowertext* *text*
*┃➥ ${prefix}bneon* *text*
*┃➥ ${prefix}matrix* *text*
*┃➥ ${prefix}breakwall* *text*
*┃➥ ${prefix}gneon* *text*
*┃➥ ${prefix}dropwater* *text*
*┃➥ ${prefix}tfire* *text*
*┃➥ ${prefix}sandw* *text*
*┃➥ ${prefix}epep* *text*
*┃➥ ${prefix}gplaybutton* *text*
*┃➥ ${prefix}splaybutton* *text*
*┃➥ ${prefix}text3dbox* *text*
*┃➥ ${prefix}text3d* *text*
*┃➥ ${prefix}logobp* *text*
*┃➥ ${prefix}leavest* *text*
*┃➥ ${prefix}tlight* *text*
*┃➥ ${prefix}naruto* *text*
*┃➥ ${prefix}crosslogov* *text*
*┃➥ ${prefix}cslogo* *text*
*┃➥ ${prefix}crismes* *text*
*┗━──────────────────━────────────────*

*── 「 IMAGE MAKER 」 ──* 
*┃➥ ${prefix}missing* *text1|text2|text3|@tag*
*┃➥ ${prefix}calender* *replyImage / @tag*
*┃➥ ${prefix}drawing* *replyImage / @tag*
*┃➥ ${prefix}sketch* *replyImage / @tag*
*┗━──────────────────━────────────────────────────*

*── 「 OTHER 」 ──* 
*┃➥ ${prefix}tomp3* *replyVideo*
*┃➥ ${prefix}removebg* *replyImage / @tag*
*┃➥ ${prefix}qrencode* *text*
*┃➥ ${prefix}barcode* *text*
*┃➥ ${prefix}jadwalsholat* *daerah*
*┃➥ ${prefix}jadwaltv* *channel*
*┃➥ ${prefix}tebakgambar*
*┃➥ ${prefix}fetch* *url*
*┗━──────────────────━────────────────*

*── 「 ASUPAN 」 ──* 
*┃➥ ${prefix}asupan *1 - 8*

*${a+=1}.* Ukhti
*${a+=1}.* Santuy
*${a+=1}.* +62
*${a+=1}.* Bocil
*${a+=1}.* Rika Gusriani
*${a+=1}.* Ghea
*${a+=1}.* Chika
*${a+=1}.* Random
*┗━──────────────────━─────────*

*── 「 ANIME 」 ──* 
*┃➥ ${prefix}waifu*
*┃➥ ${prefix}husbu*
*┃➥ ${prefix}neko*
*┃➥ ${prefix}hentai*
*┃➥ ${prefix}anime* *title*
*┃➥ ${prefix}manga* *title*
*┃➥ ${prefix}chara* *name*
*┗━──────────────────━────────────────*

*── 「 OWNER 」 ──* 
*┃➥ ${prefix}setpp* *replyImage*
*┃➥ ${prefix} *eval*
*┃➥ ${prefix}>* *terminal*
*┃➥ ${prefix}block* *@tag*
*┃➥ ${prefix}unblock* *@tag*
*┃➥ ${prefix}join* *link*
*┃➥ ${prefix}bc* *text*
*┃➥ ${prefix}addvn* *replyAudio/vn*
*┃➥ ${prefix}delvn* *name*
*┃➥ ${prefix}premium add* *@tag*
*┃➥ ${prefix}premium del* *@tag*
*┃➥ ${prefix}premium list*
*┃➥ ${prefix}clearall*
*┃➥ ${prefix}resetlimit*
*┗━──────────────────━────────────────*
`
}

const gmenu = (prefix) => {
	let p = 0
	return `*── 「 GROUP ONLY 」 ──* 

*┃➥ ${prefix}group *open|close*
*┃➥ ${prefix}antilink *on|off*
*┃➥ ${prefix}antitagall *on|off*
*┃➥ ${prefix}antiviewonce *on|off*
*┃➥ ${prefix}welcome *on|off*
*┃➥ ${prefix}leave *on|off*
*┃➥ ${prefix}setgroupicon *replyImage*
*┃➥ ${prefix}setgroupname *text*
*┃➥ ${prefix}setgroupdesc *text*
*┃➥ ${prefix}hidetag *text*
*┃➥ ${prefix}promote *@tag*
*┃➥ ${prefix}demote *@tag*
*┃➥ ${prefix}kick *@tag*
*┃➥ ${prefix}add *number*
*┃➥ ${prefix}getpp *@tag*
*┃➥ ${prefix}tagall
*┃➥ ${prefix}linkgroup
*┃➥ ${prefix}revoke
*┃➥ ${prefix}leave
*┗━──────────────────━────────────────*
`
}

const dwmenu = (prefix) => {
	let p = 0
	return `*── 「 DOWNLOADER 」 ──* 

*┃➥ ${prefix}play *query*
*┃➥ ${prefix}playvid *query*
*┃➥ ${prefix}youtubedl *query*
*┃➥ ${prefix}ytmp3 *link*
*┃➥ ${prefix}ytmp4 *link*
*┃➥ ${prefix}igstory *username*
*┃➥ ${prefix}ig *link*
*┃➥ ${prefix}tiktok *link*
*┃➥ ${prefix}joox *song*
*┗━──────────────────━────────────────*
`
}

const smenu = (prefix) => {
	let p = 0
	return `*── 「 STICKER 」 ──* 

*┃➥ ${prefix}stickerwm *pack|author*
*┃➥ ${prefix}takestick *pack|author*
*┃➥ ${prefix}toimg *replySticker*
*┃➥ ${prefix}togif *replySticker*
*┃➥ ${prefix}semoji *emoji*
*┃➥ ${prefix}stickerfire
*┃➥ ${prefix}stickernobg
*┃➥ ${prefix}stickergif
*┃➥ ${prefix}sticker
*┗━──────────────────━────────────────*
`
}

const emenu = (prefix) => {
	let p = 0
	return `*── 「 EDUCATION 」 ──* 

*┃➥ ${prefix}nulis *text*
*┃➥ ${prefix}brainly *query*
*┃➥ ${prefix}kbbi *query*
*┃➥ ${prefix}wiki *query*
*┗━──────────────────━────────────────*
`
}

const srcmenu = (prefix) => {
	let p = 0
	return `*── 「 SEARCHING 」 ──* 

*┃➥ ${prefix}playstore *apk*
*┃➥ ${prefix}happymod *apk*
*┃➥ ${prefix}iguser *username*
*┃➥ ${prefix}igstalk *username*
*┃➥ ${prefix}ytsearch *query*
*┃➥ ${prefix}ytplaylist *query*
*┃➥ ${prefix}ytchannel *channel*
*┃➥ ${prefix}shoppe *product*
*┃➥ ${prefix}spotify *song*
*┃➥ ${prefix}gsmarena *hp*
*┃➥ ${prefix}searchmusic *replyAudio*
*┃➥ ${prefix}wallpaper *query*
*┃➥ ${prefix}pinterest *query*
*┃➥ ${prefix}googleimage *query*
*┃➥ ${prefix}jagokata *kata*
*┗━──────────────────━────────────────*
`
}

const pmenu = (prefix) => {
	let p = 0
	return `*── 「 PRIMBON 」 ──* 

*┃➥ ${prefix}jodoh *kamu|dia*
*┃➥ ${prefix}artinama *nama*
*┃➥ ${prefix}artimimpi *mimpi*
*┗━──────────────────━────────────────*
`
}

const rnmenu = (prefix) => {
	let p = 0
	return `*── 「 RANDOM 」 ──* 

*┃➥ ${prefix}fml
*┃➥ ${prefix}randomquran
*┃➥ ${prefix}meme
*┃➥ ${prefix}darkjoke
*┃➥ ${prefix}pantun
*┃➥ ${prefix}nickepep
*┃➥ ${prefix}quotes
*┃➥ ${prefix}estetikpic
*┗━──────────────────━────────────────*
`
}

const txmaker = (prefix) => {
	let p = 0
	return `*── 「 TEXT MAKER 」 ──* 

*┃➥ ${prefix}wolflogo *text1|text2*
*┃➥ ${prefix}logoaveng *text1|text2*
*┃➥ ${prefix}phlogo *text1|text2*
*┃➥ ${prefix}marvellogo *text1|text2*
*┃➥ ${prefix}gtext *text1|text2*
*┃➥ ${prefix}pubglogo *text1|text2*
*┃➥ ${prefix}snowwrite *text1|text2*
*┃➥ ${prefix}watercolour *text1|text2*
*┃➥ ${prefix}harta *text*
*┃➥ ${prefix}thundertext *text*
*┃➥ ${prefix}flametext *text*
*┃➥ ${prefix}glowtext *text*
*┃➥ ${prefix}smoketext *text*
*┃➥ ${prefix}lithgtext *text*
*┃➥ ${prefix}flowertext *text*
*┃➥ ${prefix}bneon *text*
*┃➥ ${prefix}matrix *text*
*┃➥ ${prefix}breakwall *text*
*┃➥ ${prefix}gneon *text*
*┃➥ ${prefix}dropwater *text*
*┃➥ ${prefix}tfire *text*
*┃➥ ${prefix}sandw *text*
*┃➥ ${prefix}epep *text*
*┃➥ ${prefix}gplaybutton *text*
*┃➥ ${prefix}splaybutton *text*
*┃➥ ${prefix}text3dbox *text*
*┃➥ ${prefix}text3d *text*
*┃➥ ${prefix}logobp *text*
*┃➥ ${prefix}leavest *text*
*┃➥ ${prefix}tlight *text*
*┃➥ ${prefix}naruto *text*
*┃➥ ${prefix}crosslogo *text*
*┃➥ ${prefix}cslogo *text*
*┃➥ ${prefix}crismes *text*
*┗━──────────────────━────────────────*
`
}

const imgmaker = (prefix) => {
	let p = 0
	return `*── 「 IMAGE MAKER 」 ──* 

*┃➥ ${prefix}missing *text1|text2|text3|@tag*
*┃➥ ${prefix}calender *replyImage / @tag*
*┃➥ ${prefix}drawing *replyImage / @tag*
*┃➥ ${prefix}sketch *replyImage / @tag*
*┗━──────────────────━────────────────*
`
}

const othmenu = (prefix) => {
	let p = 0
	return `*── 「 OTHER 」 ──* 

*┃➥ ${prefix}tomp3 *replyVideo*
*┃➥ ${prefix}removebg *replyImage / @tag*
*┃➥ ${prefix}qrencode *text*
*┃➥ ${prefix}barcode *text*
*┃➥ ${prefix}jadwalsholat *daerah*
*┃➥ ${prefix}jadwaltv *channel*
*┃➥ ${prefix}tebakgambar
*┗━──────────────────━────────────────*
`
}

const info = (prefix) => {
	let p = 0
	return `*── 「 INFO 」 ──* 

*┃➥ ${prefix}owner*
*┃➥ ${prefix}limit*
*┃➥ ${prefix}speed*
*┃➥ ${prefix}runtime*
*┃➥ ${prefix}listvn*
*┃➥ ${prefix}stickercmd*
*┃➥ ${prefix}sourcecode*
*┗━──────────────────━────────────*
`
}

const nimem = (prefix) => {
	let p = 0
	return `*── 「 ANIME 」 ──* 

*┃➥ ${prefix}waifu*
*┃➥ ${prefix}husbu*
*┃➥ ${prefix}neko*
*┃➥ ${prefix}hentai*
*┃➥ ${prefix}anime* *title*
*┃➥ ${prefix}manga* *title*
*┃➥ ${prefix}chara* *name*
*┗━──────────────────━────────────────*
`
}

const ownerm = (prefix) => {
	let p = 0
	return `*── 「 OWNER 」 ──* 

*┃➥ ${prefix}self*
*┃➥ ${prefix}public*
*┃➥ ${prefix}setpp* *replyImage*
*┃➥ =>* *eval*
*┃➥ ^$* *exec*
*┃➥ ${prefix}block* *@tag*
*┃➥ ${prefix}unblock* *@tag*
*┃➥ ${prefix}join* *link*
*┃➥ ${prefix}bc* *text*
*┃➥ ${prefix}addvn* *replyAudio/vn*
*┃➥ ${prefix}delvn* *name*
*┃➥ ${prefix}premium add* *@tag*
*┃➥ ${prefix}premium del* *@tag*
*┃➥ ${prefix}premium list*
*┃➥ ${prefix}clearall*
*┃➥ ${prefix}resetlimit*
*┗━──────────────────━────────────────*
`
}

const ingfo = `This bot is built using the Node.js programming language / JavaScript
Source kode bot : https://github.com/justpiple/whatsapp-bot
If an error occurs, you can contact the bot owner, type !owner

Thank you.
`


const mess = {
             wait: 'Processing , Wait a minute',
			 group: 'This command is for groups only!',
			 admin: ' Sorry , only admin can use this command!',
			 botAdmin: 'I am not an admin T_T',
			 limit: 'Your usage limit has run out\n\nNote: limit will be reset at every 00.00',
			 ownerOnly: 'Only the owner can use this command!',
			lockF: 'This feature is locked by the owner'
}

module.exports = {
	listmenu,
	gmenu,
	dwmenu,
	smenu,
	emenu,
	srcmenu,
	pmenu,
	rnmenu,
	txmaker,
	imgmaker,
	othmenu,
	info,
	nimem,
	ownerm,
	ingfo,
	mess
}
