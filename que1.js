const reverse=(a)=>{
    var r='';
    for(let i=a.length-1;i>=0;i--)
    r=r+a[i];
    return r
}
var str='Hello!';
console.log(reverse(str));