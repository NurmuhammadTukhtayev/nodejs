const express=require('express')
const router=express.Router()
const {getAddProduct, postPostAdd}=require('../controllers/products')

router.get('/add-product', getAddProduct)

router.post('/add-product', postPostAdd)

exports.routes=router