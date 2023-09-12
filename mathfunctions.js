exports.findBiggestNumber=(first,second)=>{
if(first>second)
	return first;
else
	return second;
};

exports.factorial=(num)=>
{
let fact=1;
let i=1;
for(i=1;i<=num;i++)
{
	fact=fact*i;
}
return fact;
};

exports.reverse=(num)=>{
let sum=0,rem=0;
while(num>0)
{
rem=num%10;
console.log(rem);
sum=sum*10+rem;
console.log(sum);
num=Math.floor(num/10);
console.log(num);

}
return sum;
};