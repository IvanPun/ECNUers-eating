var flag=JSON.parse(localStorage.getItem("foodlike"));

var chooseName = document.querySelector(".canteen-window");
var stName = localStorage.getItem("choose_way");
var container = document.querySelector(".hdst");
function fn() {
  console.log(chooseName);
  chooseName.innerHTML = localStorage.getItem("choose_way");
  console.log(flag);
  // 获取食堂窗口列表
  axios({
    method: "get",
    url: "http://124.71.207.55:8081/getWindowsByCanteen/" + stName,
  }).then((res) => {
    console.log(res.data);
    let str = "";
    for (var i = 0; i < res.data.length-1; i++) {
      if(flag[res.data[i].name]=="is_like"){
        var likeImg="icons/is_like.png";
      }
      else{
        var likeImg="icons/like.png";
      }
      str += `<div class="card" style="width: 90%; margin: auto; margin-top: 3%">
      <img src="${res.data[i].photoPath}" class="card-img-top" alt="${res.data[i].photoPath}" />
      <div class="card-body">
        <p class="card-text">${res.data[i].name}</p>
          <span class="like-number">${res.data[i].favor}</span>
          <img src="${likeImg}" class="like-icon" />
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
    url: "http://124.71.207.55:8081/searchDishByWindow/" + params.text,
  }).then((res) => {
    console.log(res.data);
    let str = "";
    for (let i = 0; i < res.data.length; i++) {
      if(flag[res.data[i].name]=="is_like"){
        var likeImg="icons/is_like.png";
      }
      else{
        var likeImg="icons/like.png";
      }
      str += `<div class="card" style="width: 90%; margin: auto; margin-top: 3%">
      <img src="${res.data[i].photoPath}" class="card-img-top" alt="${res.data[i].photoPath}" />
      <div class="card-body">
        <h5 class="card-title">XXX</h5>
        <p class="card-text">${res.data[i].name}</p>
          <span class="like-number">${res.data[i].favor}</span>
          <img src="${likeImg}" class="like-icon" />
      </div>
    </div>`;
    }
    $(".hdst").html(str);
  });
} 



