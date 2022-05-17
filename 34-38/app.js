// question 1

// function currentTime(){
//     let date = new Date()
//     document.write(date)
// }

// currentTime()










// question 2

// function greet(){
//     let fname = prompt("enter first name");
//     let lname = prompt("enter last name");

//     let gr = fname+" "+lname;
//     alert("welcome "+gr)
// }

// greet()















// question 3 

// function sum(){
//     let fval = +prompt("enter first number");
//     let lval = +prompt("enter last last");

// let a = console.log(fval+lval)

//     return a;
    
// }
// sum()












// question 4

// document.write("<h1> Calculator </h1>"+"<br"+"<br>"+"<br>");

// let num1 = +prompt("Enter Number 1");
// let opt = prompt("Enter Operator");
// let num2 = +prompt("Enter Number 2");
// function calculator() {
//     if (opt == "+") {
//         return document.write(num1 + num2 + "<br>")
//     }
//     else if (opt == "-") {
//         return document.write(num1 - num2 + "<br>")
//     }
//     else if (opt == "/") {
//         return document.write(num1 / num2 + "<br>")
//     }
//     else if (opt == "*") {
//         return document.write(num1 * num2 + "<br>")
//     }
//     else {
//         alert("Enter Correct number or Operator")
//     }
// }
// calculator();















// question 5


// let num = +prompt("Enter Number to square Your Value")
// function sqr() {
//     return num * num
// }
// let sqr = sqr();
// document.write("Square number:" + " " + sqr)







// question 6


// function factorial(){
//     num = +prompt("Enter number to find factorial")
//     document.write("factorial number "+num+"<br>")
//     fac = 1
//     for(num;num>1;num--){
//         fac = fac*num
//     }
//     return fac
// }
// let a = factorial()
// document.write("factorial number value "+a)

















// question 7



// function counting(){
// let inpNum1 = +prompt("enter first number")
// let inpNum2 = +prompt("enter second number")

// for(let i = inpNum1; i<=inpNum2;i++){
//     document.write(i+"<br>")
// }
// }

// counting();















// question 8


// let per = +prompt("enter prprndicular value")
// let base = +prompt("enter base value")

// function rightTriange(){
//     let hyp =  (base*base) + (per*per)
//     function sqr(){
// let sq = hyp*hyp
// document.write("Hypotaneus of Right Triangle is:"+" "+sq)
//     }
// sqr()
// }
// rightTriange()























// question 9

// let width = +prompt("Enter width of rectangle")
// let height = +prompt("Enter height of rectangle")

// function areaRectangle(width,height){
//     a = width*height
//     document.write("The area of rectangle is:"+" "+a)
// }

// areaRectangle(width,height)

























// question 10

// let inpVal = prompt("enter word to see if this is palindrme or not!");

// function getPalindrome(){
//     let val = inpVal.split("").reverse().join("")
//     if(val === inpVal){
// console.log(val+" "+"is palindrome")
//     }else{
//         console.log(val+" "+"is not palindrome")
//     }
// }
// getPalindrome()























// question 11

// function wordUp(str) {
//     var arr = str.split(" ");
//     var result = arr.map(
//         function (val) {
//             return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
//         }
//     )
//     return result;
// }

// var string = wordUp("the quick brown fox").join(" ");
// document.write("Example Output:" + " " + "the quick brown fox" + "<br>")
// document.write("Expected Output:" + " " + string + "<br><br><br>")

























// question 12

// function longestWord(str){
//     let s = str.split(" ");
//     let word = "";
//     for(i=0;i<s.length;i++){
//         let longWord = s[i];
//         if(longWord.length > word.length){
//             word = longWord;
            
//         }
//     }
//     return word
// }
// let string =  longestWord("Web Development Tutorial")
// document.write("Example String:" + " " + "Web Development Tutorial" + "<br>")
// document.write("EXPECTED OUTPUT : "+string)



























// question 13

// function char_count(str, letter){
//  let letter_Count = 0;
//  for (let i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// let l = char_count('JSResourceS.com', 'o');
// document.write("Example Arguments: "+'JSResourceS.com'+" "+ ', o'+"<br>")
// document.write("Occurence count: "+l)
























// question 14
// let r = +prompt("Enter radius of circle to calculate Circumferences")
// function calcCircumference(){
    
//     let circle = 2*3.14*r
    
// document.write("The Circumferences is:" +" "+circle+"<br>")
// return circle;
// }
// calcCircumference();


// let r2 = +prompt("Enter radius of circle to calculate Area")
// function calcArea(){
//     let area = 3.14*r2*r2
//     document.write("The Area is:" +" "+area)
//     return area;
// }

// calcArea()
