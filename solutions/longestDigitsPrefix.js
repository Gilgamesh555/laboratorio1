function longestDigitsPrefix(s){
  var ans=0;
   for(var i=0;i<=s.length();i++){
       var len=0;
       if(s[i] >= '0' && s[i] <= '9'){
       for(var j=i;j<=s.length();j++){
         if(s[i] >= '0' && s[i] <= '9')continue;
         break;
       }
     }
   }
  return ans;
}
module.exports = longestDigitsPrefix;
