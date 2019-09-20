function checkPalindrome(inputString) {
    var leni = inputString.split("");
    for(i=0; i<leni.length/2 ; i++){
        if(leni[i] != leni[leni.length-i-1])
            return false;
    }
    return true;
}
module.exports = checkPalindrome;
