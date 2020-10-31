var fs=require('fs') ;
fs.readFile(process.argv[2],(err,data)=>{
    if(err) {
        console.log(err) ;
    }
    else {
        var n=data.toString().split('\n').length-1 ;
        console.log(n) ;
    }
})