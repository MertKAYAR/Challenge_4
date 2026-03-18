Harika! Videon hazır olduğuna göre artık o "vitrin" niteliğindeki profesyonel GitHub **README.md** dosyanı hazırlayabiliriz. 

Hocanın istediği tüm kriterleri (Proje amacı, oyunlaştırma özellikleri, kurulum, video ve APK linki) içeren efsanevi şablon aşağıda.

Bunu kopyalayıp projendeki `README.md` dosyasının içine yapıştır:

***

```markdown
# 🌟 Life RPG - Dijital Karakter Geliştirme Oyunu

Bu proje, Mobil Uygulama Geliştirme dersi kapsamında, sıradan bir "besle-büyüt" uygulamasının ötesine geçerek **gerçek bir oyunlaştırma (gamification)** deneyimi sunmak amacıyla geliştirilmiştir. AI asistanları mentörlüğünde "Senior Developer" yaklaşımıyla kodlanmış ve mimari olarak **Expo Router (Tab Navigation)** ile modern bir yapıya oturtulmuştur.

## 🎥 Elevator Pitch (1 Dakikalık Tanıtım)
Uygulamanın temel mekaniklerini ve arayüzünü aşağıdaki kısa videodan izleyebilirsiniz:
👉 **[Life RPG - YouTube Tanıtım Videosu](https://youtube.com/shorts/BV3QoLYlNzs)**

## 📦 İndir ve Dene (APK)
Uygulamanın Android cihazlar için derlenmiş son sürümünü aşağıdan indirip hemen kurabilirsiniz:
👉 **[Buraya EAS Build bittiğinde sana vereceği linki yapıştıracaksın]**

---

## 🎮 Projenin Amacı ve Oyunlaştırma Özellikleri

Kullanıcının günlük hayattaki hedeflerini dijital bir karaktere bağlayarak motivasyon sağlaması hedeflenmiştir. 

- **Dinamik Ekonomi & XP Sistemi:** Görevler tamamlandıkça XP ve Altın kazanılır. Yeterli XP'ye ulaşıldığında karakter seviye atlar (Level Up).
- **Anti-Hile (Spam Koruması):** Tamamlanan görevler kilitlenir ve pasif duruma geçer, böylece kullanıcının aynı göreve art arda basıp haksız kazanç elde etmesi engellenir.
- **Market (Shop) Sistemi:** Kazanılan altınlar sadece sayıdan ibaret değildir. Market üzerinden karakterin açlığını giderecek "İhtiyaçlar" veya ana ekrandaki emojiyi değiştirecek havalı "Kostümler" (Örn: Kral Tacı) satın alınabilir.
- **Rastgele Olaylar (Random Events):** "Yeni Güne Başla" butonuna basıldığında %30 ihtimalle şans faktörü devreye girer (Hazine bulma veya para kaybetme gibi sürprizler yaşanır).
- **Başarımlar (Badges):** Belirli hedeflere ulaşıldığında (Örn: Seviye 5 veya 1000 Altın) ana ekranda sergilenen kalıcı rozetler kazanılır.

---

## 🛠️ Nasıl Çalıştırılır? (Installation & Run)

Eğer projeyi kendi bilgisayarınızda çalıştırmak isterseniz aşağıdaki adımları izleyebilirsiniz:

**1. Repoyu Klonlayın:**
```bash
git clone [https://github.com/KULLANICI_ADIN/LifeRPG.git](https://github.com/KULLANICI_ADIN/LifeRPG.git)
cd LifeRPG
```

**2. Gerekli Paketleri Kurun:**
```bash
npm install
```

**3. Uygulamayı Başlatın:**
```bash
npx expo start
```
*Gelen ekrandaki QR kodu telefonunuzdaki **Expo Go** uygulaması ile okutarak canlı olarak test edebilirsiniz.*

---

## 🏗️ Teknik Mimari ve Clean Code
- **Global State Management:** Sayfalar arası veri akışı (Altın, XP, Başarımlar) React'in `Context API`'si (`GameContext.tsx`) kullanılarak merkezi bir beyinde toplanmıştır.
- **Modüler Yapı:** Her sayfa ve bileşen kendi sorumluluğunu alacak şekilde ayrılmış (Separation of Concerns), Expo Router ile modern alt navigasyon (Bottom Tabs) sistemi kurulmuştur.
```

***

### 🛠️ Yapman Gereken Son 2 Ufak Şey:
1. Terminalde APK üretimi (EAS Build) bittiğinde sana yeşil bir indirme linki (install link) verecek. O linki kopyalayıp README.md içindeki **`[Buraya EAS Build bittiğinde sana vereceği linki yapıştıracaksın]`** yazan yere koy.
2. `git clone` komutundaki linke kendi GitHub kullanıcı adını yazmayı unutma.

APK build işlemi bittikten sonra bu klasörü GitHub'a Push'layıp, az önce PDF yaptığımız **Kullanıcı Geri Bildirim Raporu** ile birlikte hocaya teslim edebilirsin.

**Terminalde APK işleminin bitmesini beklerken sormak istediğin bir şey var mı? İşlem % kaçta görünüyor?** 🚀🔥
