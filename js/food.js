// $("#food-favor").click(function () {
//   var favorOrder = $("#food-favor-order").find("option:selected").val();
//   if (favorOrder == "升序") {
//     favorOrder = "greater";
//   } else {
//     favorOrder = "less";
//   }
//   console.log("热度", favorOrder);
//   var canteen = $("#canteen-name-button").val();
//   console.log(canteen);
//   axios({
//     method: "get",
//     url:
//       "http://8bb1dd.r8.cpolar.top/getDishOrderly/favor/" +
//       favorOrder +
//       "/east/" +
//       window,
//   })
//     .then((response) => {
//       let res = response.data;
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// $("#food-price").click(function () {
//   var priceOrder = $("#food-price-order").find("option:selected").val();
//   if (priceOrder == "升序") {
//     priceOrder = "greater";
//   } else {
//     priceOrder = "less";
//   }
//   console.log("热度", priceOrder);
//   var canteen = $("#canteen-name-button").val();
//   console.log(canteen);
//   axios({
//     method: "get",
//     url:
//       "http://8bb1dd.r8.cpolar.top/getDishOrderly/price/" +
//       priceOrder +
//       "/east/" +
//       window,
//   })
//     .then((response) => {
//       let res = response.data;
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

function food_search() {
  var inputElem = document.getElementById("food-search");
  console.log(inputElem.value);
}

$(function () {
  $("#searchForm");
});
$(".canteen-window").text(localStorage.getItem("ckname"));
var stName = localStorage.getItem("ckname");
function fn() {
  axios({
    method: "get",
    url: "http://124.71.207.55:8081/searchDishByWindow/" + stName,
  }).then((res) => {
    console.log(res.data);
    let str = "";
    for (let i = 0; i < res.data.length; i++) {
      str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
        <img src="photos/test1.webp" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${res.data[i].price}元</h5>
          <h5 class="card-titles">${res.data[i].name}</h5>
          
            <button type="button"  class="btn btn-outline-success asd">
              我要打卡
            </button>
            <img src="icons/点赞.png" class="like-icon" />
            <span class="like-number">${res.data[i].favor}</span>
        </div>
      </div>`;
    }
    $(".hdstdk").html(str);
  });
}
fn();
var params = {
  text: "",
  heat: "",
  price: "",
};
function food_search(a) {
  params.text = $("#food-search").val();
  console.log(params);
  axios({
    method: "get",
    url: "http://124.71.207.55:8081/searchDishByName/" + params.text,
  }).then((res) => {
    console.log(res.data);
    let str = "";
    for (let i = 0; i < res.data.length; i++) {
      str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
        <img src="photos/test1.webp" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${res.data[i].price}元</h5>
          <h5 class="card-titles">${res.data[i].name}</h5>
          
            <button type="button"  class="btn btn-outline-success als">
              我要打卡
            </button>
            <img src="icons/点赞.png" class="like-icon" />
            <span class="like-number">1</span>
        </div>
      </div>`;
    }
    $(".hdstdk").html(str);
  });
}
$(document).ready(function () {
  $("#food-price-order").change(function () {
    console.log($("#food-price-order").val());
    params.price = $("#food-price-order").val();
    axios({
      method: "get",
      url:
        "http://124.71.207.55:8081/getDishListOrderly/" +
        "price" +
        "/" +
        params.price +
        "/" +
        localStorage.getItem("choose_way") +
        "/" +
        localStorage.getItem("ckname"),
    }).then((res) => {
      console.log(res.data);
      let str = "";
      for (let i = 0; i < res.data.length; i++) {
        str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
          <img src="photos/test1.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${res.data[i].price}元</h5>
            <h5 class="card-titles">${res.data[i].name}</h5>
            
              <button type="button"  class="btn btn-outline-success">
                我要打卡
              </button>
              <img src="icons/点赞.png" class="like-icon" />
              <span class="like-number">1</span>
          </div>
        </div>`;
      }
      $(".hdstdk").html(str);
    });
  });
  $("#food-favor-order").change(function () {
    params.heat = $("#food-favor-order").val();
    axios({
      method: "get",
      url:
        "http://124.71.207.55:8081/getDishListOrderly/" +
        "favor" +
        "/" +
        params.heat +
        "/" +
        localStorage.getItem("choose_way") +
        "/" +
        localStorage.getItem("ckname"),
    }).then((res) => {
      console.log(res.data);
      let str = "";
      for (let i = 0; i < res.data.length; i++) {
        str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
          <img src="photos/test1.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${res.data[i].price}元</h5>
            <h5 class="card-titles">${res.data[i].name}</h5>
            
              <button type="button"  class="btn btn-outline-success">
                我要打卡
              </button>
              <img src="icons/点赞.png" class="like-icon" />
              <span class="like-number">${res.data[i].favor}</span>
          </div>
        </div>`;
      }
      $(".hdstdk").html(str);
    });
  });
});

$(document).ready(function () {
  var aaa = document.querySelectorAll(".like-icon");
  for (let i = 0; i < aaa.length; i++) {
    aaa[i].addEventListener("click", function () {
      let dz = aaa[i].parentNode;
      console.log(dz);
      let cpname = dz.querySelector(".card-titles").innerHTML;
      axios({
        method: "post",
        url: "http://124.71.207.55:8081/addFavorByName/" + cpname + "/" + 1,
      }).then((res) => {
        console.log(res.data);
        location.reload();
      });
    });
  }
});
