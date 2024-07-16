const { SlashCommandBuilder } = require('discord.js');
const reminders = require('./reminder-add').reminders;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hatirlatma-sil')
        .setDescription('Belirli bir hatırlatıcıyı siler.')
        .addIntegerOption(option =>
            option.setName('id')
                .setDescription('Hatırlatıcı ID')
                .setRequired(true)),
    async execute(interaction) {
        const id = interaction.options.getInteger('id');

        if (reminders.has(id)) {
            clearTimeout(reminders.get(id).timeout);
            reminders.delete(id);
            await interaction.reply(`Hatırlatıcı (ID: ${id}) silindi.`);
        } else {
            await interaction.reply({ content: `Hatırlatıcı (ID: ${id}) bulunamadı.`, ephemeral: true });
        }
    },
};