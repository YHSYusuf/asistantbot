const { SlashCommandBuilder } = require('discord.js');
const tasks = require('./task-add').tasks;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gorev-tamamla')
        .setDescription('Belirli bir görevi tamamlandık olarak işaretler.')
        .addIntegerOption(option =>
            option.setName('id')
                .setDescription('Görev ID')
                .setRequired(true)),
    async execute(interaction) {
        const id = interaction.options.getInteger('id');

        if (tasks.has(id)) {
            const task = tasks.get(id);
            task.tamamlandi = true;
            tasks.set(id, task);
            await interaction.reply(`Görev (ID: ${id}) tamamlandı olarak işaretlendi.`);
        } else {
            await interaction.reply({ content: `Görev (ID: ${id}) bulunamadı.`, ephemeral: true });
        }
    },
};