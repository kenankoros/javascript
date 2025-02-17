const hambarger = document.querySelector(".hambarger");
const navlist = document.querySelector(".nav-list");

if(hambarger){
    hambarger.addEventListener('click',()=>{

    
        navlist.classList.toggle("open");
});

}