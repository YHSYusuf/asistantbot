const { SlashCommandBuilder } = require('discord.js');
const notes = require('./note-add').notes;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('not-sil')
        .setDescription('Belirli bir notu siler.')
        .addIntegerOption(option =>
            option.setName('id')
                .setDescription('Not ID')
                .setRequired(true)),
    async execute(interaction) {
        const id = interaction.options.getInteger('id');

        if (notes.has(id)) {
            notes.delete(id);
            await interaction.reply(`Not (ID: ${id}) silindi.`);
        } else {
            await interaction.reply({ content: `Not (ID: ${id}) bulunamadı.`, ephemeral: true });
        }
    },
};