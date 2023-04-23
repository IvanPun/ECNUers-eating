var upload = document.querySelector("#formFile");
var wj = "";
upload.addEventListener("change", function (e) {
  console.log("ppp====>", upload.files);
  // 掉axios请求接口上传文件
  var formData = new FormData();
  console.log(upload.files);
  var gk = document.getElementsByName("flexRadioDefault");
  let setgk = "";
  for (let i = 0; i < gk.length; i++) {
    gk[i].addEventListener("change", function () {
      if (gk[i].checked) {
        setgk = gk[i].value;
        console.log(gk[i].value);
        formData.append("pub", setgk);
      }
    });
  }
  formData.append("name", localStorage.getItem("name"));
  formData.append("majority", $(".textbz").val());
  formData.append("photo", upload.files[0]);

  // 发送POST请求，上传文件到服务器
$(".userdk").click(function () {
    axios
      .post("http://124.71.207.55:8081/addPostByName", formData)
      .then(function (response) {
        var text=$(".textbz").val();
        console.log(text);
        console.log("文件上传成功", response);
        if (response.status == 200) {
          alert("打卡成功");
        }
      })
      .catch(function (error) {
        console.log("文件上传失败", error);
      });
  });
});
