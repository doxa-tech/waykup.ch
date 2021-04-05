function stickyNav() {
    window.onscroll = function() {myFunction()};
      
    var navbar = document.querySelector('.navbar');
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
}
function googleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-159516284-1');
}
document.addEventListener('DOMContentLoaded', nav);
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}