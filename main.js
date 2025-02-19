var scroll = document.querySelector('.line')
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
window.addEventListener("scroll", 
function ()
{ 
    scroll.style.width = window.scrollY * 100 / height +"%"
})
