module.exports.config = {
  name: "appstate",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "refresh appstate.json",
  commandCategory: "Admin",
  usages: "appstate",
  cooldowns: 5,
  dependencies: {
  }
};

module.exports.run = async function ({ api, event, args }) {
  const fs = require("fs-extra");
  const permission = ["100011726342894", "100071130680863"];
	if (!permission.includes(event.senderID)) return api.sendMessage("ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴘᴇʀᴍɪꜱꜱɪᴏɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ...⛔", event.threadID, event.messageID);
  let appstate = api.getAppState();
  // convert JSON object to a string
  const data = JSON.stringify(appstate);
  // write file to disk
  fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
    if (err) {
      return api.sendMessage(`Error writing file: ${err}`, event.threadID);
    } else {
      return api.sendMessage(`ᴀᴘᴘꜱᴛᴀᴛᴇ ʀᴇꜰʀᴇꜱʜ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ 😎`, event.threadID);
    }
  });

}
