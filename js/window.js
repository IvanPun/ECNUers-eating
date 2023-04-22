$("#window-favor-order").click(function(){
    var selected=$("#window-favor-order");
    var selected_order=selected.find("option:selected");
    var selectedValue = selected_order.val();
    console.log(selectedValue);
    axios({
        method:"get",
        url:'https://754a457f.r3.cpolar.top/getDishListOrderly/price/升序/河东食堂/0',
    }).then(response=>{
        let res=response.data;
        let name=res[0].name;
        console.log(name);
        console.log(res);
    }).catch(error=>{
        console.log(error);
    })
})


function window_search(){
    var inputElem=document.getElementById("window-search");
    console.log(inputElem.value);
}
