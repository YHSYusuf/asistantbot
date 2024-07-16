const { SlashCommandBuilder } = require('discord.js');
const events = require('./event-add').events;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('etkinlik-sil')
        .setDescription('Belirli bir etkinliği takvimden siler.')
        .addIntegerOption(option =>
            option.setName('id')
                .setDescription('Etkinlik ID')
                .setRequired(true)),
    async execute(interaction) {
        const id = interaction.options.getInteger('id');

        if (events.has(id)) {
            events.delete(id);
            await interaction.reply(`Etkinlik (ID: ${id}) silindi.`);
        } else {
            await interaction.reply({ content: `Etkinlik (ID: ${id}) bulunamadı.`, ephemeral: true });
        }
    },
};