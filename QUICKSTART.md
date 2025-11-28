# Blog Yönetim Sistemi - Hızlı Başlangıç Rehberi

## 🎯 Sistem Özeti

**Blog yazılarını yönetmek için tam bir sistem kuruldu:**

✅ **Backend:** Moleculer API + MongoDB  
✅ **Admin Paneli:** React Vite uygulaması  
✅ **Frontend:** HTML Landing sayfaları (dinamik blog yükleme)  
✅ **API:** REST endpoints (tokensız, tüm işlemler mümkün)

---

## 🚀 Hızlı Başlama (5 Dakika)

### 1. Backend'i Başlat
```bash
cd /home/bebek-proje/bebek-proje-api
npm run dev
```
✅ API: `http://localhost:3000/api/blog`

### 2. Frontend'i Başlat
```bash
cd /home/bebek-proje/bebek-web
npm run dev
```
✅ Admin Paneli: `http://localhost:5173`  
📍 Menü: İçerik Yönetimi → Blog Yönetimi

### 3. HTML Landing'i Aç
```bash
cd /home/html-landing
python3 -m http.server 8000
# veya: php -S localhost:8000
```
✅ Ana Sayfa: `http://localhost:8000`

---

## 📱 Admin Paneli Kullanımı

### Blog Yazısı Oluşturma

1. **Admin Paneli'ne Gir:** `http://localhost:5173`
2. **Sidebar → İçerik Yönetimi → Blog Yönetimi**
3. **"Yeni Blog Yazısı" Butonuna Tıkla**
4. **Formu Doldur:**
   ```
   ├─ Başlık: "Dropshipping ile Başarı"
   ├─ Slug: "dropshipping-ile-basarı" (Otomatik)
   ├─ Kısa Açıklama: "Özet metni..."
   ├─ İçerik: "Ana içerik..." (HTML desteklenir)
   ├─ Kategori: "business" / "tech-company" vb.
   ├─ Resim URL: "https://..."
   ├─ Yazar: "Admin"
   ├─ Etiketler: "dropshipping, e-commerce"
   └─ Durum: "draft" → Yayınlamak için "published" yap
   ```
5. **Kaydet → Admin paneline dön**

### Blog Yazısını Yayınla

1. Blog listesine gidilir
2. Yazının durumu "Taslak" ise **"Düzenle"** tıklanır
3. **Durum:** "draft" → **"published"** yapılır
4. **Kaydet** tıklanır

### Blog Yazısını Sil

1. Blog listesinde yazıyı bulur
2. **"Sil"** ikonuna tıklar (Çöp kutusu ikonu)
3. Onaylar

---

## 🌐 Landing Sayfasında Blog Gösterme

### Ana Sayfa (index.html)
- ✅ Son 3 blog yazısını otomatik gösterir
- Sayfa yüklendi mi?  
  → Tarayıcı konsoluna `loadBlogs()` yaz
- Hiçbir blog görmüyor musun?  
  → Yayınlanmış blog yazısı var mı kontrol et

### Blog Listesi (blog.html)
- ✅ Tüm yayınlanmış blog yazılarını listeler
- Kategoriye göre filtrele
- Dinamik sayfa değişiklikleri

### Blog Detay (blog-single.html)
- ✅ URL'den slug alarak blog yazısını gösterir
- Örnek: `blog-single.html?slug=dropshipping-ile-basarı`
- Sayfa başlığı otomatik güncellenir

---

## 🧪 API Test

### Test Arayüzünü Aç
```
http://localhost:8000/blog-api-test.html
```

### Veya Tarayıcı Konsolunu Kullan (F12)

```javascript
// Tüm blog yazılarını getir
fetch('http://localhost:3000/api/blog/').then(r => r.json()).then(console.log)

// Yeni blog oluştur
fetch('http://localhost:3000/api/blog/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Test Blog',
    slug: 'test-blog',
    content: '<p>Test içeriği</p>',
    category: 'tech-company',
    status: 'draft'
  })
}).then(r => r.json()).then(console.log)
```

---

## 📁 Dosya Yapısı

```
Oluşturulan/Güncellenen Dosyalar:

📦 Backend
└── /home/bebek-proje/bebek-proje-api/src/
    └── blog.service.js ✨ (REST API endpoints)

📦 Frontend Services
└── /home/bebek-proje/bebek-web/src/services/
    └── blogService.ts ✨ (API çağrıları)

📦 Admin Sayfaları
└── /home/bebek-proje/bebek-web/src/pages/BlogAdmin/
    ├── index.tsx ✨ (Blog listesi)
    └── form.tsx ✨ (Blog oluştur/düzenle)

📦 Router & Menü
└── /home/bebek-proje/bebek-web/src/
    ├── router/index.tsx (Blog rotaları eklendi)
    └── stores/sideMenuSlice.ts (Blog menüsü eklendi)

📦 Landing Sayfası
└── /home/html-landing/
    ├── index.html (Güncellenmiş)
    ├── blog.html (Güncellenmiş)
    ├── blog-single.html (Güncellenmiş)
    ├── BLOG-MANAGEMENT-SETUP.md ✨ (Dokümantasyon)
    ├── blog-api-test.html ✨ (Test arayüzü)
    └── assets/js/
        ├── blog-loader.js ✨ (Dinamik yükleme)
        └── blog-api-test.js ✨ (Console testleri)
```

---

## 🔌 API Endpoints

### Temel Komutlar

| Metod | Endpoint | Açıklama |
|-------|----------|----------|
| GET | `/api/blog/` | Tüm blog yazılarını getir |
| POST | `/api/blog/` | Yeni blog yazısı oluştur |
| GET | `/api/blog/:id` | Tekil blog yazısını getir |
| PUT | `/api/blog/:id` | Blog yazısını güncelle |
| DELETE | `/api/blog/:id` | Blog yazısını sil |
| GET | `/api/blog/slug/:slug` | Slug ile getir |
| GET | `/api/blog/category/:cat` | Kategoriye göre |
| GET | `/api/blog/search/:q` | Arama yap |
| GET | `/api/blog/popular/:limit` | Popüler yazılar |
| GET | `/api/blog/admin/list` | Admin tümü görsün |

---

## ⚙️ Konfigürasyon

### API URL Değiştirmek

**Frontend (React):**
```typescript
// /src/services/blogService.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
```

**Landing (HTML):**
```javascript
// /assets/js/blog-loader.js
const API_URL = 'http://localhost:3000/api/blog'; // Bunu değiştir
```

### Database Bağlantısı

```bash
# /home/bebek-proje/bebek-proje-api/.env
MONGO_URI=mongodb://localhost:27017/babynow
```

---

## 🐛 Sorun Giderme

### Problem: Blog yazıları gösterilmiyor

**Çözüm:**
1. API çalışıyor mu? 
   ```bash
   curl http://localhost:3000/api/blog/
   ```
2. Blog yazısı `status: "published"` mi?
3. MongoDB'de `blog` collection var mı?
4. Tarayıcı konsolunda hata var mı? (F12)

### Problem: Admin paneline giremiyor

**Çözüm:**
1. Oturum açtın mı?
2. Kullanıcı rolu `admin` mu?
3. Token geçerli mi?

### Problem: CORS hatasında

**Çözüm:**
Backend API'ye CORS ekle:
```javascript
// blog.service.js başında
const cors = require('@fastify/cors');
```

---

## 📊 Database Şeması

### Blog Document
```json
{
  "_id": "UUID",
  "id": "UUID",
  "title": "Blog Başlığı",
  "slug": "blog-basligi",
  "content": "<p>HTML İçerik</p>",
  "description": "Özet",
  "category": "business",
  "image": "https://...",
  "author": "Admin",
  "tags": ["tag1", "tag2"],
  "status": "published",
  "views": 123,
  "createdAt": "2025-01-01T10:00:00Z",
  "updatedAt": "2025-01-01T10:00:00Z"
}
```

### Kategoriler
- `tech-company` - Teknoloji
- `analytics` - Analitik
- `business` - İşletme
- `marketing` - Pazarlama
- `other` - Diğer

---

## 💡 İpuçları

### Blog Yazısı Slug'ını Otomatik Oluştur
```javascript
// Başlık yazıldığında slug otomatik güncellenir
// Ör: "Dropshipping ile Başarı" → "dropshipping-ile-basarı"
```

### HTML İçerik Kullan
Blog yazısında HTML desteklenir:
```html
<h2>Başlık</h2>
<p>Paragraph</p>
<ul>
  <li>Liste elemanları</li>
</ul>
<img src="https://..." alt="Resim">
```

### Etiket Sistemi
Arama ve filtreleme için etiketler kullanın:
```
etiket1, etiket2, etiket3
```

### Blog Yazısı Görüntülenme Sayısı
Bir blog yazısı her açıldığında `views` sayısı 1 artar.

---

## 🎓 Sonraki Adımlar

1. ✅ **Blog yazısı oluştur** - Admin panelinden
2. ✅ **Blog yazısını yayınla** - Durum: published
3. ✅ **Ana sayfada gör** - Otomatik görünecek
4. ✅ **Detay sayfasına tıkla** - Tam içerik görüntülenir
5. 🔄 **SEO optimizasyonu** - Meta tag'ları ekle
6. 🔄 **Yorum sistemi** - İsteğe bağlı olarak ekle

---

## 📞 Teknik Destek

**Hata Logları:**
```bash
# Backend logları
tail -f /home/bebek-proje/bebek-proje-api/log/mainErrorLog.json

# MongoDB koleksiyonlarını kontrol et
# Blog koleksiyonu otomatik oluşturulacak
```

**Sorular:**
- API endpoints nasıl çalışıyor? → `BLOG-MANAGEMENT-SETUP.md`
- Frontend yapısı? → `/src/pages/BlogAdmin/`
- HTML dinamik yükleme? → `/assets/js/blog-loader.js`

---

## ✨ Tamamlandı!

🎉 Blog yönetim sistemi tam olarak kuruldu ve kullanıma hazır!

**Şimdi yapabilecekleriniz:**
- ✅ Admin panelinden blog yazıları yönet
- ✅ Landing sayfasında dinamik blog göster
- ✅ Tüm CRUD işlemlerini yap
- ✅ Arama ve filtreleme kullan

**Keyif al! 🚀**

---

*Son güncelleme: 18 Ekim 2025*
