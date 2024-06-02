const axios = require('axios');
const fs = require('fs-extra');
const tinyurl = require('tinyurl');

module.exports.config = {
  name: "autolink",
  version: "1.0.",
  hasPermssion: 0,
  credits: "RAHUL",
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
   usePrefix: true,
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
let dipto = event.body ? event.body : '';
  try {
if (dipto.startsWith('https://vt.tiktok.com') ||
dipto.startsWith("https://vm.tiktok.com") ||
dipto.startsWith('https://www.facebook.com') || 
dipto.startsWith('https://fb.watch')||
dipto.startsWith('https://www.instagram.com/')|| dipto.startsWith('https://youtu.be/') ||
dipto.startsWith('https://www.instagram.com/p/') || dipto.startsWith('https://pin.it/') || dipto.startsWith('https://youtube.com/') || dipto.startsWith('https://www.capcut.com/') || dipto.startsWith('https://www.threads.net/') || dipto.startsWith('https://twitter.com/') || dipto.startsWith('https://x.com/') || dipto.startsWith('https://l.likee.video/')){
  api.sendMessage("𝐃𝐨𝐰𝐧𝐥𝐨𝐚d𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐕𝐢d𝐞𝐨 𝐁𝐚𝐛𝐲 𝐉𝐮𝐬𝐭 𝐅𝐞𝐰 𝐌𝐢𝐧𝐮𝐭𝐞..🔥", event.threadID, event.messageID);
  if (!dipto) {
    api.sendMessage("ᴘʟᴇᴀꜱᴇ ᴘᴜᴛ ᴀ ᴠᴀʟɪᴅ ꜰʙ ᴠɪᴅᴇᴏ ʟɪɴᴋ..", event.threadID, event.messageID);
    return;
    }
const aa = await axios.get(`https://noobs-api.onrender.com/dipto/alldl?url=${encodeURIComponent(dipto)}`);
   const bb = aa.data;
   const shortUrl = await tinyurl.shorten(bb.result);
   const MSG = `✅ 🔗 ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏɴᴇ: ${shortUrl}`;
   let ex;
   let cp;
        if (bb.result.includes('.jpg')){
             ex = ".jpg";
             cp = "ʜᴇʀᴇ'ꜱ ʏᴏᴜʀ ᴘʜᴏᴛᴏ <😘";
        }
        else if (bb.result.includes('.png')){
             ex = ".png";
             cp = "ʜᴇʀᴇ'ꜱ ʏᴏᴜʀ ᴘʜᴏᴛᴏ <😘";
        }
        else if (bb.result.includes('.jpeg')){
             ex = ".jpeg";
             cp = "ʜᴇʀᴇ'ꜱ ʏᴏᴜʀ ᴘʜᴏᴛᴏ <😘";
        }
        else { 
          ex = ".mp4";
          cp = bb.cp;
        }
const path = __dirname + `/cache/video${ex}`;
    const vid = (await axios.get(bb.result, { responseType: "arraybuffer", })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    api.sendMessage({
      body: `${cp}\n${MSG}\n 🥹💙`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (dipto.startsWith('https://i.imgur.com')){
  const dipto3 = dipto.substring(dipto.lastIndexOf('.'));
  const response = await axios.get(dipto, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/dipto${dipto3}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ʟɪɴᴋ ✅`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (e) {
api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
