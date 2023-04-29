var chooseName = document.querySelector(".canteen-window");
var stName = localStorage.getItem("choose_way");
var container = document.querySelector(".hdst");

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
    var flag=JSON.parse(localStorage.getItem("foodlike"));
    for (let i = 0; i < res.data.length; i++) {
      if(flag[res.data[i].name]=="is_like"){
        var likeImg="icons/is_like.png";
      }
      else{
        var likeImg="icons/like.png";
      }
      if(res.data[i].canteen==stName){
      str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
        <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${res.data[i].price}元</h5>
          <h5 class="card-titles">${res.data[i].name}</h5>
            <span class="like-number">${res.data[i].favor}</span>
            <img src="${likeImg}" class="like-icon" />
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
        "/0" ,
    }).then((res) => {
      console.log(res.data);
      let str = "";
      var flag=JSON.parse(localStorage.getItem("foodlike"));
      for (let i = 0; i < res.data.length; i++) {
        if(flag[res.data[i].name]=="is_like"){
          var likeImg="icons/is_like.png";
        }
        else{
          var likeImg="icons/like.png";
        }
        str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
          <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${res.data[i].price}元</h5>
            <h5 class="card-titles">${res.data[i].name}</h5>
              <span class="like-number">${res.data[i].favor}</span>
              <img src="${likeImg}" class="like-icon" />
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
        "/0" ,
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
        str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
          <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${res.data[i].price}元</h5>
            <h5 class="card-titles">${res.data[i].name}</h5>
              <span class="like-number">${res.data[i].favor}</span>
              <img src="${likeImg}" class="like-icon" />
          </div>
        </div>`;
      }
      $(".hdstdk").html(str);
    });
  });
});

function fn(){
  chooseName.innerHTML = localStorage.getItem("choose_way");
  axios({
    method:"get",
    url:"http://124.71.207.55:8081/getDishListOrderly/favor/"+
    localStorage.getItem("choose_way")+
    "/降序/0",
  }).then((res)=>{
    console.log(res.data);
    let str="";
    var flag=JSON.parse(localStorage.getItem("foodlike"));
    for (let i = 0; i < res.data.length; i++) {
      if(flag[res.data[i].name]=="is_like"){
        var likeImg="icons/is_like.png";
      }
      else{
        var likeImg="icons/like.png";
      }
      str += `  <div class="card" style="width: 90%; margin: auto; margin-top: 3%">
        <img src="${res.data[i].photoPath}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${res.data[i].price}元</h5>
          <h5 class="card-titles">${res.data[i].name}</h5>
            <span class="like-number">${res.data[i].favor}</span>
            <img src="${likeImg}" class="like-icon" />
        </div>
      </div>`;
    }
    $(".hdstdk").html(str);
    
  })
}
fn();


$(document).ready(function () {
  var aaa = document.querySelectorAll(".like-icon");
  for (let i = 0; i < aaa.length; i++) {
    aaa[i].addEventListener("click", function () {
      let dz = aaa[i].parentNode.parentNode;
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

$(document).on("click",".like-icon",function(){
  let number;
  let cpname = this.parentNode.querySelector(".card-titles").innerHTML;
  console.log(cpname);
  let window=document.querySelector(".canteen-window").innerHTML;
  console.log(window);
  var flag=JSON.parse(localStorage.getItem("foodlike"));
  console.log(flag);
  if(flag[cpname]=="is_like"){
    number="-1";
    flag[cpname]="like";
    localStorage.setItem("foodlike",JSON.stringify(flag));
    console.log("已经点过赞取消",this);
    this.src="icons/like.png";
    let num=parseInt(this.parentNode.querySelector(".like-number").innerHTML)-1;
    this.parentNode.querySelector(".like-number").innerHTML=num;
  }
  else{
    number="1";
    flag[cpname]="is_like";
    localStorage.setItem("foodlike",JSON.stringify(flag));
    console.log("未点过赞点赞",this);
    this.src="icons/is_like.png";
    let num=parseInt(this.parentNode.querySelector(".like-number").innerHTML)+1;
    this.parentNode.querySelector(".like-number").innerHTML=num;
  }
  axios({
    method: "post",
    url: "http://124.71.207.55:8081/addFavorByName/" + cpname + "/"+number+"/" +window,
  }).then((res) => {
    //location.reload();
  });
}) 
