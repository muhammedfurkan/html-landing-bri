// Blog API Test Scripti
// Tarayıcı konsoluna yapıştırarak test edebilirsiniz

const API_URL = 'https://api.briportal.com/api/blog';

// 1. Yeni Blog Yazısı Oluştur
async function testCreateBlog() {
  const newBlog = {
    title: "Dropshipping ile Başarılı Olmak",
    slug: "dropshipping-basarili-olmak",
    content: `
      <h2>Dropshipping Nedir?</h2>
      <p>Dropshipping, tedarikçi tarafından doğrudan müşteriye gönderilen bir iş modelidir.</p>
      
      <h3>Avantajları</h3>
      <ul>
        <li>Düşük başlangıç maliyeti</li>
        <li>Depo kiramanıza gerek yok</li>
        <li>Ürün yönetimi kolaylaşır</li>
      </ul>
      
      <h3>Dezavantajları</h3>
      <ul>
        <li>Düşük kar marjı</li>
        <li>Tedarikçiye bağımlılık</li>
        <li>Müşteri hizmetleri zorluk</li>
      </ul>
    `,
    description: "Dropshipping ile nasıl başarılı olunur, ipuçları ve stratejiler.",
    category: "business",
    image: "https://via.placeholder.com/800x400",
    author: "Admin",
    tags: ["dropshipping", "e-commerce", "iş"],
    status: "draft"
  };

  try {
    const response = await fetch(`${API_URL}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog)
    });
    const result = await response.json();
    console.log('✅ Blog Yazısı Oluşturuldu:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 2. Tüm Blog Yazılarını Getir
async function testGetAllBlogs() {
  try {
    const response = await fetch(`${API_URL}/?limit=10&offset=0&status=published`);
    const result = await response.json();
    console.log('✅ Tüm Blog Yazıları:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 3. Admin Paneli İçin Tüm Blog Yazılarını Getir
async function testGetAdminBlogs() {
  try {
    const response = await fetch(`${API_URL}/admin/list?limit=20&offset=0`);
    const result = await response.json();
    console.log('✅ Admin Blog Yazıları:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 4. Tekil Blog Yazısını Getir
async function testGetBlogById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const result = await response.json();
    console.log('✅ Tekil Blog Yazısı:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 5. Blog Yazısını Güncelle
async function testUpdateBlog(id) {
  const updateData = {
    title: "Güncellenmiş Başlık",
    status: "published"
  };

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    const result = await response.json();
    console.log('✅ Blog Yazısı Güncellendi:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 6. Blog Yazısını Sil
async function testDeleteBlog(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    console.log('✅ Blog Yazısı Silindi:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 7. Slug ile Blog Yazısını Getir
async function testGetBlogBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/slug/${slug}`);
    const result = await response.json();
    console.log('✅ Slug ile Getirilen Blog:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 8. Kategoriye Göre Blog Yazılarını Getir
async function testGetBlogsByCategory(category) {
  try {
    const response = await fetch(`${API_URL}/category/${category}?limit=10`);
    const result = await response.json();
    console.log(`✅ ${category} Kategorisindeki Blog Yazıları:`, result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 9. Blog Yazılarında Arama Yap
async function testSearchBlogs(query) {
  try {
    const response = await fetch(`${API_URL}/search/${query}?limit=20`);
    const result = await response.json();
    console.log(`✅ "${query}" Aramasının Sonuçları:`, result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// 10. En Popüler Blog Yazılarını Getir
async function testGetPopularBlogs() {
  try {
    const response = await fetch(`${API_URL}/popular/5`);
    const result = await response.json();
    console.log('✅ En Popüler Blog Yazıları:', result);
    return result;
  } catch (error) {
    console.error('❌ Hata:', error);
  }
}

// ===== TEST KOMUTU ÖRNEKLERİ =====
/*

Tarayıcı konsoluna (F12) aşağıdaki komutları yazarak test edin:

1. Yeni Blog Yazısı Oluştur:
   testCreateBlog()

2. Tüm Yayınlanmış Blog Yazılarını Getir:
   testGetAllBlogs()

3. Admin Paneli İçin Tüm Blog Yazılarını Getir:
   testGetAdminBlogs()

4. Tekil Blog Yazısını Getir (ID ile):
   testGetBlogById('UUID-BURAYA-GEL')

5. Blog Yazısını Güncelle:
   testUpdateBlog('UUID-BURAYA-GEL')

6. Blog Yazısını Sil:
   testDeleteBlog('UUID-BURAYA-GEL')

7. Slug ile Blog Yazısını Getir:
   testGetBlogBySlug('dropshipping-basarili-olmak')

8. Kategoriye Göre Blog Yazılarını Getir:
   testGetBlogsByCategory('business')

9. Blog Yazılarında Arama Yap:
   testSearchBlogs('dropshipping')

10. En Popüler Blog Yazılarını Getir:
    testGetPopularBlogs()

*/

console.log('🚀 Blog API Test Scripti Yüklendi!');
console.log('Tüm test fonksiyonları kullanıma hazır:');
console.log('- testCreateBlog()');
console.log('- testGetAllBlogs()');
console.log('- testGetAdminBlogs()');
console.log('- testGetBlogById(id)');
console.log('- testUpdateBlog(id)');
console.log('- testDeleteBlog(id)');
console.log('- testGetBlogBySlug(slug)');
console.log('- testGetBlogsByCategory(category)');
console.log('- testSearchBlogs(query)');
console.log('- testGetPopularBlogs()');
