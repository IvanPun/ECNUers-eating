
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
            }
    }
     return paramValue;
} 

var name = getParam('othername');

$.ajax({
    url: 'http://124.71.207.55:8081/getUserByName/'+name,
    type: 'POST',
    success: function(result){
        console.log(result);
        if(result.photopath==null){
            var photo= 'photos/default.jpg';
          }else{
            var photo = result.photopath;
          }
          if(result.signature==null){
            var signature="此人很懒，没有留下个性签名";
        }else{
            var signature=result.signature;
        }
        var html=   '<img src="'+photo+'" class="mx-auto d-block personal-icon rounded-circle" >'+
                    '<div class="card" style="width: 100%;margin-top: 5%;">'+
                    '    <ul class="list-group list-group-flush">'+
                    '      <li class="list-group-item">昵称：'+result.name+'</li>'+
                    '      <li class="list-group-item">'+signature+'</li>'+
                    '    </ul>'+
                    '</div>';
        $("#othersdata").append(html);
        
    }
})