const openMobileMenu =document.getElementById('open-modal')
const openBTNClass = openMobileMenu.classList
const closeMobileMenu = document.getElementById('close-modal')
const closeBTNClass = closeMobileMenu.classList
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuClass= mobileMenu.classList

document.querySelector('nav').addEventListener('click', (e)=>{
    if (e.target.id.includes("modal")){
       openBTNClass.toggle('hide-originally')
       closeBTNClass.toggle('hide-originally')
       mobileMenuClass.toggle('show-menu')
    }
})