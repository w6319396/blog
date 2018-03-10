const  express = require('express');
const router = express.Router();
const personalarticle = require('../controllers/personalarticle')

/*
* 分类列表的路由
* */
router.get('/article',personalarticle.index)

/*
* 详情的路由
* */
// router.get('/:id',personalarticle.get)
//
// router.post('/save',personalarticle.save)
//
// router.post('/update/:id',personalarticle.update)
//
// router.post('/delete/:id',personalarticle.delete)

/*
* 设置导航显示
* */
module.exports=router;