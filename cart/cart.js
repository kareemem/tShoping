
    let z=Array.from(document.querySelectorAll('.plus'))
    z.forEach((e)=>{
        e.addEventListener('click',function(el){
            console.log(el.target.parentNode.parentNode.querySelector('.num').innerText++);
            el.target.parentNode.parentNode.querySelector('.num').innerText+1
        })
    })

let url=document.querySelector('.btn')
url.addEventListener('click',function(){
    location.href='../checkout/checkout.html'
})