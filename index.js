const express=require('express')
const path=require('path')
const app=express()

//setting
app.set('views', 'views')
app.set('view engine', 'ejs')

// export routes
const AdminRoute=require('./routes/admin')
const shopRoute=require('./routes/shop')
const pnf=require('./controllers/404')

//middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/admin', AdminRoute.routes)
app.use(shopRoute)

//page not found
app.use(pnf.errorRoute)

app.listen(3000, ()=>{
    console.log("Server started at http://localhost:3000")
})