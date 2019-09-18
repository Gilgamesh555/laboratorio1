function adjacentsElementsProduct(n){
var a=0,b=0,c=0;
var i=0;
do{
if(c<(n[i]*n[i+1])){
a=n[i];
b=n[i+1];
c=a*b;
}
i++;
}while(i<n.lenght)

return  c;
}
console.log(n=[3,6,-2,-5,7,3])
