const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { createCanvas } = require('@napi-rs/canvas')
const { SlashCommandBuilder } = require('discord.js');



const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');

	let fontSize = 50;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${fontSize -= 3}px Arial`;

		// Compare pixel width of the text to the canvas
	} while (context.measureText(text).width > canvas.width - 14);

	// Return the result to use in the actual canvas
	return [(context.font).toString()];
};



module.exports = {

  data: new SlashCommandBuilder()
    .setName('knee_surgery')
    .setDescription('Create the grinch knee surgery meme using a previous message.')
	.addStringOption(option =>
      option.setName('messageid').setDescription('Message ID to fetch').setRequired(true)
    ),

	async execute(interaction) {

		const messageId = interaction.options.getString('messageid');
		const msg = await interaction.channel.messages.fetch(messageId);
		const msgdata = msg.content

		const canvas = createCanvas(500, 282);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('./meme_folder/kneesurgery.jpg');
                    
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
    	

        const msgarr = [];
		if (msgdata.length >= 26) {
			let sep = Math.floor(msgdata.length/2);
			let msg1 = msgdata.slice(0, sep);
			let msg2 = msgdata.slice(sep, msgdata.length);
			msgarr.push(msg1);
			msgarr.push(msg2);
		} else {
			msgarr.push(msgdata);
		}

        var n = 0;
        var s = 70 - (msgarr.length * 10);
        context.textAlign = "center";
        for (const element of msgarr) {
            context.font = (applyText(canvas, element))[0];
            context.fillStyle = 'black';
            context.fillText(element, (canvas.width / 2), s + n);
            n += 220;
        }
            
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'knee_surgery.png' });
            
        interaction.reply({ files: [attachment] });

	}
};