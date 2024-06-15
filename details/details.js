const num=document.querySelector('.num')
let i=1
let switcherLis=document.querySelectorAll('.additional ul li')
let content = Array.from(document.querySelectorAll('.contentAdditional'))
num.innerHTML=i
$(document).ready(function(){
    $("header .imgDetail .owl-carousel").owlCarousel({
        loop:false,
        nav:true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText:[
            '<i class="fa-solid fa-caret-left"></i>',
            '<i class="fa-solid fa-caret-right"></i>'
        ],responsive: {
            0: {
            items: 1
            },
            25: {
            items: 2
            },
            740: {
            items: 3
            },
            940: {
            items: 4
            }
        }
    });
    });

$('header .imgDetail .owl-carousel img').click(function (e) { 
    let img=document.querySelector('.showImgSlider')
    img.src=e.target.src
});
$('.plus').click(function(){
    i++
    num.innerHTML=i
})
$('.minus').click(function(){
    if(i>1){
        i--
        num.innerHTML=i
    }
})

switcherLis.forEach((li)=>{
    li.addEventListener('click',function(e){
        switcherLis.forEach((li)=>{
            li.classList.remove('activeLi')
        })
        e.target.classList.add('activeLi')
    })
    li.addEventListener('click',manageAdditional)
})

function manageAdditional(){
    content.forEach((e)=>{
        e.style.display='none'
    })
    document.querySelectorAll(this.dataset.cat).forEach((e)=>{
        e.style.display='block'
    })
}