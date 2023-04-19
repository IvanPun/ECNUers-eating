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
                var html="";
                html =  '<div class="container" id="personal_data">'+
                        '<img src="'+photo+'" class="mx-auto d-block personal-icon rounded-circle" >'+
                        '<a href="change_personal_data.html"><button type="button" class="btn btn-outline-warning mx-auto d-block" id="change_personal_data">修改个人信息</button></a>'+
                        '<div class="card" style="width: 100%;margin-top: 5%;">'+
                        '<ul class="list-group list-group-flush">'+
                        '<li class="list-group-item">昵称：'+result.name+'</li>'+
                        '<li class="list-group-item">邮箱：'+ result.email +'</li>'+
                        '<li class="list-group-item">'+result.signature+'</li>'+
                        '</ul>'+
                        '</div>'+
                        '<button type="button" class="btn btn-secondary" style="margin-top: 5%;">登出</button><br>'+
                        '<button type="button" class="btn btn-danger" style="margin-top: 5%;">注销</button><br>'+
                        '<button type="button" class="btn btn-outline-success" style="margin-top: 5%;float: right;">设为公开</button>'+
                        '</div>'
                $("#personal_data").append(html);
            }
        })
    }else{
        location.href=("login.html");
    }
})


