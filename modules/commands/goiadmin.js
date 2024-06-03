module.exports.config = {
  name: "admintag",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RAHAT KHAN",
  description: "Bot will reply if admin is tag in a message.",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100071130680863","100011726342894) {
    var aid = ["100011726342894","1100071130680863","100011726342894"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["মেনশন দিও না আমার বস এখন কাজে বিজি আছে..🤖✨"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }
