// Scroll up button

window.addEventListener('scroll' , function(){
    var scroll = document.querySelector('.Scrolltop');
    scroll.classList.toggle("active", window.scrollY > 200);
});

function scrollToTop(){
    window.scrollTo({
        top: 0
    })
}

// NAVBAR
const navMenu = document.getElementById('nav-menu');
const togglefun = function(){
    document.querySelector('.menuicon').classList.toggle('bx-x');
    navMenu.classList.toggle('nav-active');
}
let link = document.querySelectorAll('.link');
const activeLink = ()=>{
    for(data of link){
        data.classList.remove("active");
    }
    event.target.classList.add("active");
}
// NAVBAR END ===========================================================================================

var typed = new Typed(".typing",{
    strings:["Front-End Web Developer","Wordpress Developer"],
    typeSpeed:100,
    backSpeed:50,
    loop:true,
});


// COUNTER ===============================================

document.querySelectorAll('.num').forEach((dispaly)=>{
    var endvalue = dispaly.getAttribute("data-val");
    var a = 0 ;
    var id = setInterval(() => {
        a=a+1;
        if(a > endvalue){
            clearInterval(id);
        }
        else{
            dispaly.innerText = a ;
        }
    }, 100);
})

function focusfunction(element){
    element.style.backgroundColor="rgba(255, 68, 0, 0.250)";
}
function blurfunction(element){
    element.style.backgroundColor="";
}






