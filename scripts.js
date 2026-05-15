// ===============================
// SELECT ELEMENTS
// ===============================

const projectItems =
document.querySelectorAll('.project-item');

const projectTitle =
document.getElementById('project-title');

const projectDescription =
document.getElementById('project-description');

const projectVideo =
document.getElementById('project-video');

const githubBtn =
document.getElementById('github-btn');

const demoBtn =
document.getElementById('demo-btn');


// ===============================
// CURRENT PROJECT LINKS
// ===============================

let currentGithub =
'https://github.com/';

let currentDemo =
'https://your-demo-link.com';


// ===============================
// PROJECT SWITCHING
// ===============================

projectItems.forEach(item => {

    item.addEventListener('click', () => {

        projectItems.forEach(i => {
            i.classList.remove('active');
        });

        item.classList.add('active');


        const title =
        item.getAttribute('data-title');

        const description =
        item.getAttribute('data-description');

        const video =
        item.getAttribute('data-video');

        const github =
        item.getAttribute('data-github');

        const demo =
        item.getAttribute('data-demo');


        // SAFE CHECKS

        if(projectTitle){
            projectTitle.innerText = title;
        }

        if(projectDescription){
            projectDescription.innerText = description;
        }


        // VIDEO UPDATE

        if(projectVideo){

            const source =
            projectVideo.querySelector('source');

            if(source){

                source.src = video;

                projectVideo.load();

                projectVideo.play();

            }

        }


        currentGithub = github;

        currentDemo = demo;

    });

});


// ===============================
// GITHUB BUTTON
// ===============================

if(githubBtn){

    githubBtn.addEventListener('click', () => {

        window.open(currentGithub, '_blank');

    });

}


// ===============================
// DEMO BUTTON
// ===============================

if(demoBtn){

    demoBtn.addEventListener('click', () => {

        window.open(currentDemo, '_blank');

    });

}


// ===============================
// VIEW PROJECTS BUTTON
// ===============================

const viewProjectsBtn =
document.getElementById('view-projects-btn');

if(viewProjectsBtn){

    viewProjectsBtn.addEventListener('click', () => {

        const projectsSection =
        document.getElementById('projects');

        if(projectsSection){

            projectsSection.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

}


// ===============================
// RESUME BUTTON
// ===============================

const resumeBtn =
document.getElementById('resume-btn');

if(resumeBtn){

    resumeBtn.addEventListener('click', () => {

        window.open('resume.pdf', '_blank');

    });

}


// ===============================
// NAVBAR ACTIVE LINKS
// ===============================

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current =
            section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active-link');

        if(link.getAttribute('href')
        .includes(current)){

            link.classList.add('active-link');

        }

    });

});


// ===============================
// TYPING EFFECT
// ===============================

const typingText =
document.getElementById('typing-text');

if(typingText){

    const roles = [

        'AI/ML Developer',

        'Computer Vision Enthusiast',

        'BTech Computer Science Student',

        'Full Stack AI Builder',

        'OpenCV Developer',

        'Generative AI Enthusiast'

    ];

    let roleIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect(){

        const currentRole =
        roles[roleIndex];



        // TYPING

        if(!deleting){

            typingText.innerHTML =
            currentRole.substring(0, charIndex);

            charIndex++;

            if(charIndex >
            currentRole.length){

                deleting = true;

                setTimeout(typeEffect,1500);

                return;
            }

        }


        // DELETING

        else{

            typingText.innerHTML =
            currentRole.substring(0, charIndex);

            charIndex--;

            if(charIndex < 0){

                deleting = false;

                roleIndex =
                (roleIndex + 1) % roles.length;

                charIndex = 0;

            }

        }


        setTimeout(

            typeEffect,

            deleting ? 40 : 90

        );

    }

    typeEffect();

}


// ===============================
// SECTION REVEAL ANIMATION
// ===============================

const revealElements =
document.querySelectorAll('.section');

window.addEventListener(
    'scroll',
    revealOnScroll
);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop <
        windowHeight - 100){

            element.classList.add('show');

        }

    });

}

revealOnScroll();


// ===============================
// CUSTOM CURSOR
// ===============================

const cursor =
document.createElement('div');

cursor.classList.add('custom-cursor');

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {

    cursor.style.left =
    e.clientX + 'px';

    cursor.style.top =
    e.clientY + 'px';

});


// ===============================
// SMOOTH NAVIGATION
// ===============================

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        const targetId =
        link.getAttribute('href');

        const targetSection =
        document.querySelector(targetId);

        if(targetSection){

            targetSection.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});