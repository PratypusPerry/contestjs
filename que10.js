//A map() function is used to iterate thorught an array and modify array elements in order to return a new array of elements
var arr=[2,3,4,5,6]
console.log(arr.map((e)=>{
if((e*e)<20)
return e*e;
else
return 'not required'
}))
//Ternary operators are an easy way of writting conditional statements in a programming languaged in the if...else sequence in one line
var b=-1;
var a=(b>=0)?((b*10==100)?'century':'not century'):'negetive';
console.log(a);