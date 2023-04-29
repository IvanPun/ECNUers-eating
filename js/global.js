$("#logout").click(function () {
    localStorage.setItem("name", "");
    localStorage.setItem("password", "");
    location.href=("login.html");
})

const btn=document.getElementById("#return");
btn.addEventListener("click",function(){
    $("html,body").animate({scrollTop:0},"slow");
})