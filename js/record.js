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
  let date = localStorage.getItem("recordDate");
  if(date=="显示最近十次打卡日期"){
    axios
    .post("http://124.71.207.55:8081/getLatelyPostByName/" + name)
    .then(function (response) {
      $(".recordDate").html("显示最近十次打卡日期");
      var length=response.data.length>10?10:length;
      console.log("获取打卡信息", response.data);
      if (response.status == 200) {
        let str = "";
        let str2="";
        for (let i = 0; i < length; i++) {
          str += `<tr>
          <td>${response.data[i].timestring}</td>
        </tr>`;
        str2 += `<div class="card" style="width: 100%; margin-top: 3%">
          <img src="${response.data[i].photoPath}" class="card-img-top" alt="${response.data[i].photoPath}" />
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
  }
  else{
  axios
    .post("http://124.71.207.55:8081/getLatelyPostByName/" + name)
    .then(function (response) {
      console.log("获取打卡信息", response.data);
      if (response.status == 200) {
        let str = "";
        let str2="";
        for (let i = 0; i < response.data.length; i++) {
          str += `<tr>
          <td>${response.data[i].timestring}</td>
        </tr>`;
        str2 += `<div class="card" style="width: 100%; margin-top: 3%">
          <img src="${response.data[i].photoPath}" class="card-img-top" alt="${response.data[i].photoPath}" />
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
  }
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


function recordDate(){
  var type=localStorage.getItem("recordDate");
  console.log(type);
  if(type=="显示最近十次打卡日期"){
    $(".recordDate").html("显示所有打卡日期");
    localStorage.setItem("recordDate","显示所有打卡日期");
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
          <td>${response.data[i].timestring}</td>
        </tr>`;
        str2 += `<div class="card" style="width: 100%; margin-top: 3%">
          <img src="${response.data[i].photoPath}" class="card-img-top" alt="${response.data[i].photoPath}" />
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
  }
  else{
    $(".recordDate").html("显示最近十次打卡日期");
    localStorage.setItem("recordDate","显示最近十次打卡日期");
    let name = localStorage.getItem("name");
    axios
    .post("http://124.71.207.55:8081/getLatelyPostByName/" + name)
    .then(function (response) {
      var length=response.data.length>10?10:length;
      console.log("获取打卡信息", response.data);
      if (response.status == 200) {
        let str = "";
        let str2="";
        for (let i = 0; i < length; i++) {
          str += `<tr>
          <td>${response.data[i].timestring}</td>
        </tr>`;
        str2 += `<div class="card" style="width: 100%; margin-top: 3%">
          <img src="${response.data[i].photoPath}" class="card-img-top" alt="${response.data[i].photoPath}" />
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
  }
}

