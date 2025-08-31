const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { createCanvas } = require('@napi-rs/canvas')
const { SlashCommandBuilder } = require('discord.js');



const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	let fontSize = 50;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 7}px Sans-Serif`;

		// Compare pixel width of the text to the canvas
	} while (context.measureText(text).width > canvas.width - 14);

	// Return the result to use in the actual canvas
	return context.font;
};



module.exports = {

  data: new SlashCommandBuilder()
    .setName('tumblr_drivethru')
    .setDescription('Create the drive thru traumadump meme using a previous message.')
	.addStringOption(option =>
      option.setName('messageid').setDescription('Message ID to fetch').setRequired(true)
    ),

	async execute(interaction) {

		const messageId = interaction.options.getString('messageid');
		const msg = await interaction.channel.messages.fetch(messageId);
		const msgdata = msg.content

		// smaller image for smaller text
		if (msgdata.length <= 150){
			const canvas = createCanvas(640, 881);
			const context = canvas.getContext('2d');
			const background = await Canvas.loadImage('./meme_folder/drivethru.webp');
			
			context.drawImage(background, 0, 0, canvas.width, canvas.height);




			const msgarr = [];
			if (msgdata.length >= 20) {
				let sep = Math.floor(msgdata.length/2);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, msgdata.length);
				msgarr.push(msg1);
				msgarr.push(msg2);
			}
			else {
				msgarr.push(msgdata);
			}

			var n = 0;
			for (const element of msgarr) {
				context.font = applyText(canvas, element);
				context.fillStyle = 'black';
				context.fillText(element, 20, 40 + n);
				n += 26;
			}




			const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'drivethru_small.png' });

			interaction.reply({ files: [attachment] });
		}




		// create larger image for larger messages
		else {
			const canvas = createCanvas(640, 1260);
			const context = canvas.getContext('2d');
			const background = await Canvas.loadImage('./meme_folder/newdrivethru.jpg');
			
			context.drawImage(background, 0, 0, canvas.width, canvas.height);




			const msgarr = [];
			if (msgdata.length >= 400) {
				msgarr.push('bruh this text is WAY too long wtf????');
			}
			else if (msgdata.length >= 350) {
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
			else if (msgdata.length >= 320) {
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
			else if (msgdata.length >= 260) {
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
			else if (msgdata.length >= 230) {
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
			else if (msgdata.length >= 200) {
				let sep = Math.floor(msgdata.length/5);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, sep*4));
				msgarr.push(msgdata.slice(sep*4, msgdata.length));
			}
			else if (msgdata.length >= 170) {
				let sep = Math.floor(msgdata.length/4);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msgdata.slice(sep*2, sep*3));
				msgarr.push(msgdata.slice(sep*3, msgdata.length));
			}
			else {
				let sep = Math.floor(msgdata.length/3);
				let msg1 = msgdata.slice(0, sep);
				let msg2 = msgdata.slice(sep, sep*2);
				let msg3 = msgdata.slice(sep*2, msgdata.length);
				msgarr.push(msg1);
				msgarr.push(msg2);
				msgarr.push(msg3);
			}

			var n = 0;
			var s = ((100 - (msgarr.length * 9)) + 54);
			for (const element of msgarr) {
				context.font = '30 px Arial';
				context.fillStyle = 'black';
				yval = s + n
				context.fillText(element, 20, yval);
				n += 35;
			}




			const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'drivethru_small.png' });

			interaction.reply({ files: [attachment] });
		}
    	
	}
};