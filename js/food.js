
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
        <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${res.data[i].price}元</h5>
          <h5 class="card-titles">${res.data[i].name}</h5>
            <img src="icons/点赞.png" class="like-icon"  style/>
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
      if(res.data[i].window==stName){
      str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
        <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${res.data[i].price}元</h5>
          <h5 class="card-titles">${res.data[i].name}</h5>
          

            <img src="icons/点赞.png" class="like-icon" />
            <span class="like-number">${res.data[i].favor}</span>
        </div>
      </div>`;
      }
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
          <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${res.data[i].price}元</h5>
            <h5 class="card-titles">${res.data[i].name}</h5>
            

              <img src="icons/点赞.png" class="like-icon" />
              <span class="like-number">${res.data[i].favor}</span>
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
          <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${res.data[i].price}元</h5>
            <h5 class="card-titles">${res.data[i].name}</h5>
            

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
      var window=document.querySelector(".canteen-window").innerHTML;
      console.log(cpname);
      console.log(window);
      axios({
        method: "post",
        url: "http://124.71.207.55:8081/addFavorByName/" + cpname + "/1/" +window,
      }).then((res) => {
        console.log(res.data);
        location.reload();
      });
    });
  }
});
