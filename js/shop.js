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
    var inputName = document.getElementById("input-food-name");
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

function addFoodPic(){
  var upload = document.querySelector("#addFormFile");
  var inputName = document.getElementById("input-food-name");
    var foodName = inputName.value;
    console.log(foodName);
upload.addEventListener("change", function (e) {
  console.log("ppp====>", upload.files);
  // 调用axios请求接口上传文件
  var formData = new FormData();
  console.log(upload.files);
  formData.append("name", foodName);
  formData.append("photo", upload.files[0]);
  // 发送POST请求，上传文件到服务器
  $(".userdk").click(function () {
    axios
      .post("http://124.71.207.55:8081/uploadDishImgByName", formData)
      .then(function (response) {
        console.log("文件上传成功", response);
        if (response.status == 200) {
          alert("图片上传成功");
        }
      })
      .catch(function (error) {
        console.log("图片上传失败", error);
      });
  });
});
}