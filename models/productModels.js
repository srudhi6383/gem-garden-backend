const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    src1:{type:String, required:true},
    src2: {type:String, required:true},
    tag: {type:String, required:true},
    currentprice: {type:String, required:true},
    originalprice: {type:String, required:true},
    name: {type:String, required:true},
    material: {trpe:String, required:true},
    video: {type:String, required:true},
    src3: {type:String, required:true},
    userId: {type:String, required:true},
    

})

const productsModel = mongoose.model("product", productsSchema)

module.exports= {productsModel}