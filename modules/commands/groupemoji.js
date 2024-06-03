module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Change your group Emoji",
	commandCategory: "Box", 
	usages: "groupemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("ʏᴏᴜ ʜᴀᴠᴇ ɴᴏᴛ ᴇɴᴛᴇʀᴇᴅ ᴇᴍᴏᴊɪ 🔥", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🔨 The bot successfully changed Emoji to: ${emoji}`, event.threadID, event.messageID));
}
