// question 1

// let now = new Date();
// document.write(now)














// question 2



// let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// let date = new Date();
// let name = month[date.getMonth()];

// alert("current month "+name)











// question 3


// let days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"]

// let date = new Date();
// alert(days["today is "+date.getDay()])











// question 4

// let date = new Date();

// if(date.getDay()==0 || date.getDay()==6){
//     document.write("It's fun day")
// }else{
//     alert("wrong code")
// }















// question 5

// let date = new Date();
// if(date.getDate()<= 15){
//     document.write("“First fifteen days of the month”")
// }else{
//     document.write("“Last fifteen days of the month”")

// }












// question 6 

// let date = new Date();


// let t = date.getTime()


// let g = Math.floor( t / (1000 * 60))

// document.write("current date " +date+"<br>")
// document.write("ellipsed milliseconds since midnight, Jan. 1, 1970 " +t + "<br>")

// document.write("ellipsed minutes since midnight, Jan. 1, 1970 " +g)







// question 7

// let date = new Date();

// let m = date.getHours();

// if(m ==0 || m <=12){
//     document.write("Its AM")
// }else{
//     document.write("Its PM")
// }











// question 8
// let laterDate = new Date("Dec 31, 2020");

// document.write("Later date: "+laterDate)











// question 9


// let date = new Date();
// let dateMili = date.getTime()
// let RamadanDate = new Date("june 18 2015");
// let ramadanMili = RamadanDate.getTime()
// let ans =  dateMili - ramadanMili;

// let answer = Math.floor( ans / (1000 *60 *60  *24))

// document.write(answer + " days passed since 1st ramadan 2015")














// question 10


// let date = new Date();
// let dateMili = date.getTime()
// let refDate = new Date("january 1 2015");
// document.write(refDate + "<br>")
// let refMili = refDate.getTime()
// let ans =  dateMili - refMili;

// let answer = Math.floor( ans / (1000 *60))

// document.write(answer + " seconds have passed since beginning of 2015")














// question 11

// let date = new Date();
// date.setHours(01,23 ,48)

// document.write(date+ "<br>")

// let dateAgain = new Date()

// dateAgain.setHours(00,23 ,48)

// document.write(dateAgain)












// question 12


// let date = new Date();

// document.write("Current Date: "+date+"<br>")

// let dateAgain = new Date(1922,04,15)

// document.write("100 years before: "+dateAgain)













// question 13


    // let enter = new Date(prompt("enter age"));
    // let dateMilli = enter.getTime();
    // let toDay = new Date();
    // let toDayMilli = toDay.getTime();
    // let Age = toDayMilli - dateMilli;
    // let maths = Math.floor(Age / (1000 * 60 * 60 * 24 * 30 * 12));


    
    // document.write("your age is " +maths+"<br>")
    
    // document.write("oyur birthday year is "+enter.getFullYear())













    // question 14

    // let customerName  = prompt("enter your name");
    // let month = new Date().getMonth();

    // let numberUnits = 410;
    // let chargesUnits = 16;


    // let pay = numberUnits*chargesUnits
    // let late = 350
    // let gross = pay + late

    // let amountUnits = 410;
    // document.write("Customer: "+customerName+"<br>")
    // document.write("Month: "+(month+1)+"<br>")
    // document.write("Number of units: "+numberUnits+"<br>")
    // document.write("charges per unit: "+chargesUnits+"<br>")
    // document.write("Net amount Payable: "+pay+"<br>")
    // document.write("Late amount payable "+late+"<br>")
    // document.write("Gross amount payable "+gross+"<br>")