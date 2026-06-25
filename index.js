const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {

boxes.forEach(box => {

const position = box.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
box.style.opacity = "1";
box.style.transform = "translateY(0)";
}

});
});

const projectBox = document.getElementById("projectBox");

projectBox.addEventListener("click", () => {

    projectBox.classList.add("clicked");

    setTimeout(() => {
        projectBox.classList.remove("clicked");
    }, 500);

});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(){

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});



const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});

// Para lumabas agad ang unang page
window.dispatchEvent(new Event("scroll"));
