exports.errorRoute=(req, res)=>{
    res.status(404).render('404', {pageTitle:'Page Not found', path:'/er'})
}