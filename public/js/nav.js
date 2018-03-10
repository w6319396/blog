$(document).ready(function () {
        $.get('/nav-view',function (data) {
                var categorylist = data.result;
                var html='';
                for (var i =0 ;i<categorylist.length;i++){
                    if(categorylist[i].path ==window.location.pathname )
                    {
                        html+='<li class="active" ><a  href="'+categorylist[i].path+'">'+categorylist[i].name+'</a></li>'
                    }else {
                        html+='<li ><a  href="'+categorylist[i].path+'">'+categorylist[i].name+'</a></li>'
                    }
                }
                $("#navcategory").html(html);

        })
})