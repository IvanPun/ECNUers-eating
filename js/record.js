//tab
$(document).ready(function () {
  $("#record").css("display", "block");
  $("#achievement").css("display", "none");
});

$(function () {
  $("#myTabs a").click(function (e) {
    e.preventDefault();
    $("#tab-1").toggleClass("tab-underline");
    $("#tab-2").toggleClass("tab-underline");
  });
});

$("#tab-1").click(function (e) {
  e.preventDefault();
  $("#record").css("display", "block");
  $("#achievement").css("display", "none");
});

$("#tab-2").click(function (e) {
  e.preventDefault();
  $("#achievement").css("display", "block");
  $("#record").css("display", "none");
});

$(function () {
  $("#myTab button").click(function (e) {
    e.preventDefault();
    $(this).tab1("show");
  });
});

//上传图片（使用FileReader对象将上传的照片读取成Base64格式）
window.addEventListener("load", () => {
  const $camera = document.querySelector("input");
  $camera.setAttribute("capture", "user");
  $camera.onchange = handleTakePhoto;
  //处理照片数据
  function handleTakePhoto(e) {
    // 读取照片
    if (this.files && this.files[0]) {
      const fileData = this.files[0],
        fileReader = new FileReader();
      fileReader.readAsDataURL(fileData);
      fileReader.onload = (e) => {
        changePhotoSize(fileReader.result)
          .then((res) => {
            const $img = document.querySelector(".img-container img");
            $img !== null && ($img.src = res);
          })
          .catch((e) => {});
      };
    }
  }
  //调整照片大小
  function changePhotoSize(imgData) {
    const $canvas = document.querySelector(".used-for-changing-photo-size"),
      context = $canvas.getContext("2d"),
      image = new Image(),
      // 设置目标宽度（高度随原比例变化）
      targetWidth = 480;
    let aspectRatio = 2;
    image.src = imgData;
    // console.log(image.src);
    return new Promise((resolve, reject) => {
      image.onload = function () {
        aspectRatio = (this.height / this.width).toFixed(3);
        this.height = aspectRatio * targetWidth;
        this.width = targetWidth;
        $canvas.setAttribute("width", this.width + "px");
        $canvas.setAttribute("height", this.height + "px");
        context.drawImage(this, 0, 0, this.width, this.height);
        resolve($canvas.toDataURL());
      };
      image.onerror = (e) => {
        reject(e);
      };
    });
  }
});

//record
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

function record() {
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
  var imgSrc = document.getElementById("myImg").getAttribute("src");
  console.log(imgSrc);
  axios({
    method: "GET",
    url:
      "https://754a457f.r3.cpolar.top/" +
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

function uploadPicture() {
  var formData = new FormData();
  var file = document.getElementById("upload-picture").files[0];
  formData.append("file", file);
  formData.append("fileData", file.name);
}
