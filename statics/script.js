
    setTimeout(() => {
        document.getElementById("popupOverlay").style.display = "flex";
    }, 7000);

    function closePopup() {
        document.getElementById("popupOverlay").style.display = "none";
    }

    document.getElementById("enquiryForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;
        const joining = document.getElementById("joining").value;

        // Validation
        if (name === "" || phone === "" || course === "" || joining === "") {
            alert("Please fill all fields");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Enter valid 10-digit phone number");
            return;
        }

       
        const message = `Hello,
Name: ${name}
Phone: ${phone}
Course Interested: ${course}
Willing to Join: ${joining}`;

      
        const whatsappNumber = "91XXXXXXXXXX";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        closePopup();
    });



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
    slides[index].style.display = "flex"; // show current slide
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


const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 80;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target + '+';
    }
  };
  updateCount();
});



