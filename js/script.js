const humb_close = document.querySelector('.humb_close'),
    humb_open = document.querySelector('.humb_open'),
    nav_menu = document.querySelector('.menu');

humb_close.addEventListener('click' , () =>{
    nav_menu.classList.remove('active')
})

humb_open.addEventListener('click' , () =>{
    nav_menu.classList.add('active')
})


