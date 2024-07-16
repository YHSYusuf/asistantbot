const { SlashCommandBuilder } = require('discord.js');
const reminders = require('./reminder-add').reminders;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hatirlatma-listesi')
        .setDescription('Aktif hatırlatıcıların listesini gösterir.'),
    async execute(interaction) {
        if (reminders.size === 0) {
            await interaction.reply('Aktif hatırlatıcınız yok.');
            return;
        }

        let reply = 'Aktif Hatırlatıcılar:\n';
        reminders.forEach((value, key) => {
            reply += `ID: ${key}, Mesaj: ${value.mesaj}\n`;
        });
        await interaction.reply(reply);
    },
};