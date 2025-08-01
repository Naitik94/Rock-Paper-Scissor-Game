/* 1.
let num = prompt("Enter the number : ");
if (num % 5 == 0) {
    console.log("number is dividable by 5")
} else {
    console.log("number is not dividable by 5")
}
    */
// 2. Grade based system 
/*
let scores = prompt("enter your scores");

if (scores >= 90 && scores <= 100) {
    console.log(" GRADE A ")
} else if (scores >= 80 && scores <= 89){
    console.log(" GRADE B")
} else if (scores >= 70 && scores <= 79) {
    console.log("GRADE C")
} else if (scores >= 60 && score <= 69){
    console.log("GRADE D ")
}else{
    console.log("FAIL")
}
    */

    // array practice
   /*
    1.
    let marks = [85,97,44,37,76,60]
    let sum = 0;
    for(i of  marks ){
        sum += i;
    }
    console.log( sum )
    console.log ( " the avg of marks = " , (sum/marks.length))

    */

    /*
   let prices = [250,645,300,900,50];
   console.log(prices.length)

   for ( let i = 0 ; i< prices.length ; i++){
    let offers = prices[i] / 10;
    prices[i] -= offers ;
    
   }console.log(prices);
   */

   // functions
    // Arrow functions 
    /*
   
   const arrowMulti= (a,b) => {
    return a*b ;
   }

   arrowMulti(3,2)
   console.log(arrowMulti)

   

   function countVowel(str){
    let count = 0 ;

    for (const val of str) {
        console.log(val);
        if (val == "a" || val === "e" || val === "i" || val === "o" || val === "u" ) {
            count++;
        }
    }
    console.log(`The number of vowels in ${str} is ${count} `);
   }
    */

//    for each loop
/*
let nums = [1,2,3,4,5];


let sqr = (num) => {
console.log("the square of is", (num*num))
}

nums.forEach(sqr);
   */
/*
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from apna college"
*/
/*
let divs = document.querySelectorAll(".box");
console.log(divs)
*/

let modebtn = document.querySelector("#mode");

modebtn.addEventListener("click", () => {
    console.log("you are trying to change mode")
})