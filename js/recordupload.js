var gk = document.getElementsByName("flexRadioDefault");
  let setgk = "";
var flag=1;
  for (let i = 0; i < gk.length; i++) {
    gk[i].addEventListener("change", function () {
      if (gk[i].checked) {
        setgk = gk[i].value;
        console.log(gk[i].value);
        flag--;
      }
    });
}
$(".userdk").click(function () {
  var upload = document.querySelector("#recordFormFile");
  var formData = new FormData();
  if(flag){
    alert("请选择是否公开");
    return;
  }
  if(!upload.files[0]){
    alert("请上传图片");
    return;
  }
  formData.append("pub", setgk);
  formData.append("name", localStorage.getItem("name"));
  formData.append("majority", $(".textbz").val());
  formData.append("photo", upload.files[0]);
  axios
        .post("http://124.71.207.55:8081/addPostByName", formData)
        .then(function (response) {
          console.log("文件上传成功", response);
          if (response.status == 200) {
            alert("打卡成功");
          }
        })
        .catch(function (error) {
          console.log("文件上传失败", error);
        });
})