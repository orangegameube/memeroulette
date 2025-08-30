const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Fetch a message by its ID')
    .addStringOption(option =>
      option.setName('messageid').setDescription('Message ID to fetch').setRequired(true)
    ),

  async execute(interaction) {
    const messageId = interaction.options.getString('messageid');

    console.log('messageId:', messageId, '| type:', typeof messageId);

    try {
      await interaction.deferReply({ ephemeral: true });

      const message = await interaction.channel.messages.fetch(messageId);

      await interaction.editReply({
        content: `Message content:\n${message.content || '[No content]'}`,
      });
    } catch (error) {
      console.error('Fetch error:', error);
      await interaction.editReply({
        content: 'Failed to fetch the message. Ensure the ID is correct and the message is in this channel.',
      });
    }
  },
};