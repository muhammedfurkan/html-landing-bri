# Blog Yönetim Sistemi - Kurulum Rehberi

## 📋 Sistem Özeti

Blog yazılarını **backend API** üzerinden yönetip, **bebek-web admin paneli** ile düzenleyebilir, **html-landing** sayfasında dinamik olarak gösterebileceksiniz.

---

## 🚀 Kurulum Adımları

### 1️⃣ Backend Blog Servisi

**Dosya:** `/home/bebek-proje/bebek-proje-api/src/blog.service.js`

✅ Tokensız REST API endpoints:
- `POST /api/blog/` - Yeni blog yazısı oluştur
- `GET /api/blog/` - Tüm yayınlanmış blog yazılarını getir
- `GET /api/blog/:id` - Tekil blog yazısını getir
- `PUT /api/blog/:id` - Blog yazısını güncelle
- `DELETE /api/blog/:id` - Blog yazısını sil
- `GET /api/blog/slug/:slug` - Slug ile blog yazısını getir
- `GET /api/blog/category/:category` - Kategori bazında blog yazılarını getir
- `GET /api/blog/search/:query` - Blog yazılarında arama yap
- `GET /api/blog/popular/:limit` - En popüler blog yazılarını getir
- `GET /api/blog/admin/list` - Admin paneli için tüm blog yazılarını getir

**MongoDB Collection:** `blog`

---

### 2️⃣ Frontend Blog Servisi

**Dosya:** `/home/bebek-proje/bebek-web/src/services/blogService.ts`

TypeScript servisi ile API çağrıları yapılır:
```typescript
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../../services/blogService';
```

Tüm CRUD operasyonları ve arama işlevleri mevcut.

---

### 3️⃣ Admin Blog Yönetim Sayfaları

#### Blog Listesi
**Dosya:** `/home/bebek-proje/bebek-web/src/pages/BlogAdmin/index.tsx`

- Blog yazılarını listele
- Duruma göre filtrele (Taslak, Yayınlanmış, Arşiv)
- Blog yazılarında arama yap
- Düzenle / Sil işlemleri

#### Blog Formu (Oluştur/Düzenle)
**Dosya:** `/home/bebek-proje/bebek-web/src/pages/BlogAdmin/form.tsx`

Form alanları:
- ✏️ Başlık
- 🔗 Slug (URL)
- 📝 Kısa Açıklama
- 📄 İçerik (HTML desteği)
- 📂 Kategori
- 🖼️ Resim URL
- ✍️ Yazar
- 🏷️ Etiketler
- 📊 Durum (Taslak/Yayınlanmış/Arşiv)

---

### 4️⃣ Admin Menüsü

**Dosya:** `/home/bebek-proje/bebek-web/src/stores/sideMenuSlice.ts`

Sidebar menüsüne "İçerik Yönetimi" sekmesi eklendi:
```
İçerik Yönetimi
  └── Blog Yönetimi (Sadece admin görebilir)
```

Router yapılandırması:
- `/pages/BlogAdmin` - Blog listesi
- `/pages/BlogAdmin/create` - Yeni blog yazısı
- `/pages/BlogAdmin/edit/:id` - Blog yazısını düzenle

---

### 5️⃣ HTML Landing Sayfasında Blog Dinamiği

**Dosya:** `/home/html-landing/assets/js/blog-loader.js`

Sayfalar otomatik blog verilerini backend API'den yüklüyor:

#### Ana Sayfada (index.html)
- İlk 3 blog yazısını gösterir
- Otomatik olarak yüklenir

#### Blog Listesi Sayfasında (blog.html)
- Tüm blog yazılarını listeler
- Kategori filtrelemesi (veri-category özelliği)
- Arama işlevi

#### Blog Detay Sayfasında (blog-single.html)
- URL parametresinden slug alıp, ilgili blog yazısını yükler
- Tam blog içeriğini gösterir
- Dinamik sayfa başlığı günceller

---

## 📡 API Uç Noktaları

### Base URL
```
http://localhost:3000/api/blog
```

### Temel İstekler

#### 1. Tüm Blog Yazılarını Getir
```bash
GET /
Query Params:
  - limit: 10 (Sayfa başına yazı sayısı)
  - offset: 0 (Başlangıç pozisyonu)
  - category: "tech-company" (İsteğe bağlı)
  - status: "published" (Varsayılan: published)
```

#### 2. Yeni Blog Yazısı Oluştur
```bash
POST /
Body:
{
  "title": "Blog Başlığı",
  "slug": "blog-basligi",
  "content": "Blog içeriği...",
  "description": "Kısa açıklama",
  "category": "tech-company",
  "image": "https://...",
  "author": "Yazar Adı",
  "tags": ["tag1", "tag2"],
  "status": "draft"
}
```

#### 3. Blog Yazısını Güncelle
```bash
PUT /:id
Body: (Güncellenmek istenen alanlar)
{
  "title": "Yeni Başlık",
  "status": "published"
}
```

#### 4. Blog Yazısını Sil
```bash
DELETE /:id
```

#### 5. Slug ile Blog Yazısını Getir
```bash
GET /slug/:slug
```

#### 6. Kategoriye Göre Blog Yazılarını Getir
```bash
GET /category/:category?limit=10&offset=0
```

#### 7. Blog Yazılarında Arama Yap
```bash
GET /search/:query?limit=20
```

#### 8. En Popüler Blog Yazılarını Getir
```bash
GET /popular/:limit
```

---

## 🔐 Veri Modeli

### Blog Document (MongoDB)
```json
{
  "_id": "UUID",
  "id": "UUID",
  "title": "String",
  "slug": "string-slug",
  "content": "HTML Content",
  "description": "String",
  "category": "String",
  "image": "URL",
  "author": "String",
  "tags": ["tag1", "tag2"],
  "status": "draft|published|archived",
  "views": "Number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Kategori Türleri
- `tech-company` - Teknoloji
- `analytics` - Analitik
- `business` - İşletme
- `marketing` - Pazarlama
- `other` - Diğer

---

## 🔧 Kurulum ve Çalıştırma

### Backend API'yi Başlat
```bash
cd /home/bebek-proje/bebek-proje-api
npm install
npm run dev
```

Backend API `http://localhost:3000` üzerinde çalışır.

### Frontend'i Çalıştır
```bash
cd /home/bebek-proje/bebek-web
npm install
npm run dev
```

Admin paneli `http://localhost:5173` (veya belirtilen port) üzerinde çalışır.

### HTML Landing Sayfasını Aç
```bash
cd /home/html-landing
# Basit bir HTTP sunucusu ile açın
python3 -m http.server 8000
# veya
php -S localhost:8000
```

---

## 📝 Örnek Kullanım

### Blog Yazısı Oluşturma (Admin Panelinden)

1. **Menüye gir:** İçerik Yönetimi → Blog Yönetimi
2. **Yeni yazı ekle:** "Yeni Blog Yazısı" butonuna tıkla
3. **Formu doldur:**
   - Başlık: "Dropshipping Rehberi"
   - Slug: Otomatik olarak "dropshipping-rehberi" oluşturulur
   - Kategori: "business"
   - İçerik: Blog yazısı
   - Durum: "published"
4. **Kaydet:** "Kaydet" butonuna tıkla

### Blog Yazısını Ana Sayfada Gösterme

Blog yazısını `status: "published"` ile kaydettikten sonra:
- Ana sayfa otomatik olarak son 3 blog yazısını gösterir
- Blog listeleme sayfasında tüm yazılar listelenir
- Yazının slug'ı üzerinden detay sayfasına erişilebilir

---

## 🛠️ Sorun Giderme

### API Bağlantısı Hatasında

1. Backend API'nin çalışıp çalışmadığını kontrol et:
```bash
curl http://localhost:3000/api/blog/
```

2. CORS sorununu kontrol et (gerekirse `@fastify/cors` ekle)

3. `.env` dosyasında `MONGO_URI` kontrol et

### Blog Yazıları Gösterilmiyorsa

1. Blog yazısının `status` alanı `"published"` mı?
2. API URL'si doğru mu? (`blog-loader.js` içinde kontrol et)
3. Tarayıcı konsolu hatalarını kontrol et (F12)

---

## 📊 Proje Yapısı

```
bebek-proje/
├── bebek-proje-api/
│   └── src/
│       └── blog.service.js ✨ (Yeni)
└── bebek-web/
    └── src/
        ├── services/
        │   └── blogService.ts ✨ (Yeni)
        ├── pages/
        │   └── BlogAdmin/ ✨ (Yeni)
        │       ├── index.tsx (Listesi)
        │       └── form.tsx (Oluştur/Düzenle)
        ├── router/
        │   └── index.tsx (Güncellendi)
        └── stores/
            └── sideMenuSlice.ts (Güncellendi)

html-landing/
├── index.html (Güncellendi)
├── blog.html (Güncellendi)
├── blog-single.html (Güncellendi)
└── assets/js/
    └── blog-loader.js ✨ (Yeni)
```

---

## 🎯 Sonraki Adımlar

1. **Blog yazısı oluştur** - Admin panelinden test et
2. **Ana sayfada göster** - Blog yazısı otomatik olarak görünecek
3. **Kategoriyi ayarla** - Farklı kategorilerde blog yazıları oluştur
4. **Etiketleri kullan** - Blog yazılarında arama ve filtreleme yap

---

## 📞 Destek ve Kaynaklar

- Backend API Docs: `/home/bebek-proje/bebek-proje-api/src/blog.service.js`
- Frontend Service: `/home/bebek-proje/bebek-web/src/services/blogService.ts`
- Blog Loader Script: `/home/html-landing/assets/js/blog-loader.js`

---

**Sistem hazır! Admin panelinden blog yazıları oluşturmaya başlayabilirsiniz.** 🚀
