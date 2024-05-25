$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled',$(this).scrollTop() > $nav.height())
    })
})

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");



menu.addEventListener('click',()=>{
    if(items.style.right == "-360px"){
        items.style.right = "0px"
    }else{
        items.style.right = "-360px"
    }
})