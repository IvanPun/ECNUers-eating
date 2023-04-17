$(document).ready(function(){
    var id=localStorage.getItem("id");
    if(id!=""){
        const Url='https://58b9025a.r8.cpolar.top/getMemberById/'+id;
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                $("#personal_data").html("");
            }
        })
    }else{
        location.href=("login.html");
    }
})