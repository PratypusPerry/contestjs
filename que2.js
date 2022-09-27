var column=5;
var n=5;
for(let i=1;i<=n;i++)
{   var str='';
    for(let j=1;j<=column;j++)
    {   
        if(i==1 ||i==n )
        str=str+'*';
        else
        {
            if(j==1||j==column)
            str=str+'*';
            else
            str=str+' '
        }
    }
    console.log(str);
}