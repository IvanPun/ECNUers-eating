//check login
$(document).ready(function(){
    var name=localStorage.getItem("name");
    var password=localStorage.getItem("password");
    if(name!=""&&password!=""){
        const Url='https://893fb54.r15.cpolar.top/userLogin/'+name+'/'+password;
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                if(result=="登录成功"){
                    localStorage.setItem("name", name);
                    localStorage.setItem("password", password);
                  }else{
                    localStorage.setItem("name", "");
                    localStorage.setItem("password", "");
                    location.href=("login.html");
                  }
            }
        })
    }else{
        localStorage.setItem("name", "");
        localStorage.setItem("password", "");
    }
})