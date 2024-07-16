const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yardim')
        .setDescription('Botun sağladığı tüm komutları ve işlevleri listeler.'),
    async execute(interaction) {
        await interaction.reply(`
**Komut Listesi:**

- **/hatirlatma-ekle** [zaman] [mesaj] ⏰: Belirtilen zamanda bir hatırlatıcı oluşturur.
- **/hatirlatma-sil** [id] ❌: Belirli bir hatırlatıcıyı siler.
- **/hatirlatma-listesi** 📋: Aktif hatırlatıcıların listesini gösterir.
- **/not-ekle** [başlık] [mesaj] 📝: Yeni bir not ekler.
- **/not-sil** [id] 🗑️: Belirli bir notu siler.
- **/not-liste** 📓: Tüm notların listesini gösterir.
- **/etkinlik-ekle** [tarih] [başlık] [açıklama] 📅: Takvime yeni bir etkinlik ekler.
- **/etkinlik-sil** [id] ❌: Belirli bir etkinliği takvimden siler.
- **/etkinlik-liste** 📆: Takvimdeki tüm etkinliklerin listesini gösterir.
- **/gorev-ekle** [başlık] [açıklama] ✅: Günlük görevler listesine yeni bir görev ekler.
- **/gorev-tamamla** [id] ✔️: Belirli bir görevi tamamladı olarak işaretler.
- **/gorev-sil** [id] 🗑️: Belirli bir görevi listeden siler.
- **/gorev-liste** 🗂️: Günlük görevlerin listesini gösterir.
- **/yardim** 🆘: Botun sağladığı tüm komutları ve işlevleri listeler.
- **/hakkinda** : Botun işlevleri hakkında bilgi verir.
        `);
    },
};