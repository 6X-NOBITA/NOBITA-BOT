module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho",
	description: "Send messages to groups!",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["100011726342894"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐬𝐞 𝐎𝐧𝐥𝐲 𝐀𝐝𝐦𝐢𝐧 𝐒𝐡𝐚𝐰𝐨𝐧/𝐍𝐨𝐛𝐢𝐭𝐚 👻", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' 𝐎𝐮𝐭 𝐎𝐟 𝐓𝐡𝐞 𝐀𝐥𝐥 𝐆𝐫𝐨𝐮𝐩 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 ✅', event.threadID);
	});
  }
