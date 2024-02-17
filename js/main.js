document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('.theme-button').forEach(el=>{
        el.addEventListener('click', ()=>{
            document.body.classList.toggle('dark-theme')
            if (document.body.classList.contains('dark-theme')) {        
                localStorage.setItem("isDarkTheme", true)
            } else {
                localStorage.setItem("isDarkTheme", '')
            }
        })
    })
    document.body.classList.add('transition')
    
    document.querySelectorAll('.accordion-head').forEach(el=>{
        el.addEventListener('click', ()=>{
            el.parentElement.classList.toggle('active')
        })
    })
    
    var swiper = new Swiper("#swiper", {
        slidesPerView: "auto",
        spaceBetween: 70,
        centeredSlides: true,
        speed: 5000,
        autoplay: {
            delay: 2000,
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    let tooltipElem;
    
    document.querySelectorAll('.copy-link').forEach(el=>{
        el.addEventListener('click', (event)=>{
            let activeTool = document.querySelector('.tooltip')
            if (activeTool) { activeTool.remove() }
            let target = event.currentTarget;
    
            let tooltipHtml = target.dataset.tooltip;
    
            tooltipElem = document.createElement('div');
            tooltipElem.className = 'tooltip';
            tooltipElem.innerHTML = tooltipHtml;
            document.body.append(tooltipElem);
    
            let coords = target.getBoundingClientRect();
    
            let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
            if (left < 0) left = 0;
    
            let top = coords.top + 40;
            if (top < 0) {
                top = coords.top + target.offsetHeight + 5;
            }
    
            tooltipElem.style.left = left + 'px';
            tooltipElem.style.top = top + 'px';
    
        })
    })    
    
    let currentUrl = window.location.href
    let appUrl = 'https://app.TrumPick.com'
    document.querySelectorAll(".js-page-copy").forEach(el=>{
        el.addEventListener("click", function() {
            navigator.clipboard.writeText(currentUrl)
        })
    })
    
    document.querySelectorAll(".js-app-copy").forEach(el=>{
        el.addEventListener("click", function() {
            navigator.clipboard.writeText(appUrl)
        })
    })
    
    let lottieArray = ['In_store', 'Planet', 'Animal', 'Diseases', 'Children', 'Marketing', 'Evidence', 'Independant', 'Personality', 'Test', 'Effects', 'Chance', 'Doctor', 'Foundation']
    
    lottieArray.forEach(video=>{
        let animationContainer = document.getElementById(video);
        let animationData = {
            container: animationContainer,
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: `lottie/${video}.json`
        }
        lottie.loadAnimation(animationData);
    })
    
    
});

function closeTooltip(el) {
    el.parentElement.remove()
}
