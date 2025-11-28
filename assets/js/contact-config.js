/**
 * Contact Form Configuration
 * API URL ve diğer ayarları burada yapılandırabilirsiniz
 */

const ContactFormConfig = {
  // API endpoint URL
  API_URL: 'https://api.briportal.com/api/contact/submit-contact',
  
  // Production URL (deploy edildiğinde bunu kullanın)
  // API_URL: 'https://your-production-api.com/api/contact/submit-contact',

  // Form validasyonu ayarları
  VALIDATION: {
    // E-posta regex pattern
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    
    // Minimum karakter sayıları
    MIN_NAME_LENGTH: 2,
    MIN_MESSAGE_LENGTH: 10,
    
    // Maximum karakter sayıları
    MAX_NAME_LENGTH: 50,
    MAX_MESSAGE_LENGTH: 5000,
  },

  // UI ayarları
  UI: {
    // Başarı mesajının görüntü süresi (ms)
    SUCCESS_DISPLAY_TIME: 5000,
    
    // Loading spinner göster/gizle
    SHOW_LOADING_SPINNER: true,
    
    // Alert stili: 'sweetalert2' veya 'browser'
    ALERT_STYLE: 'sweetalert2',
  },

  // Log ayarları
  LOGGING: {
    // Konsola debug bilgisi yazdır
    DEBUG_MODE: false,
    
    // API çağrılarını logla
    LOG_API_CALLS: false,
  },

  // Timeout ayarları
  TIMEOUT: {
    // API isteği timeout süresi (ms)
    API_REQUEST_TIMEOUT: 30000,
    
    // Retry sayısı
    RETRY_ATTEMPTS: 3,
  },

  /**
   * API endpoint'i dinamik olarak belirle
   * Ortam değişkenlerine veya hostname'e göre ayarlanabilir
   */
  getApiUrl: function() {
    // window.CONTACT_API_URL varsa onu kullan (HTML'de tanımlanan)
    if (typeof window !== 'undefined' && window.CONTACT_API_URL) {
      return window.CONTACT_API_URL;
    }

    // Development modu
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:5000/api/contact/submit-contact';
    }

    // Production modu
    return 'https://api.briportal.com/api/contact/submit-contact';
  },

  /**
   * Hata mesajlarını kustom hale getir
   */
  getErrorMessage: function(errorCode) {
    const messages = {
      'VALIDATION_ERROR': 'Lütfen tüm alanları doğru şekilde doldurunuz.',
      'NETWORK_ERROR': 'Ağ bağlantısı hatasıdır. Lütfen internet bağlantınızı kontrol edin.',
      'SERVER_ERROR': 'Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.',
      'TIMEOUT_ERROR': 'İstek zaman aşımına uğradı. Lütfen daha sonra tekrar deneyin.',
      'EMAIL_INVALID': 'Lütfen geçerli bir e-posta adresi girin.',
      'REQUIRED_FIELD': 'Lütfen tüm zorunlu alanları doldurunuz.',
      'MESSAGE_TOO_SHORT': 'Mesajınız en az 10 karakter olmalıdır.',
      'DEFAULT': 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    };

    return messages[errorCode] || messages['DEFAULT'];
  },

  /**
   * Başarı mesajlarını kustom hale getir
   */
  getSuccessMessage: function() {
    return 'Mesajınız başarıyla gönderilmiştir. En kısa sürede sizinle iletişime geçeceğiz.';
  },
};

// Başlangıç debug bilgisi
if (ContactFormConfig.LOGGING.DEBUG_MODE) {
  console.log('[ContactForm] Configuration loaded');
  console.log('[ContactForm] API URL:', ContactFormConfig.getApiUrl());
}

// Eğer require destekliyorsa export et (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ContactFormConfig;
}
