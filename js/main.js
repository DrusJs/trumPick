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
            if (el.parentElement.classList.contains('active')) {
                el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight+ 100 + 'px'
            } else {
                el.nextElementSibling.style.maxHeight = '0px'
            }
        })
    })

    let VisibleLottie = function (target) {
        if (!target) {
            return
        }
        let targetPosition = {
            top: window.scrollY + target.getBoundingClientRect().top,
            bottom: window.scrollY + target.getBoundingClientRect().bottom
        }
        let windowPosition = {
            top: window.scrollY,
            bottom: window.scrollY + document.documentElement.clientHeight
        }

        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
            let video = target.id
            lottieArray.splice(lottieArray.indexOf(video), 1)
            let animationContainer = document.getElementById(video)
            let langPost = animationContainer.dataset.lang?animationContainer.dataset.lang:''
            let animationData = {
                container: animationContainer,
                renderer: 'svg', 
                loop: true,
                autoplay: true,
                path: `lottie/${video}${langPost}.json`
            }
            lottie.loadAnimation(animationData)
        }
    }
    
    let swiper = new Swiper("#swiper", {
        slidesPerView: "auto",
        spaceBetween: 70,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })


    
    let tooltipElem    
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
            tooltipElem.style.top = top + document.documentElement.scrollTop + 'px';

            setTimeout(()=>{
                tooltipElem.remove()
            }, 5000)
    
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
    
    let lottieArray = ['In_store', 'Planet', 'Animal', 'Diseases', 'Children', 'Marketing', 'Evidence', 'Independant', 'Personality', 'Test', 'Effects', 'Chance', 'Doctor', 'Foundation', 'Global', 'Cooker', 'Data', 'One', 'Useful', 'Prog']
    lottieArray.forEach(video=>{
        VisibleLottie(document.getElementById(video))
    })
    

    window.addEventListener('scroll', function() {
        lottieArray.forEach(video=>{
            VisibleLottie(document.getElementById(video))
        })
    })
    
});
//lang document.documentElement.getAttribute('lang').split('-')[0].toUpperCase()

document.querySelectorAll('.current-lenguage').forEach(el=>{
    el.addEventListener('click', (event)=>{
        event.currentTarget.parentElement.classList.add('active')
    })
})

function closeTooltip(el) {
    el.parentElement.remove()
}
