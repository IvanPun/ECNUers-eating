//Change Personal Data
$("#change_data").click(function(){
    var oldname=localStorage.getItem("name");
    var newname=$('#newname').val();
    var email=$('#email').val();
    var signature=$('#signature').val();

    if (name!="" && password!=""&& email!="") {
        const Url='https://6ac18ad4.r8.cpolar.top/changeUserPassword/'+name+'/'+email+'/'+password;
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
      $.ajax({
        url: 'upload.php',
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
  

