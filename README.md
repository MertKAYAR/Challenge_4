
***

```markdown
# 🌟 Life RPG - Dijital Karakter Geliştirme Oyunu

Bu proje, Mobil Uygulama Geliştirme dersi kapsamında, sıradan bir "besle-büyüt" uygulamasının ötesine geçerek **gerçek bir oyunlaştırma (gamification)** deneyimi sunmak amacıyla geliştirilmiştir. AI asistanları mentörlüğünde "Senior Developer" yaklaşımıyla kodlanmış ve mimari olarak **Expo Router (Tab Navigation)** ile modern bir yapıya oturtulmuştur.

## 🎥 Elevator Pitch (1 Dakikalık Tanıtım)
Uygulamanın temel mekaniklerini ve arayüzünü aşağıdaki kısa videodan izleyebilirsiniz:
👉 **[Life RPG - YouTube Tanıtım Videosu](https://youtube.com/shorts/BV3QoLYlNzs)**

## 📦 İndir ve Dene (APK)
Uygulamanın Android cihazlar için derlenmiş son sürümünü aşağıdan indirip hemen kurabilirsiniz:
👉 **[Apk Linki](https://expo.dev/accounts/mertkayar/projects/LifeRPG-Mert/builds/5c2fe87a-be8c-486c-850d-45ce804f252c)**

---

## 🎮 Projenin Amacı ve Oyunlaştırma Özellikleri

Kullanıcının günlük hayattaki hedeflerini dijital bir karaktere bağlayarak motivasyon sağlaması hedeflenmiştir. 

- **Dinamik Ekonomi & XP Sistemi:** Görevler tamamlandıkça XP ve Altın kazanılır. Yeterli XP'ye ulaşıldığında karakter seviye atlar (Level Up).
- **Anti-Hile (Spam Koruması):** Tamamlanan görevler kilitlenir ve pasif duruma geçer, böylece kullanıcının aynı göreve art arda basıp haksız kazanç elde etmesi engellenir.
- **Market (Shop) Sistemi:** Kazanılan altınlar sadece sayıdan ibaret değildir. Market üzerinden karakterin açlığını giderecek "İhtiyaçlar" veya ana ekrandaki emojiyi değiştirecek havalı "Kostümler" (Örn: Kral Tacı) satın alınabilir.
- **Rastgele Olaylar (Random Events):** "Yeni Güne Başla" butonuna basıldığında %30 ihtimalle şans faktörü devreye girer (Hazine bulma veya para kaybetme gibi sürprizler yaşanır).
- **Başarımlar (Badges):** Belirli hedeflere ulaşıldığında (Örn: Seviye 5 veya 1000 Altın) ana ekranda sergilenen kalıcı rozetler kazanılır.

---


## 🏗️ Teknik Mimari ve Clean Code
- **Global State Management:** Sayfalar arası veri akışı (Altın, XP, Başarımlar) React'in `Context API`'si (`GameContext.tsx`) kullanılarak merkezi bir beyinde toplanmıştır.
- **Modüler Yapı:** Her sayfa ve bileşen kendi sorumluluğunu alacak şekilde ayrılmış (Separation of Concerns), Expo Router ile modern alt navigasyon (Bottom Tabs) sistemi kurulmuştur.
```

***

