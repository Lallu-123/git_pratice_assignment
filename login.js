//prime number;

let num=17;
let count=0;
for(let i=1;i<=num;i++){
if(num%i==0){
count++
}
}
if(count==2){
console.log("yes")
}else{
console.log("no")
}

//palindrome
let str="naman"
let bag='';
for(let i=str.length-1;i>=0;i--){
    bag+=str[i]
}
if(bag==str){
    console.log('Palindrome')
}else{
    console.log('Not a paLindrome')
}
