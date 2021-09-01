const darkmode = document.querySelector('#darkmode')
const header = document.querySelector('#header')
const footer = document.querySelector('#footer')
const brand = document.querySelector('#brand')
// ---------- get switchable sections start ---------
const body = document.querySelector('#body')
const main = document.querySelector('#main')
const aboutSection = document.querySelector('#about')
const projectsSection = document.querySelector('#projects')
const contactSection = document.querySelector('#contact')
const resumeSection = document.querySelector('#resume')
// ---------- get switchable sections end ---------
// ---------- language btn's start ----------
const germanBtn = document.querySelector('#german-btn')
const englishBtn = document.querySelector('#english-btn')
const japaneseBtn = document.querySelector('#japanese-btn')
// ---------- language btn's end ----------
// get nav id
const navigation = document.querySelector('#navigation')
// ---------- nav btn's start ----------
const homeBtn = document.querySelector('#home-btn')
const aboutBtn = document.querySelector('#about-btn')
const projectsBtn = document.querySelector('#projects-btn')
const contactBtn = document.querySelector('#contact-btn')
const resumeBtn = document.querySelector('#resume-btn')

homeBtn.addEventListener('click', () => showSite('home'))
aboutBtn.addEventListener('click', () => showSite('about'))
projectsBtn.addEventListener('click', () => showSite('projects'))
contactBtn.addEventListener('click', () => showSite('contact'))
resumeBtn.addEventListener('click', () => showSite('resume'))
// ---------- nav btn's end ----------



// ---------- darkmode start ----------
let lightmode = true

function darkmodeSwitch() {
    if (lightmode) {
        lightmode = false
        // body background color
        body.style.background = "#4f4252"
        // ---------- header start -----------
        header.style.backgroundImage = 'url("./public/pictures/night.svg")'
        brand.style.color = "white"
        darkmode.classList.remove('light-mode')
        darkmode.classList.add('dark-mode')
        darkmode.innerHTML = '<i class="fas fa-sun"></i> lightmode'
        // language buttons
        germanBtn.classList.remove('light-mode')
        germanBtn.classList.add('dark-mode')
        englishBtn.classList.remove('light-mode')
        englishBtn.classList.add('dark-mode')
        japaneseBtn.classList.remove('light-mode')
        japaneseBtn.classList.add('dark-mode')
        // navigation
        navigation.classList.remove('nav-light')
        navigation.classList.add('nav-dark')
        // ----------- header end ----------
        // main start
        main.style.background = "#645056"
        // main end
        // about start
        aboutSection.classList.remove('about-light')
        aboutSection.classList.add('about-dark')
        // about end
        // footer start
        footer.style.background = "#4f4252"
        // footer end
        console.log('darkmode')
    } else {
        lightmode = true
        // body background color
        body.style.background = "#cc5947"
        // header start
        header.style.backgroundImage = 'url("./public/pictures/dayNormal.svg")'
        brand.style.color = ""
        darkmode.classList.remove('dark-mode')
        darkmode.classList.add('light-mode')
        darkmode.innerHTML = '<i class="fas fa-moon"></i> darkmode'
        // header end
        // language buttons
        germanBtn.classList.remove('dark-mode')
        germanBtn.classList.add('light-mode')
        englishBtn.classList.remove('dark-mode')
        englishBtn.classList.add('light-mode')
        japaneseBtn.classList.remove('dark-mode')
        japaneseBtn.classList.add('light-mode')
        // navigation
        navigation.classList.remove('nav-dark')
        navigation.classList.add('nav-light')
        // main start
        main.style.background = ""
        // main end
        // about start
        aboutSection.classList.remove('about-dark')
        aboutSection.classList.add('about-light')
        // about end
        // footer start
        footer.style.background = ""
        // footer end
        console.log('lightmode')
    }
    
}

darkmode.addEventListener('click', () => darkmodeSwitch())

// ---------- darkmode end ----------

// ---------- Site switch start ----------
function showSite(activeSite) {
    // console.log(activeSite)
    switch (activeSite) {
        case "home":
            showHome()
            break
        case "about":
            showAbout()
            break
        case "projects":
            showProjects()
            break
        case "contact":
            showContact()
            break
        case "resume":
            showResume()
            break
    }
}

// show sites
const showHome = () => {
    main.style.display = ""
    aboutSection.style.display = "none"
    projectsSection.style.display = "none"
    contactSection.style.display = "none"
    resumeSection.style.display = "none"
}

const showAbout = () => {
    main.style.display = "none"
    aboutSection.style.display = ""
    projectsSection.style.display = "none"
    contactSection.style.display = "none"
    resumeSection.style.display = "none"
}

const showProjects = () => {
    main.style.display = "none"
    aboutSection.style.display = "none"
    projectsSection.style.display = ""
    contactSection.style.display = "none"
    resumeSection.style.display = "none"
}
const showContact = () => {
    main.style.display = "none"
    aboutSection.style.display = "none"
    projectsSection.style.display = "none"
    contactSection.style.display = ""
    resumeSection.style.display = "none"
}
const showResume = () => {
    main.style.display = "none"
    aboutSection.style.display = "none"
    projectsSection.style.display = "none"
    contactSection.style.display = "none"
    resumeSection.style.display = ""
}

// sites default on Home
showProjects()
// ---------- Site switch end ----------


