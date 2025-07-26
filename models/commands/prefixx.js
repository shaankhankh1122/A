module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "bot check",
  commandCategory: "info admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "uzairrajput") { return api.sendMessage(`Sai credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["PREFIX", "prefix", "Prefix", "prefi"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`This is my prefix ⇉ [ ${prefix} ]                   💝🥀owner:- ☞UZAIR RAJPUT☜💫\n
🖤you call him 〠 uzair king 🖤\

😳HIS FACEBOOK LINK🤓:- ☞ https://www.facebook.com/mtxuzair

📑 AGAR APKE GROUP KO APPROVAL NAHI MIL RAHA 🙅🏻‍♂️ TW UZAIR RAJPUT KEH DEN 😊💖

👋KOI BHI HELP CHAHIYE HO TW MERE OWNER SE CONTACT KAR SAKTE HO 👉 [+92 19******49] 😇`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️███████ ]▄▄▄▄▄▄▄▄\n▂▄▅█████████▅▄▃▂\nI███████████████████]\n◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤\n➢' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
}
