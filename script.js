// ===========================
// MOBILE MENU TOGGLE
// ===========================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLLING WITH OFFSET
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar.offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// ===========================
// CONSULTATION FORM HANDLING
// ===========================
const consultationForm = document.getElementById('consultationForm');
const formMessage = document.getElementById('formMessage');

consultationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(consultationForm);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.primaryGoal || !data.consent) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    const submitButton = consultationForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        // In a real implementation, you would send this to your backend
        // For now, we'll simulate a successful submission

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Here you would typically do:
        // const response = await fetch('/api/consultation', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });

        // For demo purposes, log to console
        console.log('Form submission data:', data);

        // Send email notification (this would be done server-side in production)
        const emailBody = formatEmailBody(data);
        console.log('Email to be sent to Pilatesbysam@hotmail.com:', emailBody);

        // Show success message
        showFormMessage(
            'Thank you! Your consultation request has been received. Sam will contact you within 24 hours.',
            'success'
        );

        // Reset form
        consultationForm.reset();

    } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage(
            'Sorry, there was an error submitting your request. Please try again or contact us directly.',
            'error'
        );
    } finally {
        // Restore button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-hide success messages after 10 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 10000);
    }
}

function formatEmailBody(data) {
    return `
New Consultation Request - Body Solutions by Sam

Client Information:
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Goals and Preferences:
---------------------
Primary Goal: ${data.primaryGoal}
Experience Level: ${data.experience || 'Not specified'}
Session Preference: ${data.preference || 'Not specified'}

Additional Information:
----------------------
${data.message || 'None provided'}

---
This request was submitted via the Body Solutions by Sam website.
Please respond within 24 hours.
    `.trim();
}

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.service-card, .timetable-day, .contact-card, .modality-item');

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ===========================
// ACTIVE NAV LINK HIGHLIGHTING
// ===========================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===========================
// PREVENT FORM RESUBMISSION ON PAGE RELOAD
// ===========================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===========================
// HANDLE EXTERNAL LINKS
// ===========================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add rel="noopener noreferrer" for security
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ===========================
// PHONE NUMBER FORMATTING (OPTIONAL)
// ===========================
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    // Optional: Format as +31 6 1234 5678
    if (value.startsWith('31')) {
        if (value.length > 2) {
            value = '+31 ' + value.substring(2);
        }
        if (value.length > 6) {
            value = value.substring(0, 6) + ' ' + value.substring(6);
        }
        if (value.length > 11) {
            value = value.substring(0, 11) + ' ' + value.substring(11, 15);
        }
    } else if (value.startsWith('06') || value.startsWith('6')) {
        // Dutch mobile format
        if (value.startsWith('0')) {
            value = value.substring(1);
        }
        if (value.length > 1) {
            value = '06 ' + value.substring(1);
        }
        if (value.length > 5) {
            value = value.substring(0, 5) + ' ' + value.substring(5, 9);
        }
        if (value.length > 10) {
            value = value.substring(0, 10) + ' ' + value.substring(10, 14);
        }
    }
});

// ===========================
// LANGUAGE SWITCHING
// ===========================
let currentLanguage = localStorage.getItem('language') || 'nl'; // Default to Dutch

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    updateLanguageToggle();
});

// Language toggle button event listener
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'nl' : 'en';
        setLanguage(currentLanguage);
        localStorage.setItem('language', currentLanguage);
        updateLanguageToggle();
    });
}

function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            // Handle HTML content (for line breaks)
            if (translation.includes('<br>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update form placeholders
    updateFormTranslations(lang);
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updateLanguageToggle() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function updateFormTranslations(lang) {
    const t = translations[lang].consultation;

    // Update form labels
    const nameLabel = document.querySelector('label[for="name"]');
    if (nameLabel) nameLabel.textContent = t.formName + ' *';

    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) emailLabel.textContent = t.formEmail + ' *';

    const phoneLabel = document.querySelector('label[for="phone"]');
    if (phoneLabel) phoneLabel.textContent = t.formPhone + ' *';

    const primaryGoalLabel = document.querySelector('label[for="primaryGoal"]');
    if (primaryGoalLabel) primaryGoalLabel.textContent = t.formPrimaryGoal + ' *';

    const experienceLabel = document.querySelector('label[for="experience"]');
    if (experienceLabel) experienceLabel.textContent = t.formExperience;

    const preferenceLabel = document.querySelector('label[for="preference"]');
    if (preferenceLabel) preferenceLabel.textContent = t.formPreference;

    const messageLabel = document.querySelector('label[for="message"]');
    if (messageLabel) messageLabel.textContent = t.formMessage;

    // Update select placeholders and options
    const primaryGoalSelect = document.getElementById('primaryGoal');
    if (primaryGoalSelect) {
        primaryGoalSelect.options[0].text = t.formPrimaryGoalPlaceholder;
        primaryGoalSelect.options[1].text = t.formPrimaryGoalOptions.painRelief;
        primaryGoalSelect.options[2].text = t.formPrimaryGoalOptions.flexibility;
        primaryGoalSelect.options[3].text = t.formPrimaryGoalOptions.strength;
        primaryGoalSelect.options[4].text = t.formPrimaryGoalOptions.posture;
        primaryGoalSelect.options[5].text = t.formPrimaryGoalOptions.injuryRecovery;
        primaryGoalSelect.options[6].text = t.formPrimaryGoalOptions.stressRelief;
        primaryGoalSelect.options[7].text = t.formPrimaryGoalOptions.generalFitness;
        primaryGoalSelect.options[8].text = t.formPrimaryGoalOptions.other;
    }

    const experienceSelect = document.getElementById('experience');
    if (experienceSelect) {
        experienceSelect.options[0].text = t.formExperiencePlaceholder;
        experienceSelect.options[1].text = t.formExperienceOptions.none;
        experienceSelect.options[2].text = t.formExperienceOptions.beginner;
        experienceSelect.options[3].text = t.formExperienceOptions.intermediate;
        experienceSelect.options[4].text = t.formExperienceOptions.advanced;
    }

    const preferenceSelect = document.getElementById('preference');
    if (preferenceSelect) {
        preferenceSelect.options[0].text = t.formPreferencePlaceholder;
        preferenceSelect.options[1].text = t.formPreferenceOptions.group;
        preferenceSelect.options[2].text = t.formPreferenceOptions.private;
        preferenceSelect.options[3].text = t.formPreferenceOptions.duet;
        preferenceSelect.options[4].text = t.formPreferenceOptions.unsure;
    }

    // Update textarea placeholder
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) messageTextarea.placeholder = t.formMessagePlaceholder;

    // Update consent checkbox label
    const consentLabel = document.querySelector('.checkbox-label span');
    if (consentLabel) consentLabel.textContent = t.formConsent + ' *';

    // Update submit button
    const submitButton = consultationForm.querySelector('button[type="submit"]');
    if (submitButton && !submitButton.disabled) {
        submitButton.textContent = t.formSubmit;
    }
}

// ===========================
// CONSOLE WELCOME MESSAGE
// ===========================
console.log('%cBody Solutions by Sam', 'font-size: 24px; font-weight: bold; color: #E91E8C;');
console.log('%cWebsite successfully loaded! 💪', 'font-size: 14px; color: #333;');
console.log('%cFor inquiries: Pilatesbysam@hotmail.com', 'font-size: 12px; color: #666;');
