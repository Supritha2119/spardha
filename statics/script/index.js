
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if(nav.classList.contains('active')) nav.classList.remove('active');
  });
});


document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', (e) => {
    const dropdown = e.currentTarget.nextElementSibling;

    
    document.querySelectorAll('.dropdown-content').forEach(d => {
      if(d !== dropdown) d.classList.remove('active');
    });

    
    dropdown.classList.toggle('active');
  });
});

document.querySelectorAll('.course-title').forEach(title => {
  title.addEventListener('click', (e) => {
    const subCourses = title.nextElementSibling;

   
    document.querySelectorAll('.sub-courses').forEach(sc => {
      if(sc !== subCourses) sc.classList.remove('active');
    });

    
    subCourses.classList.toggle('active');
  });
});


document.addEventListener('click', (e) => {
  if(!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('active'));
  }
  if(!e.target.closest('.course-title')) {
    document.querySelectorAll('.sub-courses').forEach(sc => sc.classList.remove('active'));
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const nextSlide = document.querySelector('.slider-nav .next');
const prevSlide = document.querySelector('.slider-nav .prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

function next() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prev() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

showSlide(slideIndex);

if(nextSlide) nextSlide.addEventListener('click', next);
if(prevSlide) prevSlide.addEventListener('click', prev);


setInterval(next, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const cards = document.querySelectorAll(".google-card");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    let autoSlide;

    function getCardWidth() {
        return cards[0].offsetWidth + 20; 
    }

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;
    }

    function nextSlide() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1;
        }
        updateSlider();
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide();

    
    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", e => {
        endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextSlide();
        if (endX - startX > 50) prevSlide();
        resetAutoSlide();
    });

    window.addEventListener("resize", updateSlider);
});

const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.popup-overlay .close-btn');


if(!sessionStorage.getItem('popupShown')) {
  setTimeout(() => {
    if(popupOverlay) popupOverlay.style.display = 'flex';
    sessionStorage.setItem('popupShown', 'true');
  }, 7000);
}


if(closeBtn) closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});


if(popupOverlay) popupOverlay.addEventListener('click', (e) => {
  if(e.target === popupOverlay) popupOverlay.style.display = 'none';
});


const counters = document.querySelectorAll('.stat-card h3');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; 
    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
