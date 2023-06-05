let a=[2,1,1,2]

let sum=a[0]
let sum1=sum
let flag=0
for(let i=0;i<a.length;i++)
{
    if(a[i+2]>a[i] && flag==0)
    {
        console.log(i);
        sum+=a[i+2]
        sum1=sum
        i++
    }
    else
    {
        let check=a[i+2]
        sum1=sum1+a[i+2]
        for(let j=i+3;j<a.length;j++){
            if(a[j]<=check)
            {
                sum1+=a[j]
                if(j==a.length-1)flag=1
            
            }else{
                sum+=a[j]
                console.log(j);
                i=j-1
            if(j==a.length-1){flag=1}

                break
            }
            if(j==a.length-1)flag=1
        }
    }
    
}
if(sum>sum1)
    {
       console.log(sum); 
    }else{
        console.log(sum1);
    }