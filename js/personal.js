//Get Personal Data
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

//Change Personal Data
$("#change_personal_data").click(function(){
    var id=localStorage.getItem("id");
    if (id!="") {
        const Url='https://3a60cb8f.r8.cpolar.top/userLogin/'+name+'/'+password;
        $.ajax({
            url: Url,
            type: "GET",
            success:function(result){
                console.log(result);
                if(result=="登录成功"){
                    localStorage.setItem("name", name);
                    localStorage.setItem("password", password);
                    alert("welcome!");
                    location.href=("index.html");
                  }else if(result=="你的密码错误"){
                    $("#warning").html("<h5>你的密码错误</h5>");
                  }else if(result=="该用户不存在"){
                    $("#warning").html("<h5>该用户不存在</h5>");
                  }
            }
        })
    }else if(name==''&&password==''){
        $("#warning").html("<h5>用戶名和密码都不能空缺！</h5>");
      }else if(name==''){
        $("#warning").html("<h5>用戶名不能空缺！</h5>");
      }else{
        $("#warning").html("<h5>密码不能空缺！</h5>");
      }
})
