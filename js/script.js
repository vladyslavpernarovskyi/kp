window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    

    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 300;

    document.querySelector(".progress-bar").style.height = scrollPercentage + "%";


    const scrollSteps = document.querySelectorAll(".scroll-step");
    scrollSteps.forEach((step, index) => {
        const stepPosition = (index + 1) * (documentHeight / (scrollSteps.length + 1));
        if (scrollPosition >= stepPosition - windowHeight / 2) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
});


  window.addEventListener("scroll", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Модальне вікно
 const modal = document.getElementById("modal");
 const openModal = document.querySelector(".read-more");
 const closeModal = document.querySelector(".close-modal");

 openModal.addEventListener("click", function(event) {
     event.preventDefault();
     modal.classList.add("show");
 });

 closeModal.addEventListener("click", function() {
     modal.classList.remove("show");
 });

 window.addEventListener("click", function(event) {
     if (event.target === modal) {
         modal.classList.remove("show");
     }
 });