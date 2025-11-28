# Pricing Dinamik Yönetim Sistemi

Bu dokümantasyon, html-landing'deki fiyatlandırma bölümünün API'den dinamik olarak yüklenmesi, bebek-web admin panel'den yönetilmesi ve kullanıcılara gösterilmesi için gerekli tüm ayarları açıklar.

## 🏗️ Mimari Genel Bakış

```
┌─────────────────────────────────────────────────────────────┐
│                    HTML Landing Page                         │
│            (html-landing/assets/js/pricing-loader.js)        │
│                                                               │
│  - API'den pricing planlarını fetch eder                     │
│  - Aylık/Yıllık toggle'ı yönetir                            │
│  - Dinamik olarak kartları render eder                       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ API Call (GET /api/pricing/list)
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                bebek-proje-api                              │
│           (src/pricing.service.js)                          │
│                                                               │
│  - Pricing planlarını MongoDB'den getir                     │
│  - Admin tarafından oluşturulan, güncellenen planları döndür│
│  - Public endpoint (authentication gerektirmiyor)           │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ Managed by
                       │
┌──────────────────────▼──────────────────────────────────────┐
│               bebek-web Admin Panel                         │
│         (src/pages/PricingAdmin/index.tsx)                  │
│                                                               │
│  - Pricing planlarını CRUD operasyonları                    │
│  - Drag-drop ile sıralama                                   │
│  - Öne çıkan plan seçimi                                    │
│  - Feature management                                        │
└────────────────────────────────────────────────────────────┘
```

## 📦 Bileşenler

### 1. Backend API - bebek-proje-api

#### Dosya: `src/pricing.service.js`

**Açık Endpoints (Authentication gerektirmiyor):**

```javascript
// Tüm aktif pricing planlarını listele
POST /api/pricing/list
Response: {
  data: [
    {
      _id: string,
      name: string,
      slug: string,
      description: string,
      monthlyPrice: number,
      annualPrice: number,
      discount: number,
      features: string[],
      highlighted: boolean,
      order: number,
      active: boolean
    }
  ]
}
```

**Admin Endpoints (Authentication + Admin role gerekldir):**

```javascript
// Tüm planları listele (pasif de dahil)
POST /api/pricing/listAll
Headers: { Authorization: "Bearer <token>" }

// Yeni plan oluştur
POST /api/pricing/create
Body: {
  name: string,
  slug: string,
  description: string,
  monthlyPrice: number,
  annualPrice: number,
  discount: number,
  features: string[],
  highlighted: boolean,
  order: number,
  active: boolean
}

// Planı güncelle
POST /api/pricing/update
Body: {
  id: string,
  ...updatedFields
}

// Planı sil
POST /api/pricing/remove
Body: { id: string }

// Planları yeniden sırala
POST /api/pricing/reorder
Body: {
  plans: [
    { id: string, order: number }
  ]
}
```

### 2. Frontend Admin - bebek-web

#### Dosya: `src/pages/PricingAdmin/index.tsx`

**Özellikler:**
- ✅ Pricing planlarını listele
- ✅ Yeni plan ekle
- ✅ Mevcut planları düzenle
- ✅ Planları sil
- ✅ Drag-drop ile sırala
- ✅ Öne çıkan plan işaretleme
- ✅ Aktif/Pasif durumu yönet
- ✅ Feature management
- ✅ Dinamik form validation

**İstatistikler:**
- Toplam planlar
- Aktif planlar
- Öne çıkan planlar

### 3. Landing Page - html-landing

#### Dosya: `assets/js/pricing-loader.js`

**Özellikleri:**
- API'den pricing planlarını fetch eder
- Aylık/Yıllık fiyat switching
- Dinamik kart rendering
- Highlight/Featured badge göstermesi
- İndirim yüzdesini göstermesi
- AOS animasyonları
- Fallback static pricing

#### Dosya: `index.html`

```html
<!-- Fiyatlandırma bölümü -->
<section id="ub-pricing" class="ub-pricing">
  <!-- Switcher buttons -->
  <div class="ub-pricing__switcher">
    <button class="ub-pricing__switcher-btn ub-pricing__switcher-btn--active" 
            data-target="monthly">
      Aylık
    </button>
    <button class="ub-pricing__switcher-btn" data-target="annual">
      Yıllık (%30 İndirim)
    </button>
  </div>

  <!-- Monthly cards container -->
  <div class="ub-pricing__cards pricing__cards--monthly" data-target="monthly">
    <!-- Dinamik olarak pricing-loader.js tarafından doldurulur -->
  </div>

  <!-- Annual cards container -->
  <div class="ub-pricing__cards pricing__cards--annual ub-pricing__cards--hidden" 
       data-target="annual">
    <!-- Dinamik olarak pricing-loader.js tarafından doldurulur -->
  </div>
</section>

<!-- Script Include -->
<script src="./assets/js/pricing-loader.js"></script>
```

## 🔧 Kurulum ve Konfigürasyon

### 1. API Setup

**Adım 1:** `pricing.service.js` dosyasının `src/` dizinine eklendiğinden emin olun.

**Adım 2:** Moleculer otomatik olarak service'i bulup kaydedecektir (hotload).

**Adım 3:** CORS ayarları zaten yapılandırılmış (`api.service.js`):
```javascript
fastify.register(cors, {
  origin: (origin, callback) => {
    callback(null, true); // Tüm originlere izin ver
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  preflight: true,
});
```

**Adım 4:** Public endpoint white-list'e eklenmiş (`api.service.js`):
```javascript
if (req.url.startsWith("/api/pricing/list")) return;
```

### 2. Admin Panel Setup

**Adım 1:** `PricingAdmin` sayfası `bebek-web/src/pages/` altında oluşturulmuştur.

**Adım 2:** Routing ayarları yapın. Router dosyasında:
```typescript
// src/router/index.tsx
import PricingAdmin from '../pages/PricingAdmin';

const routes = [
  // ... diğer routes
  {
    path: '/admin/pricing',
    element: <PricingAdmin />,
  }
];
```

**Adım 3:** Admin menüsüne link ekleyin (Layout/Header componentlerinde)

### 3. Landing Page Setup

**Adım 1:** `pricing-loader.js` dosyası `html-landing/assets/js/` altında oluşturulmuştur.

**Adım 2:** HTML'ye script include'ı eklenmiş:
```html
<script src="./assets/js/pricing-loader.js"></script>
```

**Adım 3:** Environment variable ayarı (opsiyonel):
```bash
# .env.local veya deployment konfigürasyonu
REACT_APP_API_URL=http://api.example.com:5000
```

Varsayılan: `http://localhost:5000`

## 📝 Veri Modeli

### Pricing Plan Şeması (MongoDB)

```javascript
{
  _id: ObjectId,
  name: String,                    // Plan adı (Başlangıç, Gelişmiş, Premium)
  slug: String,                    // URL slug (baslangic-paketi)
  description: String,             // Kısa açıklama
  monthlyPrice: Number,            // Aylık fiyat (TRY)
  annualPrice: Number,             // Yıllık fiyat (TRY)
  discount: Number,                // İndirim yüzdesi (30)
  features: [String],              // Özellikler listesi
  highlighted: Boolean,            // Öne çıkan plan mı?
  order: Number,                   // Görüntülenme sırası
  active: Boolean,                 // Müşterilere görünür mü?
  createdAt: String,               // Oluşturulma tarihi
  updatedAt: String                // Güncellenme tarihi
}
```

## 🎨 Styling

### CSS Classes

```scss
// Container
.ub-pricing__cards          // Kartlar container
.ub-pricing__cards--hidden  // Gizli state

// Kart
.ub-pricing__card                    // Kart container
.ub-pricing__card--highlighted       // Öne çıkan kart stili

// Badge
.ub-pricing__highlight-badge         // Popüler badge

// Fiyat
.ub-pricing__price                   // Fiyat metni
.ub-pricing__discount                // İndirim badge'i

// Butonlar
.ub-pricing__switcher                // Toggle container
.ub-pricing__switcher-btn            // Toggle button
.ub-pricing__switcher-btn--active    // Aktif button
```

### SCSS Güncellemesi

`assets/scss/layout/pricing/_pricing.scss` dosyasında:

```scss
&__card--highlighted {
  border-color: $soft-purple;
  border-width: 2px;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.15);
}

&__highlight-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, $soft-purple 0%, #c084fc 100%);
  // ...
}

&__discount {
  display: inline-block;
  margin-left: 1rem;
  background-color: rgba(147, 51, 234, 0.1);
  color: $soft-purple;
  // ...
}
```

## 🚀 Kullanım Akışı

### 1. Admin Panel'de Plan Oluşturma

1. Admin dashboard'a gidin
2. "Fiyatlandırma Planları" sayfasına tıklayın
3. "Yeni Plan Ekle" butonuna tıklayın
4. Formu doldurun:
   - Plan Adı
   - Slug
   - Aylık/Yıllık Fiyatlar
   - İndirim Yüzdesi
   - Özellikler
   - Öne Çıkan mı?
   - Aktif mi?
5. "Oluştur" butonuna tıklayın

### 2. Landing Page'de Görüntülenme

1. Sayfa yüklendiğinde `pricing-loader.js` otomatik çalışır
2. API'den planlar fetch'lenir
3. Aylık/Yıllık toggle'ı ile fiyatlar değişir
4. Öne çıkan planlar vurgulanır

### 3. Sıralama Yönetimi

Admin panel'de:
- Kartları drag-drop ile sürükleyerek sırasını değiştirin
- Otomatik olarak API'ye kaydedilir

## 🔍 Debug ve Sorun Giderme

### Landing Page Debugging

```javascript
// Console'da plans'ı kontrol edin
console.log(window.pricingLoader.plans);

// API çağrısını test edin
fetch('http://localhost:5000/api/pricing/list', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}).then(r => r.json()).then(console.log);
```

### Admin Panel Debugging

```typescript
// API response'ı kontrol edin
const response = await fetch(`${API_BASE_URL}/api/pricing/listAll`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});
const result = await response.json();
console.log('Plans:', result.data);
```

### Ortak Sorunlar ve Çözümler

**Problem:** Landing page'de kartlar görmüyorum
- ✅ Çözüm: Tarayıcı console'unda hata kontrolü yapın
- ✅ Network tab'ında API çağrısını kontrol edin
- ✅ API sunucusu çalışıyor mu kontrol edin

**Problem:** Admin panel'den save yapılmıyor
- ✅ Token geçerli mi kontrol edin
- ✅ User'ın admin role'ü var mı kontrol edin
- ✅ API log'unda hata mesajı var mı kontrol edin

**Problem:** CORS hatası
- ✅ API'de CORS aktif mı kontrol edin
- ✅ Origin'i doğru mu kontrol edin
- ✅ Preflight request'in cevap verdiğini kontrol edin

## 📊 API Endpoint Örnekleri

### cURL ile Test

```bash
# Public - Planları listele
curl -X POST http://localhost:5000/api/pricing/list \
  -H "Content-Type: application/json"

# Admin - Tüm planları listele
curl -X POST http://localhost:5000/api/pricing/listAll \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Admin - Plan oluştur
curl -X POST http://localhost:5000/api/pricing/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Premium",
    "slug": "premium",
    "description": "Premium plan",
    "monthlyPrice": 749,
    "annualPrice": 899,
    "discount": 30,
    "features": ["Feature 1", "Feature 2"],
    "highlighted": true,
    "order": 1,
    "active": true
  }'
```

## 📈 İleri Seviye Özellikleri

### A/B Testing

Farklı pricing varyasyonlarını test etmek için:

```javascript
// Admin panel'de A/B test variant'ları oluşturun
// Cookie'ye test group'ı yazın
// pricing-loader.js'de test grubu kontrolü ekleyin
```

### Analytics İntegrasyonu

```javascript
// pricing-loader.js'de
handleClickSubscribe() {
  // Farklı plan click'lerini track edin
  gtag('event', 'pricing_click', {
    plan_name: plan.name,
    plan_price: price
  });
}
```

### Caching

```javascript
// pricing-loader.js'de
const cacheKey = 'pricing_plans_cache';
const cached = localStorage.getItem(cacheKey);
if (cached && !isExpired(cached)) {
  this.plans = JSON.parse(cached);
} else {
  await this.loadPlans();
}
```

## 🔐 Güvenlik Notları

1. ✅ Public endpoint'ler CORS açık ama safe
2. ✅ Admin endpoint'leri token gerektiriyor
3. ✅ Admin role kontrolü yapılıyor
4. ✅ Input validation uygulanıyor
5. ✅ Deletion işleminde confirmation alınıyor

## 📞 Destek ve Güncellemeler

Güncellemeler ve sorunlar için GitHub issues'e bakın.

## 📄 Lisans

MIT License

---

**Hazırlayan:** Bebek Proje Team
**Son Güncelleme:** Oktober 2025
**Sürüm:** 1.0.0
