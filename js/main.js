document.getElementById('theme-button').addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {        
        localStorage.setItem("isDarkTheme", true)
    } else {
        localStorage.setItem("isDarkTheme", '')
    }
})
document.body.classList.add('transition')

document.querySelectorAll('.accordion-head').forEach(el=>{
    el.addEventListener('click', ()=>{
        el.parentElement.classList.toggle('active')
    })
})


var animationContainer = document.getElementById('lottie-container');
var animationData = {
    container: animationContainer,
    renderer: 'canvas', 
    loop: true,
    autoplay: true,
    path: 'lottie/In_store.json'
}

var anim = lottie.loadAnimation(animationData);



