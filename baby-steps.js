var arg=process.argv ;
var sum=arg.slice(2).reduce((acc,elt)=>acc+Number(elt),0) ;
console.log(sum) ;