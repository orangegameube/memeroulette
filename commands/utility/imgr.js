const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { createCanvas, Image } = require('@napi-rs/canvas')
const { SlashCommandBuilder } = require('discord.js');

const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 70;

	do {
		context.font = `${fontSize -= 10}px sans-serif`;
	} while (context.measureText(text).width > canvas.width - 300);

	return context.font;
};

module.exports = {

  data: new SlashCommandBuilder()
    .setName('meme_generator')
    .setDescription('Create a random meme from a message'),

  async execute(interaction) {
    	const canvas = createCanvas(250, 500);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./meme_folder/drivethru.webp');
		
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });

		interaction.reply({ files: [attachment] });
	}
};