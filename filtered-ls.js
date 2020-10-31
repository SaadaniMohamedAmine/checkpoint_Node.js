var fs=require('fs') ;
var path=require('path') ;
var ext='.'+process.argv[3] ;
var pathDir=process.argv[2] ;
fs.readdir(pathDir,(err,data)=>{
    if(err) {
        console.log(err) ;
    }
    else {
         data.forEach(el=>{
             if(path.extname(el)==ext) {
                 console.log(el)
             }
         })
    }
})