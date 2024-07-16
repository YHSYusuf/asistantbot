const { SlashCommandBuilder } = require('discord.js');
const tasks = require('./task-add').tasks;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gorev-liste')
        .setDescription('Günlük görevlerin listesini gösterir.'),
    async execute(interaction) {
        if (tasks.size === 0) {
            await interaction.reply('Hiç göreviniz yok.');
            return;
        }

        let reply = 'Görevler:\n';
        tasks.forEach((value, key) => {
            reply += `ID: ${key}, Başlık: ${value.baslik}, Açıklama: ${value.aciklama}, Tamamlandı: ${value.tamamlandi ? 'Evet' : 'Hayır'}\n`;
        });

        await interaction.reply(reply);
    },
};