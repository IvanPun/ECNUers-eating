//Get Personal Data
$(document).ready(function(){
    var name=localStorage.getItem("name");
    if(id!=""){
        const Url='https://893fb54.r15.cpolar.top/getUserByName/'+id;
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                var html="";
                html =  '<div class="container" id="personal_data">'+
                        '<img src="photos/test-person-icon.jpg" class="mx-auto d-block personal-icon rounded-circle" >'+
                        '<a href="change_personal_data.html"><button type="button" class="btn btn-outline-warning mx-auto d-block" id="change_personal_data">修改个人信息</button></a>'+
                        '<div class="card" style="width: 100%;margin-top: 5%;">'+
                        '<ul class="list-group list-group-flush">'+
                        '<li class="list-group-item">昵称：Ivan</li>'+
                        '<li class="list-group-item">邮箱：whitetiger123asd@gmail.com</li>'+
                        '<li class="list-group-item">Never Give Up</li>'+
                        '</ul>'+
                        '</div>'+
                        '<button type="button" class="btn btn-secondary" style="margin-top: 5%;">登出</button><br>'+
                        '<button type="button" class="btn btn-danger" style="margin-top: 5%;">注销</button><br>'+
                        '<button type="button" class="btn btn-outline-success" style="margin-top: 5%;float: right;">设为公开</button>'+
                        '</div>'
                $("#personal_data").html(html);
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
        const Url='https://893fb54.r15.cpolar.top/userLogin/'+name+'/'+password;
        $.ajax({
            url: Url,
            type: "POST",
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
