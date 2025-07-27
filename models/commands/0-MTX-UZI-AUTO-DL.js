const fs = require("fs-extra");
const path = require("path");

(function () {
  const data = fs.readFileSync(__filename, "utf8");
  const lock = Buffer.from("637265646974733a20757a61697272616a707574", "hex").toString();
  if (!new RegExp(lock, "i").test(data)) {
    console.clear();
    console.log("\x1b[1m\x1b[41m\n⛔ CREDIT VIOLATION DETECTED ⛔\x1b[0m");
    console.log("\x1b[33m⚠️  This script is protected by UzairRajput");
    console.log("   Please restore original credits before using.\x1b[0m\n");
    process.exit(1);
  }
})();

module.exports = {
  config: {
    name: "linkAutoDownload",
    version: "1.4.0",
    hasPermssion: 0,
    credits: "encrypted", // Don't change or remove
    description: "Auto download videos from links (YT, TikTok, Insta, etc)",
    commandCategory: "NoPrefix",
    usages: "",
    cooldowns: 5,
  },

  run: async function () {},

  handleEvent: async function ({ api, event }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const { alldown } = require("uzair-memo-dl"); // Private downloader package
    const content = event.body || "";
    const body = content.toLowerCase();

    if (body.startsWith("https://")) {
      api.setMessageReaction("📥", event.messageID, () => {}, true);
      try {
        const res = await alldown(content);
        if (!res?.data?.high) return;

        const { title, high } = res.data;
        const filePath = path.join(__dirname, "cache", "auto.mp4");
        const video = (await axios.get(high, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(filePath, Buffer.from(video, "utf-8"));

        api.setMessageReaction("✅", event.messageID, () => {}, true);

        return api.sendMessage(
          {
            body: `✨❁ ━━[ 𝐔𝐙𝐀𝐈𝐑 𝐃𝐋 𝐁𝐎𝐓 ]━━ ❁✨\n\n🎬 Title: ${title}`,
            attachment: fs.createReadStream(filePath),
          },
          event.threadID,
          event.messageID
        );
      } catch (e) {
        api.sendMessage(`❌ Error while downloading video.\n${e.message}`, event.threadID, event.messageID);
      }
    }
  },
};

// credits: uzairrajput change nahi karna 
