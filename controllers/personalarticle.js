const ArticleModel = require('../models/article')
const moment = require('moment')

const personalArticle = {
    // 获取文章列表
    index:(req,res,next)=>{
    let key = req.query.key;
    let page = req.query.page?req.query.page:1;
    let jing = req.query.jing;
    let limit = 3;
    let totalpage=0;
    let count=0;
    let where = {};

        //初始化正则
        let regex = new RegExp(key);
    if(key){
        where.title={$regex:regex}
    }
    if(jing){
        where.is_jing=1;
    }


    ArticleModel.find(where).count().then(doc=>{
        count = doc;
        totalpage = Math.ceil(count/limit);
        ArticleModel.find(where).skip((page-1)*limit).limit(limit).sort({create_at:"desc"}).then(doc=>{
            let list = doc;
            let newlist = [];
            for (var i = 0;i < list.length;i++){
                let article = list[i]
                article = article.toJSON();
                article.f_create_at = moment(article.create_at).format("YYYY-MM-DD")
                newlist.push(article);

            }
            res.json({
                status:1,
                result:newlist,
                page:page,
                count:count,
                totalPage:totalpage,
                limit:limit
            })
        }).catch(err=>{
            res.json({
                status:0,
                msg:'获取失败'
            })
        })
    });


    },

    // get:(req,res,next)=>{
    //
    // },
    // save:(req,res,next)=>{
    //
    // },
    // update:(req,res,next)=>{
    //
    // },
    // delete:(req,res,next)=>{
    //
    // }
}


module.exports = personalArticle;