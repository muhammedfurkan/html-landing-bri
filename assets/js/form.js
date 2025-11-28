document.addEventListener("DOMContentLoaded", function () {

    // Newsletter Form Submission
    const newsletterForm = document.querySelector(".footer__newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent page reload
    
            let form = this;
            let messageBox = document.getElementById("footer__form-message");
            let submitButton = document.querySelector(".footer__submit-btn");
    
            if (!messageBox || !submitButton) {
                console.error('Required elements for the form are missing!');
                return;
            }
    
            submitButton.disabled = true;
            messageBox.textContent = "Submitting...";
    
            // Simulate AJAX request
            setTimeout(() => {
                messageBox.textContent = "Successfully Subscribed!";
                messageBox.classList.add("active");
    
                form.reset();
                submitButton.disabled = false;
    
                setTimeout(() => {
                    messageBox.classList.remove("active");
                }, 5000);
            }, 1500);
        });
    }
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
    
            let form = this;
            let submitButton = document.querySelector(".ub-contact__btn");
    
            submitButton.disabled = true;
    
            try {
                // Form verilerini al
                const firstName = document.getElementById("first-name").value.trim();
                const lastName = document.getElementById("last-name").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();

                // ContactFormConfig varsa onu kullan, yoksa fallback
                let apiUrl = 'http://localhost:5000/api/contact/submit-contact';
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (typeof ContactFormConfig !== 'undefined') {
                    apiUrl = ContactFormConfig.getApiUrl();
                    emailRegex = ContactFormConfig.VALIDATION.EMAIL_REGEX;
                }

                // Validasyon
                if (!firstName || !lastName || !email || !message) {
                    throw new Error('Lütfen tüm alanları doldurunuz.');
                }

                // Email validasyonu
                if (!emailRegex.test(email)) {
                    throw new Error('Lütfen geçerli bir e-posta adresi girin.');
                }

                // Debug log
                if (typeof ContactFormConfig !== 'undefined' && ContactFormConfig.LOGGING.DEBUG_MODE) {
                    console.log('[ContactForm] Submitting:', {
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        message: message.substring(0, 50) + '...'
                    });
                }

                // API'ye POST isteği gönder
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        message: message
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // API cevap yapısı: { result: { success: true, message: "...", data: {...} }, result_message: {...} }
                    const isSuccess = data.result?.success || data.success;
                    const messageText = data.result?.message || data.message || 'Mesajınız başarıyla gönderilmiştir. Biz en kısa sürede sizinle iletişime geçeceğiz.';
                    
                    if (isSuccess) {
                        const successMessage = (typeof ContactFormConfig !== 'undefined') 
                            ? ContactFormConfig.getSuccessMessage() 
                            : messageText;
                        
                        Swal.fire({
                            title: 'Başarılı!',
                            text: successMessage,
                            icon: 'success',
                            confirmButtonText: 'Kapat'
                        });
                        form.reset();
                    } else {
                        throw new Error(messageText || 'Form gönderilirken bir hata oluştu');
                    }
                    submitButton.disabled = false;
                })
                .catch(error => {
                    console.error('Form submission error:', error);
                    Swal.fire({
                        title: 'Hata!',
                        text: error.message || 'Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
                        icon: 'error',
                        confirmButtonText: 'Kapat'
                    });
                    submitButton.disabled = false;
                });
            } catch (error) {
                Swal.fire({
                    title: 'Hata!',
                    text: error.message || 'Form doğrulanırken bir hata oluştu.',
                    icon: 'error',
                    confirmButtonText: 'Kapat'
                });
                submitButton.disabled = false;
            }
        });
    }

    // Job Application Form Submission
    const jobApplicationForm = document.getElementById("job-application-form");
    if (jobApplicationForm) {
        jobApplicationForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
    
            try {
                Swal.fire({
                    title: "Application Submitted!",
                    text: "Thank you for applying. We will get back to you soon.",
                    icon: "success",
                    confirmButtonText: "OK"
                });
    
                this.reset();
            } catch (error) {
                console.error("Error during form submission:", error);
    
                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                    confirmButtonText: "Close"
                });
            }
        });
    }

    // Signin Form Submission
    const signinForm = document.getElementById('signin');
    if (signinForm) {
        signinForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
    
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully signed in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Optional redirect after alert
            });
        });
    }

    // Signup Form Submission
    const signupForm = document.getElementById('signup');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
    
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully signed up.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Optional redirect after alert
            });
        });
    }
});
