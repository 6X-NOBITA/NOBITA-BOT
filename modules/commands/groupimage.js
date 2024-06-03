const fs = require("fs");
const axios = require("axios")
module.exports.config = {
	name: "groupimage",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Change your group image",
	commandCategory: "Box", 
	usages: "groupimage", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event }) => {
	if (event.type !== "message_reply") return api.sendMessage("❌ ʏᴏᴜ ʜᴀᴠᴇ ᴛᴏ ʀᴇᴘʟʏ ᴀ ᴘʜᴏᴛᴏ ", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ ʏᴏᴜ ʜᴀᴠᴇ ᴛᴏ ʀᴇᴘʟʏ ᴀ ᴘʜᴏᴛᴏ", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴏɴʏ 1 ᴘʜᴏᴛᴏ.!`, event.threadID, event.messageID);
	var abc = event.messageReply.attachments[0].url
	let pathImg = __dirname + '/cache/loz.png';
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(pathImg, Buffer.from(getdata, 'utf-8'));
    return api.changeGroupImage(fs.createReadStream(__dirname + '/cache/loz.png'), event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
  }
