var upload = document.querySelector("#formFile");
var wj = "";
upload.addEventListener("change", function (e) {
  console.log("ppp====>", upload.files);
  // 掉axios请求接口上传文件
  var formData = new FormData();
  console.log(upload.files);
  formData.append("name", "测试菜名");
  formData.append("photo", upload.files[0]);
  // 发送POST请求，上传文件到服务器
  $(".btnupload").click(function () {
    axios
      .post("http://124.71.207.55:8081/uploadDishImgByName", formData)
      .then(function (response) {
        console.log("文件上传成功", response);
        if (response.status == 200) {
          alert("上传成功");
        }
      })
      .catch(function (error) {
        console.log("文件上传失败", error);
      });
  });
});
