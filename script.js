/**
 * SHE & SHINE APP CONTEXT LAYER ENGINE
 * Handles sticky nav states, animated counters, scroll-reveal transitions,
 * and the interactive service filter experience.
 */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        const iconNode = menuToggle.querySelector('i');
        iconNode.className = navLinks.classList.contains('mobile-active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });
}

const mainHeaderNode = document.querySelector('.main-header');
if (mainHeaderNode) {
    window.addEventListener('scroll', () => {
        mainHeaderNode.classList.toggle('sticky-active', window.scrollY > 50);
    });
}

const serviceCatalog = [
    // 💇 Hair Studio
    { category: 'Hair', title: 'Hair Cut', price: '₹500 – ₹1,200', description: 'Precision cuts tailored to your face shape and personal style by expert stylists.', featured: true },
    { category: 'Hair', title: 'Hair Styling', price: '₹800 onwards', description: 'Blow-dry, curls, updos and occasion-ready looks for every event.', featured: true },
    { category: 'Hair', title: 'Hair Spa', price: '₹1,200 onwards', description: 'Deep conditioning treatment to repair, nourish and add brilliant shine.', featured: true },
    { category: 'Hair', title: 'Hair Coloring', price: '₹3,500 onwards', description: 'Global color, balayage or ombré with premium ammonia-free formulas.', featured: true },
    { category: 'Hair', title: 'Highlights', price: '₹2,800 onwards', description: 'Multi-tonal foil highlights for natural dimension and sun-kissed depth.', featured: true },
    { category: 'Hair', title: 'Keratin Treatment', price: '₹6,500 onwards', description: 'Smooth, frizz-free hair with long-lasting shine and silky manageability.', featured: true },
    { category: 'Hair', title: 'Smoothening', price: '₹5,500 onwards', description: 'Semi-permanent straightening for sleek, effortlessly smooth locks.', featured: true },

    // ✨ Skin & Facial Lounge
    { category: 'Skin & Facial', title: 'Cleanup', price: '₹700', description: 'Deep cleansing, exfoliation and extraction for fresh, clear skin.', featured: true },
    { category: 'Skin & Facial', title: 'Fruit Facial', price: '₹1,200', description: 'Natural fruit enzymes for gentle brightening and a dewy glow.', featured: true },
    { category: 'Skin & Facial', title: 'Gold Facial', price: '₹1,800', description: 'Luxurious gold-infused treatment to boost radiance and firm skin.', featured: true },
    { category: 'Skin & Facial', title: 'Diamond Facial', price: '₹2,200', description: 'Diamond micro-polishing for refined texture and youthful luminosity.', featured: true },
    { category: 'Skin & Facial', title: 'Hydra Facial', price: '₹4,500', description: 'Deep hydration with cleansing, exfoliation and antioxidant infusion.', featured: true },
    { category: 'Skin & Facial', title: 'Anti-Aging Facial', price: '₹4,000', description: 'Collagen-boosting therapy to reduce fine lines and restore elasticity.', featured: true },

    // 💆 Spa & Wellness
    { category: 'Spa & Wellness', title: 'Head Spa', price: '₹1,000', description: 'Stress-relieving scalp massage with aromatic oils for deep relaxation.', featured: true },
    { category: 'Spa & Wellness', title: 'Hand Spa', price: '₹800', description: 'Hydrating hand treatment with massage, mask and nourishing cream.', featured: true },
    { category: 'Spa & Wellness', title: 'Foot Spa', price: '₹900', description: 'A relaxing escape for tired feet with exfoliation and reflexology.', featured: true },
    { category: 'Spa & Wellness', title: 'Aroma Therapy', price: '₹3,000', description: 'A calming full-body experience with premium essential oils.', featured: true },
    { category: 'Spa & Wellness', title: 'Full Body Spa', price: '₹4,500', description: 'Complete body rejuvenation with hot stones, wraps and deep massage.', featured: true },

    // ✨ Med Spa
    { category: 'Med Spa', title: 'Hydra Facial Premium', price: '₹6,000', description: 'Medical-grade hydradermabrasion with LED therapy and serum infusion.', featured: true },
    { category: 'Med Spa', title: 'Chemical Peel', price: '₹3,500', description: 'Targeted resurfacing for a smoother, brighter complexion.', featured: true },
    { category: 'Med Spa', title: 'Laser Hair Reduction', price: '₹2,500 onwards', description: 'FDA-approved diode laser for permanent hair reduction and smooth skin.', featured: true },
    { category: 'Med Spa', title: 'Carbon Laser Facial', price: '₹5,500', description: 'Hollywood peel for minimized pores, even tone and instant glow.', featured: true },
    { category: 'Med Spa', title: 'Skin Rejuvenation', price: '₹6,500', description: 'Advanced treatment designed to restore glow, firmness and vitality.', featured: true },

    // 💅 Nails
    { category: 'Nails', title: 'Classic Manicure', price: '₹700', description: 'Nail shaping, cuticle care, hand massage and polished finish.', featured: true },
    { category: 'Nails', title: 'Spa Manicure', price: '₹1,200', description: 'Luxury nail care with paraffin dip, hydration mask and polish.', featured: true },
    { category: 'Nails', title: 'Classic Pedicure', price: '₹900', description: 'Foot soak, callus care, nail grooming and a clean polished look.', featured: true },
    { category: 'Nails', title: 'Spa Pedicure', price: '₹1,500', description: 'Premium foot treatment with scrub, mask and extended massage.', featured: true },
    { category: 'Nails', title: 'Gel Polish', price: '₹600', description: 'Chip-free, glossy gel finish that lasts up to three weeks.', featured: true },
    { category: 'Nails', title: 'Nail Extensions', price: '₹2,000', description: 'Custom acrylic or gel extensions tailored to your desired length and style.', featured: true },

    // 💄 Makeup Studio
    { category: 'Makeup Studio', title: 'Party Makeup', price: '₹3,500', description: 'Soft glam finish for cocktails, parties and evening celebrations.', featured: true },
    { category: 'Makeup Studio', title: 'Engagement Makeup', price: '₹8,000', description: 'Elegant, photo-ready look for your special engagement ceremony.', featured: true },
    { category: 'Makeup Studio', title: 'HD Makeup', price: '₹10,000', description: 'High-definition camera-ready makeup with flawless, poreless finish.', featured: true },
    { category: 'Makeup Studio', title: 'Airbrush Makeup', price: '₹15,000', description: 'Ultra-fine airbrush application for a seamless, long-lasting look.', featured: true },
    { category: 'Makeup Studio', title: 'Bridal Makeup', price: '₹18,000', description: 'A premium editorial look with trial session, created for the big day.', featured: true }
];

const serviceCategoryNav = document.getElementById('serviceCategoryNav');
const serviceSearchInput = document.getElementById('serviceSearchInput');
const servicesGridContainer = document.getElementById('servicesGridContainer');
const showMoreBtn = document.getElementById('showMoreBtn');
const searchEmptyAlert = document.getElementById('searchEmptyAlert');

let activeCategory = 'all';
let visibleCount = 8;

function updateActiveTab() {
    if (!serviceCategoryNav) return;
    serviceCategoryNav.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === activeCategory);
    });
}

function getFilteredServices() {
    const query = serviceSearchInput ? serviceSearchInput.value.toLowerCase().trim() : '';
    return serviceCatalog.filter(service => {
        const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
        const searchableText = `${service.title} ${service.description} ${service.price} ${service.category}`.toLowerCase();
        const matchesQuery = !query || searchableText.includes(query);
        return matchesCategory && matchesQuery;
    });
}

/* Category icon map */
const categoryIcons = {
    'Hair': 'fa-solid fa-scissors',
    'Skin & Facial': 'fa-solid fa-spa',
    'Spa & Wellness': 'fa-solid fa-hand-sparkles',
    'Med Spa': 'fa-solid fa-syringe',
    'Nails': 'fa-solid fa-paintbrush',
    'Makeup Studio': 'fa-solid fa-wand-magic-sparkles'
};

function renderServices() {
    if (!servicesGridContainer) return;

    const filteredServices = getFilteredServices();
    let servicesToRender = filteredServices;

    if (activeCategory === 'all') {
        servicesToRender = filteredServices.slice(0, visibleCount);
        if (showMoreBtn) {
            const remaining = filteredServices.length - servicesToRender.length;
            showMoreBtn.style.display = remaining > 0 ? 'inline-flex' : 'none';
        }
    } else {
        if (showMoreBtn) showMoreBtn.style.display = 'none';
    }

    if (servicesToRender.length === 0) {
        servicesGridContainer.innerHTML = '';
        if (searchEmptyAlert) {
            searchEmptyAlert.style.display = 'block';
        }
        return;
    }

    if (searchEmptyAlert) {
        searchEmptyAlert.style.display = 'none';
    }

    servicesGridContainer.innerHTML = servicesToRender.map((service, index) => `
        <div class="service-list-row scroll-reveal" style="animation-delay: ${index * 0.04}s">
            <div class="service-row-icon">
                <i class="${categoryIcons[service.category] || 'fa-solid fa-star'}"></i>
            </div>
            <div class="service-row-info">
                <div class="service-row-top">
                    <h3 class="service-row-title">${service.title}</h3>
                    <span class="service-row-badge">${service.category}</span>
                </div>
                <p class="service-row-desc">${service.description}</p>
            </div>
            <div class="service-row-price">${service.price}</div>
            <button type="button" class="btn btn-book-now book-hook-trigger" data-service="${service.title} • ${service.category}">
                <span class="btn-book-text">Book Now</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `).join('');

    observeRevealTargets();
}

function setActiveCategory(category) {
    activeCategory = category;
    visibleCount = 4;
    updateActiveTab();
    renderServices();
}

if (serviceCategoryNav) {
    serviceCategoryNav.addEventListener('click', event => {
        const tab = event.target.closest('.service-tab');
        if (!tab) return;
        setActiveCategory(tab.dataset.category);
    });
}

if (serviceSearchInput) {
    serviceSearchInput.addEventListener('input', () => {
        visibleCount = 4;
        renderServices();
    });
}

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        visibleCount += 8;
        renderServices();
    });
}

document.addEventListener('click', event => {
    const button = event.target.closest('.book-hook-trigger');
    if (!button) return;

    const referenceValueText = button.getAttribute('data-service');
    const inputFieldTarget = document.getElementById('userService');

    if (inputFieldTarget) {
        inputFieldTarget.value = `Reservation: ${referenceValueText}`;
        inputFieldTarget.style.borderColor = '#C89B6D';
        setTimeout(() => {
            inputFieldTarget.style.borderColor = 'rgba(91,40,74,0.08)';
        }, 1500);
    }

    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

const globalViewportObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');

            if (entry.target.classList.contains('stat-card')) {
                const counterDisplayNode = entry.target.querySelector('.stat-number');
                if (counterDisplayNode && !counterDisplayNode.classList.contains('counted')) {
                    animateNumericCountingStats(counterDisplayNode);
                }
            }
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
});

function observeRevealTargets() {
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        if (!element.dataset.revealBound) {
            globalViewportObserver.observe(element);
            element.dataset.revealBound = 'true';
        }
    });
}

observeRevealTargets();

function animateNumericCountingStats(node) {
    node.classList.add('counted');
    const absoluteCeilingValue = parseInt(node.getAttribute('data-target'), 10);
    let startFrameMetric = 0;
    const trackingDuration = 1800;
    const intervalTickSpeed = 30;
    const incrementalStep = Math.ceil(absoluteCeilingValue / (trackingDuration / intervalTickSpeed));

    const coreTimerLoop = setInterval(() => {
        startFrameMetric += incrementalStep;
        if (startFrameMetric >= absoluteCeilingValue) {
            node.innerText = absoluteCeilingValue;
            clearInterval(coreTimerLoop);
        } else {
            node.innerText = startFrameMetric;
        }
    }, intervalTickSpeed);
}

const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const alertBox = document.getElementById('successBox');
        if (alertBox) {
            alertBox.style.display = 'block';
        }
        e.target.reset();
        setTimeout(() => {
            if (alertBox) {
                alertBox.style.display = 'none';
            }
        }, 5000);
    });
}

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newsAlert = document.getElementById('newsSuccess');
        if (newsAlert) {
            newsAlert.style.display = 'block';
        }
        e.target.reset();
        setTimeout(() => {
            if (newsAlert) {
                newsAlert.style.display = 'none';
            }
        }, 4000);
    });
}

renderServices();
