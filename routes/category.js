const  express = require('express');
const router = express.Router();
const category = require('../controllers/category')

/*
* 分类列表的路由
* */
router.get('/list',category.index)

/*
* 详情的路由
* */


router.get('/:id',category.get)

router.post('/save',category.save)

router.post('/update/:id',category.update)

router.post('/delete/:id',category.delete)

/*
* 设置导航显示
* */
router.get('/set-nav/:id',category.setNav)

module.exports=router;