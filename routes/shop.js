const express=require('express')
const router=express()
const {getProduct}=require('../controllers/products')

router.get('/', getProduct)

module.exports=router