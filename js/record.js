/*forin演示*/
let strs = {
  a:1,
  b:2,
  c:3,
  d:4
}
for(let keys in strs){
  console.log('forin',strs[keys]);
}
/*获取对象属性演示*/
console.log(Object.keys(strs)); //strs对象组成的数组
Object.keys(strs).forEach(keys=>console.log('我是str里的属性',keys))
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


$(document).ready(function () {
  let name = localStorage.getItem("name");
  axios
    .post("http://124.71.207.55:8081/getLatelyPostByName/" + name)
    .then(function (response) {
      console.log("获取打卡信息", response.data);
      if (response.status == 200) {
        let str = "";
        let str2="";
        for (let i = 0; i < response.data.length; i++) {
          str += `<tr>
          <td>${response.data[i].time}</td>
        </tr>`;
        str2 += `<div class="card" style="width: 100%; margin-top: 3%">
          <img src="${response.data[i].photoPath}" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
            ${response.data[i].majority}
            </p>
            <div class="get-like">获赞数：${response.data[i].favor}</div>
          </div>
        </div>`
        }
        $(".table_navs").html(
          `<tr>
        <td>打卡时间</td>
      </tr>` + str
        );
        $("#totalrecord").append(str2);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});


$(document).ready(function () {
  let name = localStorage.getItem("name");
  axios
    .post("http://124.71.207.55:8081/getUserByName/" + name)
    .then(function (response){
      console.log("获取打卡日期", response.data);
      if (response.status == 200) {
        $(".lxdk").html(response.data.continuousPostDay);
        $(".ygdk").html(response.data.totalPostDay);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
