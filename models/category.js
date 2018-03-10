/*
* 控制器模型
* */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:String,
    path:String,
    sort:{
        type:Number,
        default:100
    },
    pid:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    template:{
        type:String,
        default:''
    },
    is_nav:{
        type:Number,
        default:0
    },
    is_sys:{
        type:Number,
        default:0
    },
    create_at:{
        type:Date,
        default:Date.now()
    },
    updata_at:{
        type:Date,
        default:Date.now()
    },
    delete_at:{
        type:Date,
        default:''
    }

});


const Category = mongoose.model('Category',CategorySchema);
module.exports = Category;