$(document).ready(function(){
    var id=localStorage.getItem("id");
    if(id!=""){
        const Url='https://3a60cb8f.r8.cpolar.top/getMemberById/'+id;
        $.ajax({
            url: Url,
            type: "GET",
            success:function(result){
                console.log(result);
                $("#personal_data").html("");
            }
        })
    }else{
        location.href=("login.html");
    }
})