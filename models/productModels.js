const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    src1:{type:String, required:true},
    src2: {type:String, required:true},
    tag: {type:String, required:true},
    currentprice: {type:String, required:true},
    originalprice: {type:String, required:true},
    name: {type:String, required:true},
    material: {type:String, required:true},
    video: {type:String, required:true},
    src3: {type:String, required:true},
    userId: {type:String, required:true},
    

})

const CartProductsSchema = mongoose.Schema({
    src1:{type:String},
    src2: {type:String},
    tag: {type:String},
    currentprice: {type:String},
    originalprice: {type:String},
    name: {type:String},
    material: {type:String},
    video: {type:String},
    src3: {type:String},
    userId: {type:String},
    
})

const productsModel = mongoose.model("product", productsSchema)
const CartProductsModel = mongoose.model("cart", CartProductsSchema)


module.exports= {productsModel, CartProductsModel}