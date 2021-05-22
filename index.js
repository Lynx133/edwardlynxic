const Discord = require('discord.js');
const prefix = "!"

const client = new Discord.Client();

const embed = new Discord.MessageEmbed()

client.on('ready', () => {
	console.log('Void is Online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Verify');
const embed = new Discord.MessageEmbed()
.setColor('#FF8000')
.setDescription(`Hey <@${guildMember.user.id}>, welcome to 𝐋𝐲𝐧𝐱'𝐬 𝐬𝐞𝐫𝐯𝐞𝐫`)
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('839108013440237568').send(embed);
});

 client.login(proces.env.token);
