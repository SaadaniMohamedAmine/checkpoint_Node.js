var fs=require('fs') ;
var path=require('path') ;
var filter=(pathDir,ext,callback)=>{
    fs.readdir(pathDir,(err,list)=>{
        if(err) {
            return callback(err) ;
        }
        else {
            var list=list.filter(el=>{
                return path.extname(el)==='.'+ext ;
            }) 
            callback(null,list) ;
        }
    })
}
module.exports=filter ;