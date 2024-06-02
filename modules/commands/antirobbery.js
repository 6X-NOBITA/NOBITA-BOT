module.exports.config = {
 name: "antirobbery",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Prevent changing group administrators",
 usages: "",
 commandCategory: "Group",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('ɴᴇᴇᴅ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴛᴏʀ ᴘᴇʀᴍɪꜱꜱɪᴏɴ - ᴘʟᴇᴀꜱᴇ ᴀᴅᴅ ᴀɴᴅ ᴛʀʏ ᴀɢᴀɪɴ…💛', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`${(data["guard"] == true) ? "turn on" : "Turn off"} Successful Anti-Robbery Group`, event.threadID, event.messageID);
}
