module.exports.config = {
  name: "offbot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HTHB",
  description: "turn the bot off",
  commandCategory: "system",
  cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = [`100016828397863`,`100016828397863`];
  if (!permission.includes(event.senderID)) return api.sendMessage("You don't have permission to use this command.\nOnly 𝑴𝒓𝑺𝒉𝒂𝒂𝒏𝑿𝒙𝑿-𝑺𝑭𝑲", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}