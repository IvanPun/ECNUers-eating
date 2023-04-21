//Get Personal Data
$(document).ready(function(){
    var name=localStorage.getItem("name");
    if(name!=""){
        const Url='http://124.71.207.55:8081/getUserByName/'+name;
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                if(result.photopath==null){
                  var photo= 'photos/default.jpg';
                }else{
                  var photo = result.photopath;
                }

                if(result.signature==null){
                    var signature="此人很懒，没有留下个性签名";
                }else{
                    var signature=result.signature;
                }
                var html="";
                html =  '<img src="'+photo+'" class="mx-auto d-block personal-icon rounded-circle" >'+
                        '<a href="change_personal_data.html"><button type="button" class="btn btn-outline-warning mx-auto d-block" id="change_personal_data">修改个人信息</button></a>'+
                        '<div class="card" style="width: 100%;margin-top: 5%;">'+
                        '<ul class="list-group list-group-flush">'+
                        '<li class="list-group-item">昵称：'+result.name+'</li>'+
                        '<li class="list-group-item">邮箱：'+ result.email +'</li>'+
                        '<li class="list-group-item">'+signature+'</li>'+
                        '</ul>'+
                        '</div>';
                $("#personal_data").append(html);
                $("#confirm-name").append('<input type="text" readonly class="form-control-plaintext" id="name" value="'+result.name+'">');
            }
        })
    }else{
        location.href=("login.html");
    }
    
})

$("#confirm-delete").click(function(){
    var name=localStorage.getItem("name");
    var password=$('#inputPassword').val();
    if(password==""){
        $("#warning").html("密码不能空");
    }else{
        const Url='http://124.71.207.55:8081/deleteUser/'+name+'/'+password;
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                if(result=="用户名或密码不正确"){
                    $("#warning").html("密码错误");
                }else{
                    localStorage.setItem("name", "");
                    localStorage.setItem("password", "");
                    location.href=("login.html");
                }
            }
        })
    }
    
})


$("#logout").click(function () {
    localStorage.setItem("name", "");
    localStorage.setItem("password", "");
    location.href=("login.html");
})



