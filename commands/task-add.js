const { SlashCommandBuilder } = require('discord.js');
const tasks = new Map();
let taskId = 0;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gorev-ekle')
        .setDescription('Günlük görevler listesine yeni bir görev ekler.')
        .addStringOption(option =>
            option.setName('baslik')
                .setDescription('Görev başlığı')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('aciklama')
                .setDescription('Görev açıklaması')
                .setRequired(true)),
    async execute(interaction) {
        const baslik = interaction.options.getString('baslik');
        const aciklama = interaction.options.getString('aciklama');

        const id = taskId++;
        tasks.set(id, { baslik, aciklama, tamamlandi: false });

        await interaction.reply(`Görev eklendi (ID: ${id}). Başlık: "${baslik}", Açıklama: "${aciklama}"`);
    },
};

module.exports.tasks = tasks;