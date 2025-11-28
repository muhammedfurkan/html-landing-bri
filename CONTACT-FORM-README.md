# Contact Form Sistemi - Kurulum ve Kullanım Kılavuzu

## 📋 İçerik
1. [Sistem Özeti](#sistem-özeti)
2. [Dosya Yapısı](#dosya-yapısı)
3. [Kurulum Adımları](#kurulum-adımları)
4. [Kullanım Örnekleri](#kullanım-örnekleri)
5. [Sorun Giderme](#sorun-giderme)
6. [API Dokumentasyonu](#api-dokumentasyonu)

## 🎯 Sistem Özeti

Contact Form Sistemi, website ziyaretçilerinin gönderdiği iletişim mesajlarını yönetmek için tasarlanmış tam bir çözümdür.

**Bileşenler:**
- **Frontend**: HTML form + JavaScript handler
- **Backend**: Moleculer.js API + MongoDB
- **Admin Panel**: React TypeScript bileşeni

## 📁 Dosya Yapısı

```
.
├── html-landing/
│   ├── contact.html                    # Contact sayfası
│   └── assets/
│       └── js/
│           ├── form.js                 # Form handler
│           └── contact-config.js       # Konfigürasyon
├── bebek-proje-api/
│   ├── src/
│   │   └── contact.service.js          # API servisi
│   ├── moleculer.config.js             # Moleculer config
│   └── .env                            # Ortam değişkenleri
└── bebek-web/
    ├── src/
    │   ├── pages/
    │   │   └── ContactAdmin/
    │   │       └── index.tsx            # Admin sayfası
    │   ├── router/
    │   │   └── index.tsx                # Route tanımı
    │   └── stores/
    │       └── sideMenuSlice.ts         # Menu tanımı
    └── .env                             # Ortam değişkenleri
```

## 🚀 Kurulum Adımları

### 1. Backend Kurulumu

#### API Servisi Kontrol Edin
```bash
# bebek-proje-api klasörüne gidip contact.service.js var mı kontrol edin
ls -la src/contact.service.js
```

#### Ortam Değişkenlerini Ayarlayın
```bash
# bebek-proje-api/.env dosyasında şunları kontrol edin:
MONGO_URL=mongodb://localhost:27017
DB=babynow
PORT=5000
IP=0.0.0.0
NODEID=main
```

#### Servisi Başlatın
```bash
cd bebek-proje-api
npm install  # gerekirse
npm run dev
```

Başarılı başlatma mesajı:
```
[2024-12-25 14:30:15] ✓ Service 'contact' started
API Gateway running on http://0.0.0.0:5000
```

### 2. Frontend Kurulumu

#### Config Dosyasını Düzenleyin
```javascript
// html-landing/assets/js/contact-config.js
const ContactFormConfig = {
  API_URL: 'http://localhost:5000/api/contact/submit-contact',
  // Production için:
  // API_URL: 'https://your-api.com/api/contact/submit-contact',
};
```

#### HTML'de Script Eklendiğinden Emin Olun
```html
<!-- html-landing/contact.html -->
<script src="./assets/js/contact-config.js"></script>
<script src="./assets/js/form.js"></script>
```

### 3. Admin Panel Kurulumu

#### React Environment Kurulumu
```bash
cd bebek-web
npm install
```

#### .env Dosyasını Ayarlayın
```bash
# bebek-web/.env
VITE_API_URL=http://localhost:5000/api
```

#### Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

## 📝 Kullanım Örnekleri

### Frontend Form Gönderme

#### HTML Form
```html
<form id="contact-form">
  <input type="text" id="first-name" placeholder="Adınız" required>
  <input type="text" id="last-name" placeholder="Soyadınız" required>
  <input type="email" id="email" placeholder="E-posta" required>
  <textarea id="message" placeholder="Mesaj" required></textarea>
  <button type="submit" class="ub-contact__btn">Gönder</button>
</form>
```

#### JavaScript İşleme (Otomatik)
```javascript
// form.js tarafından otomatik işlenir
// ContactFormConfig.getApiUrl() kullanarak API URL'sini alır
// Form verilerini validate eder
// API'ye POST yapar
```

### Admin Panel Kullanımı

#### Sayfaya Erişim
```
URL: http://localhost:5000/contact-admin
Gerekli: Admin role
```

#### İşlevler
- 📊 İstatistikleri görüntüleme (Toplam, Yeni, Yanıtlandı, Kapatıldı)
- 🔍 Arama yapma (Ad, e-posta, mesaj)
- 🏷️ Status filtresi
- 👁️ Detaylı görüntüleme
- ✏️ Status güncelleme
- 🗑️ Mesaj silme
- 📄 Sayfalama

## 🐛 Sorun Giderme

### Problem: "Mesajınız gönderilmedi" hatası

**Çözüm:**
1. Browser console'u açın (F12)
2. Network tab'ında POST isteğini kontrol edin
3. API response'u kontrol edin

**Yaygın nedenler:**
- API URL yanlış
- API servisi çalışmıyor
- CORS hatası
- Validasyon hatası

### Problem: Admin panelinde mesajlar görünmüyor

**Çözüm:**
1. Kullanıcı rolünün `admin` olduğundan emin olun
2. Redux store state'ini kontrol edin
3. MongoDB'nin çalıştığını doğrulayın
4. API endpoint'i test edin:
```bash
curl http://localhost:5000/api/contact/getAll
```

### Problem: CORS hatası

**Çözüm:**
API'deki CORS ayarları zaten açıktır. Eğer hâlâ hata alıyorsanız:

```javascript
// bebek-proje-api/src/api.service.js'de kontrol edin
fastify.register(cors, {
  origin: (origin, callback) => {
    callback(null, true); // Tüm originler kabul
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  preflight: true,
});
```

## 📚 API Dokumentasyonu

### Endpoints

#### 1. Contact Gönder
```
POST /api/contact/submit-contact
```

**Request:**
```json
{
  "first_name": "Ahmet",
  "last_name": "Yilmaz",
  "email": "ahmet@example.com",
  "message": "Sorularım var..."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Mesajınız başarıyla gönderilmiştir",
  "data": {
    "_id": "a1b2c3d4e5f6g7h8",
    "first_name": "Ahmet",
    "last_name": "Yilmaz",
    "email": "ahmet@example.com",
    "message": "Sorularım var...",
    "status": "new",
    "createdAt": "25-12-2024 14:30:15",
    "updatedAt": "25-12-2024 14:30:15"
  }
}
```

#### 2. Mesajları Listele
```
GET /api/contact/getAll?page=1&limit=10&search=&status=
```

**Query Parametreleri:**
- `page` - Sayfa numarası (varsayılan: 1)
- `limit` - Sayfa başına kayıt (varsayılan: 10)
- `search` - Arama (ad, e-posta, mesaj)
- `status` - Durum (new/replied/closed)

**Response:**
```json
{
  "data": [...],
  "pagination": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "pages": 5
  }
}
```

#### 3. Tekil Mesaj Getir
```
GET /api/contact/getById?id=a1b2c3d4e5f6g7h8
```

#### 4. Status Güncelle
```
PUT /api/contact/updateStatus
```

**Request:**
```json
{
  "id": "a1b2c3d4e5f6g7h8",
  "status": "replied"
}
```

**Status Değerleri:**
- `new` - Yeni mesaj
- `replied` - Yanıt verildi
- `closed` - Kapatıldı

#### 5. Mesaj Sil
```
DELETE /api/contact/deleteContact
```

**Request:**
```json
{
  "id": "a1b2c3d4e5f6g7h8"
}
```

#### 6. İstatistik Getir
```
GET /api/contact/getStats
```

**Response:**
```json
{
  "total": 50,
  "byStatus": [
    {
      "_id": "new",
      "count": 10
    },
    {
      "_id": "replied",
      "count": 30
    },
    {
      "_id": "closed",
      "count": 10
    }
  ]
}
```

## 🔐 Güvenlik

### Uygulanan Güvenlik Önlemleri
✅ Email format validasyonu
✅ Gerekli alan kontrolü
✅ CORS headers ayarlanmış
✅ Helmet security headers
✅ Input sanitizasyonu
✅ Admin role kontrolü
✅ MongoDB injection koruması

### Best Practices
- API endpoint'lerini whitelist'e ekleyin (production)
- Rate limiting ekleyin
- HTTPS kullanın
- MongoDB şifresini güvenli tutun
- Environment variables'ları .env'de saklayın

## 📈 Monitoring

### Log Dosyaları
```
bebek-proje-api/log/
├── main.log              # Ana log dosyası
├── mainErrorLog.json     # Hata logları
└── mainSuccessLog.json   # Başarı logları
```

### Debug Modu Etkinleştirme
```javascript
// contact-config.js
const ContactFormConfig = {
  LOGGING: {
    DEBUG_MODE: true,     // Console'a debug bilgisi yazdır
    LOG_API_CALLS: true,  // API çağrılarını logla
  }
};
```

## 🎓 Developer Notları

### ContactFormConfig Kullanımı

```javascript
// API URL'sini dinamik olarak al
const apiUrl = ContactFormConfig.getApiUrl();

// Hata mesajı al
const errorMsg = ContactFormConfig.getErrorMessage('EMAIL_INVALID');

// Başarı mesajı al
const successMsg = ContactFormConfig.getSuccessMessage();

// Validasyon kurallarına erişim
const emailRegex = ContactFormConfig.VALIDATION.EMAIL_REGEX;
const minLength = ContactFormConfig.VALIDATION.MIN_MESSAGE_LENGTH;
```

### Custom Hook (React)
```typescript
// bebek-web'de kullanmak için
const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  
  const submitContact = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact/submit-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      return await response.json();
    } finally {
      setLoading(false);
    }
  };
  
  return { submitContact, loading };
};
```

## 📞 Destek ve İletişim

Sorularınız için iletişim kurabilirsiniz:
- **E-posta**: bilgi@bri.com.tr
- **Telefon**: +90 (123) 456-7890
- **Adres**: YAHYAKAPTAN MAH. YENİ KANDIRA YOLU CAD NO: 24, İZMİT/ KOCAELİ

## 📅 Sürüm Geçmişi

| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| 1.0.0 | 25.12.2024 | İlk release |

---

**Son Güncelleme**: 25 Aralık 2024
**Status**: ✅ Production Ready
