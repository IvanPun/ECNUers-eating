function choose_search_way(e) {
  var flag = confirm("是否需要通过窗口搜索？");
  if (flag) {
    localStorage.setItem("choose_way", e);
    window.location.href = "hedong-window.html";
  } else {
    window.location.href = "food.html";
  }
}
function  fn(){
  var name = document.querySelector('#nameid')
  console.log(123)
  name.innerHTML = localStorage.getItem('name')
}
fn()

