//Get Data
$(document).ready(function(){
    var name=localStorage.getItem("name");
    if(name!=""){
        const Url='http://124.71.207.55:8081/getLatelyPostByNumber/20';
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                console.log(result);
                var html="";
                for(var i=0;i<result.length;i++){
                    console.log(result[i]);
                    thisData=result[i];
                    var time = thisData.time;
                    html += '<div class="block">'+
                            '    <a href="others.html"><img src="photos/test-person-icon.jpg" class="icon rounded-circle"></a>'+
                            '    <div class="card">'+
                            '        <div class="card-body">'+
                            '            <p class="card-text">'+thisData.majority+'</p>'+
                            '            <img src="'+thisData.photopath+'" class="foods">'+
                            '        </div>'+
                            '        <div class="card-footer text-muted">'+
                            '        发布时间：'+thisData.time+
                            '            <div class="review">'+
                            '                <img src="icons/like.svg" class="like">'+
                            '                <img src="icons/commend.svg" class="commend">'+
                            '            </div>'+
                            '        </div>'+
                            '    </div>'+
                            '</div>';
                }
                
                $("#communitymain").append(html);
            }
        })
    }else{
        location.href=("login.html");
    }
})