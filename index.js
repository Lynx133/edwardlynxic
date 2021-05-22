const Discord = require('discord.js');
const prefix = "!"

const bot = new Discord.Client();

const embed = new Discord.MessageEmbed()

bot.on('ready', () => {
	console.log('Void is Online!');
});

bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Verify');
const embed = new Discord.MessageEmbed()
.setColor('#FF8000')
.setDescription(`Hey <@${guildMember.user.id}>, welcome to 𝐋𝐲𝐧𝐱'𝐬 𝐬𝐞𝐫𝐯𝐞𝐫`)
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('839108013440237568').send(embed);
});

 bot.login(proces.env.token);
