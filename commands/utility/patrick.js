const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { createCanvas } = require('@napi-rs/canvas')
const { SlashCommandBuilder } = require('discord.js');




module.exports = {

  data: new SlashCommandBuilder()
    .setName('patrick_drool')
    .setDescription('Create the patrick drooling meme using a previous message.')
	.addStringOption(option =>
      option.setName('messageid').setDescription('Message ID to fetch').setRequired(true)
    ),

	async execute(interaction) {

		const messageId = interaction.options.getString('messageid');
		const msg = await interaction.channel.messages.fetch(messageId);
		const msgdata = msg.content
			
        const canvas = createCanvas(640, 1260);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./meme_folder/patrick_drooling.png');
			
		context.drawImage(background, 0, 0, canvas.width, canvas.height);




		const msgarr = [];
		if (msgdata.length >= 410) {
			msgarr.push('too much text bozo');
		}
		else if (msgdata.length >= 410) {
				let sep = Math.floor(msgdata.length/10);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, sep*5));
				msgarr.push(msgdata.slice(sep*5, sep*6));
				msgarr.push(msgdata.slice(sep*6, sep*7));
				msgarr.push(msgdata.slice(sep*7, sep*8));
				msgarr.push(msgdata.slice(sep*8, (sep*9)+1));
				msgarr.push(msgdata.slice((sep*9)+1, msgdata.length));
			}
		else if (msgdata.length >= 345) {
				let sep = Math.floor(msgdata.length/9);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, sep*5));
				msgarr.push(msgdata.slice(sep*5, sep*6));
				msgarr.push(msgdata.slice(sep*6, sep*7));
				msgarr.push(msgdata.slice(sep*7, (sep*8)+1));
				msgarr.push(msgdata.slice((sep*8)+1, msgdata.length));
			}
			else if (msgdata.length >= 290) {
				let sep = Math.floor(msgdata.length/8);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, sep*5));
				msgarr.push(msgdata.slice(sep*5, sep*6));
				msgarr.push(msgdata.slice(sep*6, (sep*7)+1));
				msgarr.push(msgdata.slice((sep*7)+1, msgdata.length));
			}
			else if (msgdata.length >= 225) {
				let sep = Math.floor(msgdata.length/7);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, sep*5));
				msgarr.push(msgdata.slice(sep*5, (sep*6)+1));
				msgarr.push(msgdata.slice((sep*6)+1, msgdata.length));
			}
			else if (msgdata.length >= 170) {
				let sep = Math.floor(msgdata.length/6);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, sep*5));
				msgarr.push(msgdata.slice(sep*5, msgdata.length));
			}
			else if (msgdata.length >= 120) {
				let sep = Math.floor(msgdata.length/5);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, msgdata.length));
			}
			else if (msgdata.length >= 80) {
				let sep = Math.floor(msgdata.length/4);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, msgdata.length));
			}
            else if (msgdata.length >= 56) {
				let sep = Math.floor(msgdata.length/3);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, msgdata.length));
			}
			else if (msgdata.length >= 28) {
				let sep = Math.floor(msgdata.length/2);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, msgdata.length);
				msgarr.push(msg1);
				msgarr.push(msg2);
			}
			else {
				let msg1 = msgdata.slice(0, msgdata.length);
				msgarr.push(msg1);
			}

			var n = 0;
			var s = ((100 - (msgarr.length * 9)) + 30);
			var pixval = 65 - (msgarr.length * 5)
            context.textAlign = "center";
			for (const element of msgarr) {
				context.font = `${pixval} px Arial`;
				context.fillStyle = 'black';
				yval = s + n
				context.fillText(element, (canvas.width / 2), yval);
				n += 35;
			}




			const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'patrick_meme.png' });

			interaction.reply({ files: [attachment] });
		}
    	
};