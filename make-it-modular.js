const myModule=require('./mymodule') 
var pathDir=process.argv[2] ;
var ext=process.argv[3] ;

myModule(pathDir,ext,(err,list)=>{
    if(err) {
        console.error('There is an error !!'+err);
    }
    list.forEach(el=>console.log(el)) ;
}) ;