const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

var config = JSON.parse(fs.readFileSync('./settings.json','utf-8'));
var commands = fs.readFileSync('./commands.txt','utf-8');

const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
const prefix = config.prefix;
const discord_token = config.discord_token;

var queue = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];

var rn = require('random-number');
var options = {
  min: 1
  ,max: 6
  ,integer: true
}

client.login(discord_token);

client.on('ready', function () {
  console.log(`Burdayım aq çocukları!`);
  console.user.setStatus('mb-yardım')
});

client.on('message', function (message) {
  const member = message.member;
  const mess = message.content.toLowerCase();
  const args = message.content.split(' ').slice(1).join(" ");

  if (mess === prefix + "yardım" ) {
    message.channel.send(commands)
  }
  if (mess.startsWith(prefix + "warrock")) {
    message.reply(" sizi banlatmadı, kicklettirdi!")
  }
  if (mess.startsWith(prefix + "madcity")) {
    message.channel.send("M.A.A.D City değil, NewYakacık", {
      files: [
        "./" + rn(options) + ".jpg"
      ]
    });
  }
});
