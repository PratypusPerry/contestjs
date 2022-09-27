var names=['Tulsi','Subhradeep','Suvam','Akash'];
var streams=['CSE','ECE','CSE','IT'];
var result=[];
for(let i=0;i<names.length && i<streams.length;i++)
{
    result[i]={
        stream:streams[i],
        name:names[i]
    }
}
console.log(result);