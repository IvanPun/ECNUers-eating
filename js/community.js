//Get Data
$(document).ready(function(){
    var name=localStorage.getItem("name");
    if(name!=""){
        const Url='http://124.71.207.55:8081/getLatelyPostByNumber/20';
        $.ajax({
            url: Url,
            type: "POST",
            success:function(result){
                //console.log(result);
                var html="";
                var otherphoto = '';
                for(var i=0;i<result.length;i++){
                    console.log(result[i]);
                    thisData=result[i];
                    if(thisData.favor>0){
                        var like = '<i class="bi bi-hand-thumbs-up" id="'+thisData.id+'">'+thisData.favor+'</i>';
                    }else{
                        var like = '<i class="bi bi-hand-thumbs-up" id="'+thisData.id+'"></i>';
                    }


                    $.ajax({
                        url: 'http://124.71.207.55:8081/getUserByName/'+thisData.name,
                        type: 'POST',
                        success: function(data){
                            otherphoto = data.photopath;
                            if(otherphoto==null){
                                otherphoto = 'photos/default.jpg';
                            }
                            
                            return otherphoto;
                        }
                    })

                    var html = '<div class="block">'+
                    '    <img src="'+otherphoto+'" class="icon rounded-circle othericon" alt="'+thisData.name+'">'+
                    '    <div class="card">'+
                    '        <div class="card-body">'+
                    '            <p class="card-text">'+thisData.majority+'</p>'+
                    '            <img src="'+thisData.photopath+'" class="foods">'+
                    '        </div>'+
                    '        <div class="card-footer text-muted">'+
                    '        发布时间：'+thisData.timestring+
                    '            <div class="review">'+ like+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div>';
                    $("#communitymain").append(html);
                    
                }
                
                
            }
        })
    }else{
        location.href=("login.html");
    }

    

    $(document).on('click','.bi-hand-thumbs-up',function(){
        $(this).addClass("bi-hand-thumbs-up-fill");
        $(this).removeClass("bi-hand-thumbs-up");
        var get_text = $(this).text();
        if(get_text==""){
            $(this).html("1");
        }else{
            $(this).html(parseInt(get_text)+1);
        }
        $.ajax({
            url: 'http://124.71.207.55:8081/addFavorById/'+this.id+'/1',
            type: 'POST',
            
        })
    });
    
    $(document).on('click','.bi-hand-thumbs-up-fill',function(){
        $(this).addClass("bi-hand-thumbs-up");
        $(this).removeClass("bi-hand-thumbs-up-fill");
        var get_text = $(this).text();
        if(get_text=="1"){
            $(this).html("");
        }else{
            $(this).html(parseInt(get_text)-1);
        }
        $.ajax({
            url: 'http://124.71.207.55:8081/addFavorById/'+this.id+'/-1',
            type: 'POST',
            
        })
    });

});


$(document).on('click','.othericon',function(){
    var othername = $(this).attr("alt");
    location.href="others.html?othername="+othername;
})