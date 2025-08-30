const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('message_id')
				.setDescription('The message id to echo.')
				.setRequired(true)),
	async execute(interaction) {
		console.log(interaction.options.getString('message_id'));
		console.log(interaction.channel.id);
		const message_id = interaction.options.getString('message_id');
		const channelId = interaction.channel.id;
		const fmessage = await interaction.channel.messages.fetch(message_id);
		await interaction.reply(interaction.channel.messages.fetch(message_id));
	}
}