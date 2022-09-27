const generateRandomnum=()=>{
    return (Math.floor(Math.random() *100 +1));
}
const element=(arrE)=>{
    if(arrE>=10 && arrE<=40)
    return arrE;
    else
    return (element(generateRandomnum()));
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
