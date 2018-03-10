$(function () {
    getArticleList();
})

    var page=1;
    var key = "";
function getArticleList() {

    $.get('/personal/article',{page:page,key:key},function (data) {
                if(data.status ==1) {
                    var html = "";
                    var articleList = data.result;
                    for (var i = 0; i < articleList.length; i++) {
                        html += '<li class="col-md-4">';
                        html += ' <div class="excerpt-minic">';
                        html += ' <div class="manage-list-box1">';
                        html += '<img src="/uploads/' + articleList[i].img + '" class="img-responsive" alt="" title="">';
                        html += '<h3><a href="#">' + articleList[i].title + '</a></h3>';
                        html += '<p>' + articleList[i].content + '</p>';
                        html += '</div>';
                        html += '<div class="cat">';
                        html += '<span><a href="#">' + articleList[i].f_create_at + '</a></span>';
                        html += '<span class="fr"><i class="glyphicon glyphicon-pencil"></i><a onclick="pubboxshow()">编辑</a></span> ';
                        html += '<span class="fr"><i class="glyphicon glyphicon-trash"></i><a href="#">删除</a></span> </div> ';
                        html += '</div> ';
                        html += '</li> ';
                    }
                    $("#articleList").html(html)

                    // 总页数
                    var totalpage = data.totalPage;

                    //总条数
                    var count = data.count;
                    //当前页码
                    page = data.page;
                    //每页条数
                    var limit = data.limit;
                    var pagehtml = "";

                    $("#pagelist").html('');
                    if (totalpage > 1) {
                        if (page > 1) {
                            pagehtml += '<li><a href="javascript:;" onclick="setPage(parseInt(page)-1)">上一页</a></li>';
                        }

                        for (var i = 1; i <= totalpage; i++) {
                            if (i == page) {
                                pagehtml += '<li class="active"><a href="javascript:;">' + i + '</a></li>';
                            } else {
                                pagehtml += '<li><a href="javascript:;" onclick="setPage(' + i + ')">' + i + '</a></li>';
                            }

                        }
                        if (page < totalpage) {
                            pagehtml += '<li><a href="javascript:;" onclick="setPage(parseInt(page)+1)">下一页</a></li>';
                        }

                        $("#pagelist").html(pagehtml);


                    }
                }


    })
}

 // 设置分页
function setPage(p) {
    page =p;
    getArticleList();
}

function setKey() {
    key=$("#key").val();
    getArticleList();
}
function editArticle() {
    
}

function updateArticle() {
    
}

function deleteArticle() {
    
}