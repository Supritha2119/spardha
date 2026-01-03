
function toggleCourses() {
    const coursesMenu = document.getElementById("coursesMenu");
    const branchesMenu = document.getElementById("branchesMenu");
    coursesMenu.classList.toggle("active");
    branchesMenu.classList.remove("active"); 
}


function toggleBranches() {
    const coursesMenu = document.getElementById("coursesMenu");
    const branchesMenu = document.getElementById("branchesMenu");
    branchesMenu.classList.toggle("active");
    coursesMenu.classList.remove("active"); 
}


function toggleSub(element) {
    const sub = element.nextElementSibling; 

    
    document.querySelectorAll(".sub-courses").forEach(item => {
        if (item !== sub) item.classList.remove("active");
    });

    sub.classList.toggle("active"); 
}


document.addEventListener("click", function () {
    document.getElementById("coursesMenu").classList.remove("active");
    document.getElementById("branchesMenu").classList.remove("active");
    document.querySelectorAll(".sub-courses").forEach(item => item.classList.remove("active"));
});


const slides = document.querySelectorAll(".slider .slide");
const prev = document.querySelector(".slider-nav .prev");
const next = document.querySelector(".slider-nav .next");

let currentIndex = 0;


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = "none"; 
        slide.classList.remove("active");
    });
    slides[index].style.display = "flex"; 
    slides[index].classList.add("active");
}


showSlide(currentIndex);


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}


setInterval(nextSlide, 5000);


next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
