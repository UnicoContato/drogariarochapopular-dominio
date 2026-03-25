const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    if (window.scrollY > 10) {
        header.classList.add('shadow-md');
        header.classList.remove('border-white/20');
        header.classList.add('border-slate-200');
    } else {
        header.classList.remove('shadow-md');
        header.classList.add('border-white/20');
        header.classList.remove('border-slate-200');
    }
    
    lastScrollY = window.scrollY;
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

const modal = document.getElementById('privacy-modal');
const modalContent = document.getElementById('modal-content');
const openModalBtn = document.getElementById('open-modal-btn');
const closeBtns = [document.getElementById('close-modal-btn'), document.getElementById('close-modal-btn-bottom')];
const modalOverlay = document.querySelector('.modal-overlay');

const openModal = () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
};

const closeModal = () => {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
};

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
modalOverlay.addEventListener('click', closeModal);