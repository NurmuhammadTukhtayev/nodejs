const Product=require('../models/Products')
exports.getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postPostAdd=(req, res)=>{
    const products=new Product(req.body.title)
    products.save()
    res.redirect('/')
}

exports.getProduct=(req, res)=>{
    Product.fetchAll((products)=>{
        res.render('shop', {
            prods:products,
            pageTitle:'Shop',
            path:'/',
            hasProduct:products.length>0,
            activeShop:true,
            productCss:true
        })
    })

}