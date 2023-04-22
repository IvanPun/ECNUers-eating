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
$(document).ready(function () {
  console.log(123);
  let name = localStorage.getItem("name");
  axios
    .post("http://124.71.207.55:8081/getLatelyPostByName/" + name)
    .then(function (response) {
      console.log("获取打卡信息", response.data);
      if (response.status == 200) {
        $(".lxdk").html(response.data.length);
        $(".ygdk").html(response.data.length);
        let str = "";
        for (let i = 0; i < response.data.length; i++) {
          str += `<tr>
          <td>${response.data[i].time}</td>
          <td>已打卡</td>
          <td>${response.data[i].time}</td>
        </tr>`;
        }
        $(".table_navs").html(
          `<tr>
        <td>日期</td>
        <td>是否打卡</td>
        <td>打卡时间</td>
      </tr>` + str
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
