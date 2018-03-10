const CategoryModel = require('../models/category')

/*
* 分类控制器
* */

const Category ={
    //获取列表
    index:(req,res,next)=>{
        //    request
        //    req.body.name 获取post参数
        //    req.query.name 获取get参数(?之后)
        //    req.params.name 获取路由参数(路由中：定义的动态参数)

        //    response 处理响应对象
        //    res.send() 发送一个字符串
        //    res.json() 发送一个json
        //    res.render() 渲染模板

        // next   调用下一个中间件
        CategoryModel.find().populate('pid').sort({'sort':'desc'}).then(doc=>{
            res.json({
                status:1,
                result:doc
            });
        }).catch(err =>{
            res.json({
                status:0,
                msg:'获取失败！'
            })
        })

    },
    //获取详情
    get:(req,res,next)=>{
        let id =req.params.id
        CategoryModel.findOne({_id:id}).then(doc =>{
            res.json({
                status:1,
                result:doc
            })
        }).catch(err =>{
            res.json({
                status:0,
                result:'获取失败'
            })
        })
    },
    //保存
    save:(req,res,next)=>{
        let name = req.body.name;
        let sort = req.body.sort;
        let path = req.body.path;
        let template = req.body.template;
        let is_nav = req.body.is_nav;
        let pid = req.body.pid;

        //代码添加数据
        // name ='测试';
        // path ='/text';
        // sort = 100;
        // is_nav=1;
        // template='';
        // pid =null;

        let c = new CategoryModel({
            name:name,
            path:path,
            sort:sort,
            template:template,
            is_nav:is_nav,
            pid:pid
        });
        c.save().then(doc => {
            res.json({
                status: 1,
                msg: '保存成功！'
            })
        }).catch(err => {
            console.log(err)
            res.json({
                status: 0,
                msg: '保存失败！'
            })
        })
    },
    //修改更新
    update:(req,res,next)=>{
        let id = req.params.id;
        let name = req.body.name;
        let sort = req.body.sort;
        let path = req.body.path;
        let template = req.body.template;
        let is_nav = req.body.is_nav;
        let pid = req.body.pid;

        CategoryModel.update({_id:id},{
            name:name,
            path:path,
            sort:sort,
            template:template,
            is_nav:is_nav,
            pid:pid
        }).then(doc=>{
            res.json({
                status:1,
                msg:'修改成功'
            })
        }).catch(err=>{
            res.json({
                status:0,
                msg:'修改失败'
            })
        })
    },
//    删除
    delete:(req,res,next)=>{
        let id = req.params.id;
        CategoryModel.remove({_id:id}).then(doc=>{
            res.json({
                status:1,
                msg:'删除成功'
            })
        }).catch(err=>{
            res.json({
                status:0,
                msg:'删除失败'
            })
        })

    },
    setNav:(req,res,next)=>{
        let  id= req.params.id;
        let  is_nav = req.query.is_nav;
        CategoryModel.update({_id:id},{is_nav:is_nav}).then(doc =>{
            res.json({
                status:1,
                msg:'设置成功'
            })
        }).catch(err =>{
            res.json({
                status:0,
                msg:'设置失败'
            })
        })

    }
}

module.exports = Category;