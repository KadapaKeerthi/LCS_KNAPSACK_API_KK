export const getlcs = (a,b)=>
{
   
    let n = a.length;
    let m = b.length;
    return LCS(a,b,n,m);
}

function LCS(str1,str2,n, m)
{
    if(n==0||m==0)
        return 0;
    if(str1[n-1]==str2[m-1])
    {
        return 1+LCS(str1,str2,n-1,m-1);
    }
    return Math.max(LCS(str1,str2,n-1,m),LCS(str1,str2,n,m-1));
}
