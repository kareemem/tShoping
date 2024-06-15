let switcherLis=document.querySelectorAll('.list ul li')
let p =Array.from(document.querySelectorAll('.desc'))

$(".ourTeam .owl-carousel").owlCarousel({
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
switcherLis.forEach((li)=>{
    li.addEventListener('click',manageP)
})


function manageP(){
    p.forEach((e)=>{
        e.style.display='none'
    })
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display='block'
    })
}