//Sorted in Descending order if ascending to be done then the arr[j].lenght<arr[j+1].length would change to >
var arr=['Pro', 'Throw', 'Grow'];var temp;
for (let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length-i-1;j++)
    {
        if(arr[j].length<arr[j+1].length)
        {
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);