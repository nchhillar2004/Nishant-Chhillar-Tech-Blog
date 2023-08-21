const themeLogo = document.getElementById('themeLogo');
const darkTheme = document.getElementById('darkTheme');
const lightTheme = document.getElementById('lightTheme');
const redTheme = document.getElementById('redTheme');
const greenTheme = document.getElementById('greenTheme');


//Button themes (Dark/Light)
document.getElementById('themeSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme','dark')
        themeLogo.src = "assets/moon-stars.svg";
        darkTheme.classList.toggle('active');
        lightTheme.classList.remove('active');
        redTheme.classList.remove('active');
        greenTheme.classList.remove('active');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','light')
        themeLogo.src = "assets/brightness-high-fill.svg";
        lightTheme.classList.toggle('active');
        darkTheme.classList.remove('active');
        redTheme.classList.remove('active');
        greenTheme.classList.remove('active');
    }
})
 
    //Dropdown Themes
// Light Theme
document.getElementById('lightTheme').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        themeLogo.src = "assets/brightness-high-fill.svg";
        lightTheme.classList.toggle('active');
        darkTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'red') {
        document.documentElement.setAttribute('data-bs-theme','light')
        themeLogo.src = "assets/brightness-high-fill.svg";
        lightTheme.classList.toggle('active');
        redTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'green') {
        document.documentElement.setAttribute('data-bs-theme','light')
        themeLogo.src = "assets/brightness-high-fill.svg";
        lightTheme.classList.toggle('active');
        greenTheme.classList.remove('active');
    }
})

// Dark Theme
document.getElementById('darkTheme').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme','dark')
        themeLogo.src = "assets/moon-stars.svg";
        darkTheme.classList.toggle('active');
        lightTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'red') {
        document.documentElement.setAttribute('data-bs-theme','dark')
        themeLogo.src = "assets/moon-stars.svg";
        darkTheme.classList.toggle('active');
        redTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'green') {
        document.documentElement.setAttribute('data-bs-theme','dark')
        themeLogo.src = "assets/moon-stars.svg";
        darkTheme.classList.toggle('active');
        greenTheme.classList.remove('active');
    }
})

// Red Theme
document.getElementById('redTheme').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme','red')
        themeLogo.src = "assets/icons/fire.svg";
        redTheme.classList.toggle('active');
        lightTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','red')
        themeLogo.src = "assets/icons/fire.svg";
        redTheme.classList.toggle('active');
        darkTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'green') {
        document.documentElement.setAttribute('data-bs-theme','red')
        themeLogo.src = "assets/icons/fire.svg";
        redTheme.classList.toggle('active');
        greenTheme.classList.remove('active');
    }
})

// Green Theme
document.getElementById('greenTheme').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme','green')
        themeLogo.src = "assets/icons/globe-central-south-asia.svg";
        greenTheme.classList.toggle('active');
        lightTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','green')
        themeLogo.src = "assets/icons/globe-central-south-asia.svg";
        greenTheme.classList.toggle('active');
        darkTheme.classList.remove('active');
    }
    if (document.documentElement.getAttribute('data-bs-theme') == 'red') {
        document.documentElement.setAttribute('data-bs-theme','green')
        themeLogo.src = "assets/icons/globe-central-south-asia.svg";
        greenTheme.classList.toggle('active');
        redTheme.classList.remove('active');
    }
})



