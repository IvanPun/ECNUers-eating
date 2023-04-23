function choose_search_way(e) {
  var flag = confirm("是否需要通过窗口搜索？");
  if (flag) {
    localStorage.setItem("choose_way", e);
    window.location.href = "window.html";
  } else {
    localStorage.setItem("choose_way", e);
    window.location.href = "foodByCanteen.html";
  }
}
