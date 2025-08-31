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
    .setName('knee_surgery')
    .setDescription('Create the drive thru traumadump meme using a previous message.')
	.addStringOption(option =>
      option.setName('messageid').setDescription('Message ID to fetch').setRequired(true)
    ),

	async execute(interaction) {

		const messageId = interaction.options.getString('messageid');
		const msg = await interaction.channel.messages.fetch(messageId);
		const msgdata = msg.content

		
    	
	}
};