const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Shawon Sheikh",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl= ["ཫ༄𒁍≛⃝এতো বট বট বলো কেন-!!😒","ཫ༄𒁍≛⃝না তো এতো বট বট বলে ভালো লাগো-!!😩"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "owner k")) {
     return api.sendMessage("️ Shawon Sheikh", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bot suno") || (event.body.toLowerCase() == "bat sun")) {
     return api.sendMessage("হুম বলেন!!🫰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " bot love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited Jan😘😁", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("️Hello-!!🐱", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "gd morning")) {
     return api.sendMessage("️Good Morning-!!🏞️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "gd night") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️Good Night too", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️জানু কি হয়েছে গো।তোমার😘", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("️দাঁত খুলে যাবে-!!😒", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️মন খারাপ কেন গো-??🥲", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "bot amr basa kothay?") || (event.body.toLowerCase() == "bot amr basha kothay?")) {
     return api.sendMessage("️আপনার বাসা আপনি যানেন আমি যানবো কেমনে-!!😳", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("️Hello-!!❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("️সর হালা  কিস দিস না-!!😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bujlam na") || (event.body.toLowerCase() == "buji nai")) {
     return api.sendMessage("️আপনার বুজা লাগবে না-!!😌", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {
     return api.sendMessage("️আস্তাগফিরুল্লাহ এগুলো ভালো না-!!🙂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot kar") || (event.body.toLowerCase() == "bot kar ata")) {
     return api.sendMessage("শাওন আর নবিতা বস আমাকে বানাইছে-!!👀", threadID, messageID);
      };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `꧌꧍᪥${name}᪥꧌꧍\n━━━━━━━━━━━━━━━━\nআমি একটা ভালো মানুষ কোনো বট না-!!😑\n━━━━━━━━━━━━━━━━`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module🫰.exports.run = function({ api, event, client, __GLOBAL }) { }
