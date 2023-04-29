function record_west_canteen() {
    var button = document.getElementById("choose-canteen");
    button.innerText = "河西食堂";
  }
  
  function record_east_canteen() {
    var button = document.getElementById("choose-canteen");
    button.innerText = "河东食堂";
  }
  
  function record_LiWa_canteen() {
    var button = document.getElementById("choose-canteen");
    button.innerText = "丽娃食堂";
  }

  function addFoodInfo() {
    var canteen = document.getElementById("choose-canteen");
    var canteenName = canteen.innerText;
    console.log(canteenName);
    var inputName = document.getElementById("addName");
    var foodName = inputName.value;
    console.log(foodName);
    var window = document.getElementById("input-window");
    var windowName = window.value;
    console.log(windowName);
    var price = document.getElementById("input-food-price");
    var priceValue = parseFloat(price.value);
    console.log(priceValue);
    axios({
      method: "GET",
      url:
        "http://124.71.207.55:8081/addDish/" +
        foodName +
        "/" +
        priceValue +
        "/" +
        canteenName +
        "/" +
        windowName,
    })
      .then((response) => {
        console.log(response);
        alert("信息上传成功");
      })
      .catch((error) => {
        console.log(error);
        alert("信息上传失败");
      });
  }

function addFoodPic(){
  var upload = document.querySelector("#addFormFile");
  var foodName = document.querySelector("#addName").value;
    console.log(foodName);
upload.addEventListener("change", function (e) {
  console.log("菜品图片", upload.files);
  // 调用axios请求接口上传文件
  var formData = new FormData();
  console.log(upload.files);
  formData.append("name", foodName);
  formData.append("photo", upload.files[0]);
  // 发送POST请求，上传文件到服务器
  $("#addFoodPic").click(function () {
    axios
      .post("http://124.71.207.55:8081/uploadDishImgByName", formData)
      .then(function (response) {
        console.log("文件上传成功", response);
        if (response.status == 200) {
          alert("菜品图片上传成功");
        }
      })
      .catch(function (error) {
        console.log("图片上传失败", error);
        alert("菜品图片上传失败");
      });
  });
});
}

function addWindowPic(){
  var upload=document.querySelector("#addFormFile2");
  var windowName=document.querySelector("#input-window").value;
  console.log(windowName);
  upload.addEventListener("change",function(e){
    console.log("窗口图片", upload.files);
  // 调用axios请求接口上传文件
  var formData = new FormData();
  console.log(upload.files);
  formData.append("name", windowName);
  formData.append("photo", upload.files[0]);
  // 发送POST请求，上传文件到服务器
  $("#addWindowPic").click(function () {
    axios
      .post("http://124.71.207.55:8081/uploadWindowsImgByName", formData)
      .then(function (response) {
        console.log("文件上传成功", response);
        if (response.status == 200) {
          alert("窗口图片上传成功");
        }
      })
      .catch(function (error) {
        console.log("图片上传失败", error);
        alert("窗口图片上传失败");
      });
  });
  })
}

