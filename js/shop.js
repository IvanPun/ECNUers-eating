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
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("信息上传失败");
      });
  }

  $("#addFoodPic").click(()=> {
    var foodName = document.getElementById("addName").value;
    var upload=document.querySelector("#addFormFile");
    if(!foodName){
      alert('请输入菜品名称');
          return;
    }
    if(!upload.files[0]){
      alert('请上传菜品图片');
          return;
    }
    var formData = new FormData();           
    formData.append("name", foodName);
    formData.append("photo", upload.files[0]);
    axios.post("http://124.71.207.55:8081/uploadDishImgByName", formData ).then(function (response) {
        console.log("文件上传成功", response);
        if (response.status == 200) {
          alert(response.data);
        }
      })
      .catch(function (error) {
        console.log("图片上传失败", error);
        alert("菜品图片上传失败");
      });
  })



  $("#addWindowPic").click(()=> {
       var windowName = document.getElementById("input-window").value
       var upload2=document.querySelector("#addFormFile2");
        if (!windowName) {
          alert('请输入窗口名称');
          return;
        }
        if (!upload2.files[0]) {
          alert('请上传窗口图片');
          return;
        }
        var formData = new FormData();           
        formData.append("name", windowName);
        formData.append("photo", upload2.files[0]);
        axios.post("http://124.71.207.55:8081/uploadWindowsImgByName", formData)
            .then(function (response) {
              console.log("文件上传成功", response);
              if (response.status == 200) {
                alert(response.data);
              }
            })
            .catch(function (error) {
              console.log("图片上传失败", error);
              alert("窗口图片上传失败");
            });
  })






