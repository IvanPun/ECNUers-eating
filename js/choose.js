var chooseName = document.querySelector(".canteen-window");
var stName = localStorage.getItem("choose_way");
var container = document.querySelector(".hdst");
function fn() {
  console.log(123123);
  console.log(chooseName);
  chooseName.innerHTML = localStorage.getItem("choose_way");
  // 获取食堂窗口列表
  axios({
    method: "post",
    url: "http://124.71.207.55:8081/getWindowsByCanteen/" + stName,
  }).then((res) => {
    console.log(res.data);
    let str = "";
    for (var i = 0; i < res.data.length; i++) {
      console.log(res.data[i]);
      str += `<div class="card" style="width: 90%; margin: auto; margin-top: 3%">
      <img src="photos/test1.webp" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">XXX</h5>
        <p class="card-text">${res.data[i]}</p>
        <div class="like">
          <img src="icons/点赞.png" class="like-icon" />
          <span class="like-number">1</span>
        </div>
        <button  class="btn btn-primary setcp">查看菜品</button>
      </div>
    </div>`;
    }
    container.innerHTML = str;
    var setcp = document.querySelectorAll(".setcp");
    for (let i = 0; i < setcp.length; i++) {
      setcp[i].addEventListener("click", function (event) {
        console.log(event);
        let btn = event.target;
        let name = btn.parentNode.parentNode;
        console.log(name);
        let value = name.querySelector(".card-text").textContent;
        localStorage.setItem("ckname", value);
        location.href = "food.html";
      });
    }
  });
}
fn();
var params = {
  text: "",
  heat: "",
  price: "",
};
function window_search(a) {
  params.text = $("#window-search").val();
  console.log(params);
  axios({
    method: "get",
    url: "http://124.71.207.55:8081/getWindowsByCanteen/" + params.text,
  }).then((res) => {
    console.log(res.data);
    let str = "";
    for (let i = 0; i < res.data.length; i++) {
      str += `<div class="card" style="width: 90%; margin: auto; margin-top: 3%">
      <img src="photos/test1.webp" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">XXX</h5>
        <p class="card-text">${res.data[i]}</p>
        <div class="like">
          <img src="icons/点赞.png" class="like-icon" />
          <span class="like-number">${res.data[i].favor}</span>
        </div>
        <button  class="btn btn-primary setcp">查看菜品</button>
      </div>
    </div>`;
    }
    $(".hdst").html(str);
  });
}
$(document).ready(function () {
  $("#window-favor-order").change(function () {
    console.log($("#window-favor-order").val());
    params.price = $("#window-favor-order").val();
    axios({
      method: "get",
      url:
        "http://124.71.207.55:8081/getWindowsByCanteen/" +
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
        str += `<div class="card" style="width: 90%; margin: auto; margin-top: 3%">
        <img src="photos/test1.webp" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">XXX</h5>
          <p class="card-text">${res.data[i]}</p>
          <div class="like">
            <img src="icons/点赞.png" class="like-icon" />
            <span class="like-number">1</span>
          </div>
          <button  class="btn btn-primary setcp">查看菜品</button>
        </div>
      </div>`;
      }
      $(".hdst").html(str);
    });
  });
});
