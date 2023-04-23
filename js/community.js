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
                    if(thisData.favor>0){
                        var like = '<i class="bi bi-hand-thumbs-up-fill">'+thisData.favor+'</i>';
                    }else{
                        var like = '<i class="bi bi-hand-thumbs-up"></i>';
                    }
                    
                    html += '<div class="block" id="'+ thisData.id +'">'+
                            '    <a href="others.html"><img src="photos/test-person-icon.jpg" class="icon rounded-circle"></a>'+
                            '    <div class="card">'+
                            '        <div class="card-body">'+
                            '            <p class="card-text">'+thisData.majority+'</p>'+
                            '            <img src="'+thisData.photopath+'" class="foods">'+
                            '        </div>'+
                            '        <div class="card-footer text-muted">'+
                            '        发布时间：'+thisData.time+
                            '            <div class="review">'+ like+
                            '            </div>'+
                            '        </div>'+
                            '    </div>'+
                            '</div>';
                }
                
                $("#communitymain").html(html);
            }
        })
    }else{
        location.href=("login.html");
    }
});

$(".block").click(function(){
    alert("working");
});

/*
$(".normal").click(function(){
    src = $(this).attr("id");
	//alert(src);
    $(this).children("i.icon").toggleClass( "fas" );
    if ($(this).children("i.icon").hasClass( "fas" )) {
        likes = "1";
    } else {
        likes = "0";
    }
    //$(this).children("i.icon").html(likes);
    
    console.log(src, likes)
    $.get( "set_likes.php?src="+src+"&likes="+likes, function( data ) {
      //alert( data);
    });
  });
});
*/