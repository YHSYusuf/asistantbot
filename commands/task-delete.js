const { SlashCommandBuilder } = require('discord.js');
const tasks = require('./task-add').tasks;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gorev-sil')
        .setDescription('Belirli bir görevi listeden siler.')
        .addIntegerOption(option =>
            option.setName('id')
                .setDescription('Görev ID')
                .setRequired(true)),
    async execute(interaction) {
        const id = interaction.options.getInteger('id');

        if (tasks.has(id)) {
            tasks.delete(id);
            await interaction.reply(`Görev (ID: ${id}) silindi.`);
        } else {
            await interaction.reply({ content: `Görev (ID: ${id}) bulunamadı.`, ephemeral: true });
        }
    },
};