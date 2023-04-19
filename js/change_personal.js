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
              if(result.photo==null){
                var photo= 'default';
              }else{
                var photo = result.photo;
              }
              var html="";
              html =  '<div class="card">'+
                      '  <div class="card-body">'+
                      '      <img src="photos/'+photo+'.jpg" class="mx-auto d-block personal-icon rounded-circle" >'+
                      '      <a href=""><button type="button" class="btn btn-outline-warning mx-auto d-block" id="change_icon">修改个人头像</button></a>'+
                      '      <div class="form-floating mb-3">'+
                      '          <input type="text" class="form-control" id="newname" placeholder="null">'+
                      '          <label for="floatingInput">更改个人昵称</label>'+
                      '      </div>'+
                      '  '+
                      '      <div class="form-floating mb-3">'+
                      '        <input type="text" class="form-control" id="email" placeholder="null">'+
                      '        <label for="floatingInput">更改电邮</label>'+
                      '    </div>'+
                      '        '+
                      '      <div class="form-floating">'+
                      '          <textarea class="form-control" placeholder="Leave a comment here" id="signature"></textarea>'+
                      '          <label for="floatingTextarea">更改个人签名</label>'+
                      '      </div>'+
                      '      <button type="button" class="btn btn-outline-success  d-block" id="change_data">提交</button>'+
                      '  </div>'+
                      '</div>';
              $("#main").append(html);
          }
      })
  }else{
      location.href=("login.html");
  }
})

//Change Personal Data
$("#change_data").click(function(){
    var oldname=localStorage.getItem("name");
    var newname=$('#newname').val();
    var email=$('#email').val();
    var signature=$('#signature').val();
    var password=localStorage.getItem("password");

    if (name!="" && password!=""&& email!="") {
        const Url='http://124.71.207.55:8081/changeUserInformation/'+oldname+'/'+newname+'/'+password+'/'+email;
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                if(result=="用户名或邮箱不正确"){
                    $("#warning").html("<h5>用户名或邮箱不正确</h5>");
                }else if(result=="修改用户密码成功"){
                    alert("修改用户密码成功!");
                    location.href=("../login.html");
                }
            }
        })
    }else if(name==''){
        $("#warning").html("<h5>用戶名不能空缺！</h5>");
      }else if(email==''){
        $("#warning").html("<h5>邮箱不能空缺！</h5>");
      }else{
        $("#warning").html("<h5>新密码不能空缺！</h5>");
      }
})

$(document).ready(function() {
    $('#changeicon').submit(function(event) {
      event.preventDefault();
      var formData = new FormData($(this)[0]);
      var name=localStorage.getItem("name");
      formData.append('name',name);
      $.ajax({
        url: 'http://124.71.207.55:8081/uploadUserImgByName',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
          alert(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
      });
      return false;
    });
  });
  

