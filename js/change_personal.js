//Get Personal Data
$(document).ready(function(){
  var name=localStorage.getItem("name");
  if(name!=""){
      const Url='http://124.71.207.55:8081/getUserByName/'+name;
      $.ajax({
          url: Url,
          type: "POST",
          success:function(result){
              
              if(result.photopath==null){
                var photo= 'photos/default.jpg';
              }else{
                var photo = result.photopath;
              }
              var html="";
              html =  '<div class="card">'+
                      '  <div class="card-body">'+
                      '      <img src="'+photo+'" class="mx-auto d-block personal-icon rounded-circle" >'+
                      '     <form  method="post" enctype="multipart/form-data">'+
                      '         <div class="mb-3">'+
                      '           <div class="mb-3">'+
                      '             <input class="form-control" type="file" id="formFile" name="file">'+
                      '           </div>'+
                      '         <button type="button" class="btn btn-outline-warning mx-auto d-block" id="changeicon">修改个人头像</button>'+
                      '     </form>'+
                      '      <div class="form-floating mb-3">'+
                      '          <input type="text" class="form-control" id="newname" placeholder="null" value="'+result.name+'">'+
                      '          <label for="floatingInput">更改个人昵称</label>'+
                      '      </div>'+
                      '  '+
                      '      <div class="form-floating mb-3">'+
                      '        <input type="text" class="form-control" id="email" placeholder="null" value="'+result.email+'">'+
                      '        <label for="floatingInput">更改电邮</label>'+
                      '    </div>'+
                      '        '+
                      '      <div class="form-floating">'+
                      '          <textarea class="form-control" placeholder="Leave a comment here" id="signature" value="'+result.signature+'"></textarea>'+
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


//change data
$(document).on('click','#change_data',function(){
    var old_name=localStorage.getItem("name");
    var password=localStorage.getItem("password");
    var name = $('#newname').val();
    var email = $('#email').val();
    $.ajax({
      url: 'http://124.71.207.55:8081/changeUserInformation/'+oldname+'/'+newname+'/'+password+'/'+email+'/'+signature,
      type: 'POST',
    })
    

});

//change icon  
$(document).on('click','#changeicon',function(){
    if($('#formFile')[0].files[0]==undefined){
      document.getElementById("btn2").click();
    }else{
      var formData = new FormData();
      var name=localStorage.getItem("name");
      formData.append('name',name);
      formData.append('photo',$('#formFile')[0].files[0]);

      console.log($('#formFile')[0].files[0]);
      $.ajax({
        url: 'http://124.71.207.55:8081/uploadUserImgByName',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function(response) {
          console.log(response);
        },
        error: function(response) {
          console.log(response);
        }
      });
      document.getElementById("btn1").click();
    }  
});

$("#finish").click(function(){
  location.href=("personal.html");
})



  

