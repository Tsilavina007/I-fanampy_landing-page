const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".menu-nav");
const close = document.querySelector(".close");

const box = document.getElementById('box');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');



let position = 0;

leftButton.addEventListener('click', () => {
    position -= 296;
    updateBox();
});

rightButton.addEventListener('click', () => {
    position += 296;
    updateBox();
});

function updateBox() {
    box.style.transform = `translateX(${position}px)`;
    box.style.width = `${360 - Math.abs(position) / 4}px`;
    box.style.height = `${360 - Math.abs(position) / 4}px`;
    box.style.borderRadius = `${10 + Math.abs(position) / 20}px`;
}


let positionBox1 = -360;

leftButton.addEventListener('click', () => {
    positionBox1 -= 296;
    updateBox1();
});

rightButton.addEventListener('click', () => {
    positionBox1 += 296;
    updateBox1();
});

function updateBox1() {
    box1.style.transform = `translateX(${positionBox1+360}px)`;
    box1.style.width = `${360 - Math.abs(positionBox1) / 4}px`;
    box1.style.height = `${360 - Math.abs(positionBox1) / 4}px`;
    box1.style.borderRadius = `${10 + Math.abs(positionBox1) / 20}px`;
}


let positionBox2 = 360;

leftButton.addEventListener('click', () => {
    positionBox2 -= 296;
    updateBox2();
});

rightButton.addEventListener('click', () => {
    positionBox2 += 296;
    updateBox2();
});

function updateBox2() {
    box2.style.transform = `translateX(${positionBox2-360}px)`;
    box2.style.width = `${360 - Math.abs(positionBox2) / 4}px`;
    box2.style.height = `${360 - Math.abs(positionBox2) / 4}px`;
    box2.style.borderRadius = `${10 + Math.abs(positionBox2) / 20}px`;
}



// partie 1
menu.addEventListener("click", () => {
    navMenu.classList.add("show")
    navMenu.classList.remove("hide")
    
});

close.addEventListener("click", () => {
    navMenu.classList.add("hide")
    navMenu.classList.remove("show")
});




// partie 2
window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 100) {
        navbar.classList.add('changed')
        navbar.classList.remove('changed2')
    } else {
        navbar.classList.add('changed2')
        navbar.classList.remove('changed')
    }
})




// partie 3
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    if (navLinks.length >2) {
        sections.forEach(function(section, index) {
            var navLink = navLinks[index + 1];
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.offsetHeight;
    
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLink.style.color = 'var(--pcolor2)'; // Change color of current section link
            navLink.style.borderBottom = '3px solid var(--pcolor2)'
            } else {
            navLink.style.color = '#fff'; // Reset color if not scrolled to section
            navLink.style.borderBottom = 'none'
    
            }
        });
    }

});

const rejoindreLink = document.querySelector('a[href="rejoindre.html"]');
const membresLink = document.querySelector('a[href="membres.html"]');
const indexLink = document.querySelector('a[href="index.html"]');

document.querySelectorAll('nav a').forEach(function(link) {
    if (link != rejoindreLink && link != membresLink && link != indexLink) {  
        link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);
        var targetSectionTop = targetSection.offsetTop;
    
        // Scroll to the top of the target section smoothly
        window.scrollTo({
            top: targetSectionTop,
            behavior: 'smooth'
        });
        });
    }
});








// partie 4
const the_animation = document.querySelectorAll('.animation') //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
        }
    // else {
    //     entry.target.classList.remove('scroll-animation')
    // }
    })
},
{ threshold: 0.5
});

for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
    observer.observe(elements);
}

