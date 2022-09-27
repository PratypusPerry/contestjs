const generateRandomnum=()=>{
    return (Math.floor(Math.random() *31)+10);
}
const element=(arrE)=>{
    return arrE;
}
const generateArray=()=>{
var a=[]
var length=8;
while(a.length<length)
{
    if(a.indexOf(element(generateRandomnum()))===-1)
    {
        a.push(element(generateRandomnum()));
    }
}
return a;
}
console.log(generateArray());
