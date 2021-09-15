const path=require('path')
const fs=require('fs')
module.exports=class Products{
    constructor(t) {
        this.title=t
    }

    save=()=>{
        const p=path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        )
        fs.readFile(p, (err, data)=>{
            let products=[]
            if(!err)
                products=JSON.stringify(data)
            fs.writeFile(p, JSON.stringify(products), err1 => console.log(err1))
        })
    }

    static fetchAll(cb){
        const p=path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        )
        fs.readFile(p, (err, data)=>{
            if(err)
                 cb([])
            cb(JSON.stringify(data))
        })
    }
}