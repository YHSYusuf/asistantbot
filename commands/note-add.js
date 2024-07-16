const { SlashCommandBuilder } = require('discord.js');
const notes = new Map();
let noteId = 0;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('not-ekle')
        .setDescription('Yeni bir not ekler.')
        .addStringOption(option =>
            option.setName('baslik')
                .setDescription('Not başlığı')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('mesaj')
                .setDescription('Not mesajı')
                .setRequired(true)),
    async execute(interaction) {
        const baslik = interaction.options.getString('baslik');
        const mesaj = interaction.options.getString('mesaj');

        const id = noteId++;
        notes.set(id, { baslik, mesaj });

        await interaction.reply(`Not eklendi (ID: ${id}). Başlık: "${baslik}", Mesaj: "${mesaj}"`);
    },
};

module.exports.notes = notes;