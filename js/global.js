$("#logout").click(function () {
    localStorage.setItem("name", "");
    localStorage.setItem("password", "");
    location.href=("login.html");
})