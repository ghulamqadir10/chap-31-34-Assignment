// Question no 1
document.write("<h2>Current Date and Time</h2>")
var date = new Date();
document.write("<h4>Current date is: ", date, "</h4>")

// Question 2
document.write("<h2>inform of Current Month</h2>")

var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.write("<h4>Current Month: ", months[date.getMonth()],"</h4>");


// Question 3
document.write("<h2> Inform Current Day</h2>")
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var day = days[date.getDay()];
document.write("<h4> Current Day:", day, "</h4>");

// Question no 4
document.write("<h2>informing funday and normal day</h2>")
switch (day) {     //(expression)
    case "Sat":      //value if matches with expresssion code will execute
    case "Sun":
        document.write("<h4>Its Fun Day</h4>")     // code to Execute
        break;
    default:
        document.write("<h4>Its Not Fun Day</h4>")

}

// Another Method using if statment;
// if(day==="Sun"|| day === "Sat"){
//     document.write("Its Fun Day")
// }else{
//     document.write("Its Not Fun Day")
// }

// Question 5
document.write("<h2>Days of the month</h2>")
var dates = date.getDate()
if (dates < 16) {
    document.write("<h4>First fifteen days of the month</h4>")
} else {
    document.write("<h4>last days of the month</h4>")
}

//Question 6
document.write("<h2>seconds and minutes from 1970</h2>")
document.write("<h4>Current Date is: ", date)
var milliseconds = Math.floor(date.getTime());
document.write("<br>Milli seconds since january 1, 1970 is :", milliseconds)
var milli_to_minutes = Math.floor(milliseconds / (1000 * 60));
document.write("<br>Minutes since january 1, 1970 : ", milli_to_minutes, "</h4>");

// Question 7
document.write("<h2> Alert Am And Pm</h2>")
var hours = (date.getHours());
// document.write(hours)
if (hours % 12) {
    hours = hours
} else {
    hours = hours
}
if (hours >= 12) {
    alert("Its PM");
    document.write("<h4>Current Time Its PM</h4>");
} else {
    alert("Its AM");
    document.write("<h4> Current Time Its PM </h4>");
}

//Question  no 8
document.write("<h2>Later Date</h2>")
var laterDate = new Date("Dec 31, 2020");
document.write("<h4>",laterDate,"</h4>");

//Question no 9
document.write("<h2>Days From 1st Ramadan</h2>")
var ramadan_date = new Date("march 11, 2024");
var ramadan_milli = ramadan_date.getTime();
var current_milli = date.getTime();    ////ya upr sa hi uthaya hua hai upe current date object bna hua hai
var diff = current_milli - ramadan_milli;
var ramadan_days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write("<h4>",ramadan_days, "days have passed since 1st ramadan ", date.getFullYear(), "</h4>");

// Question no 10
document.write("<h2>Seconds from reference year</h2>")
var reference_date = new Date("Dec 31, 2023");
var reference_milli = reference_date.getTime();
var current_milli = date.getTime();  //ya upr sa hi uthaya hua hai upe current date object bna hua hai
var diff = current_milli - reference_milli;
var reference_seconds = Math.floor(diff / (1000 * 60))
document.write("<h4>",reference_seconds, "seconds had passed since beginning of ", reference_date.getFullYear(), "</h4>");


// Question no 11  yeh chalana hai
document.write("<h2>Current And 1 Hour Earlier Time</h2>")
var date2 = new Date();
var oneHourEarlier = new Date(date2.getTime() - (60 * 60 * 1000));
// document.write(date)
document.write("<h4>Current date and time is:", date2, " <br> one hour ago, it was", oneHourEarlier, "</h4>")


//Another method;
// var set = date2.setHours(date2.getHours() - 1)
// document.write(date2)

//Another method
// document.write(days[date2.getDay()],months[date2.getMonth()],date2.getDate(),date2.getFullYear(),date2.getHours(),date2.getMinutes(),date2.getSeconds()," GMT+0500 (Pakistan Standard Time)")
// if(date2.getDate() <= 9){
// date2.getDate=
// }

//Question no 12   question 11 is same and same diffferent methods we can apply
document.write("<h2> Date And Time Current And Before 100 Years Back</h2>")
var set_reset = date2.setFullYear(date2.getFullYear() - 100)
alert("Current date and time " + date + "(Before 100 years " + date2)
document.write("<h4>Current date and time " + date, "<br>", " Before 100 years " + date2 + " </h4>")
// alert("Before 100 years " + date2)

// Question no 13
document.write("<h2> Calculate Birth Year</h2>")
let input_age = prompt("input your age in years format like 21,22,23")
let about_age = date.getFullYear() - input_age;
document.write("<h4>Age of candidate: ",input_age,"<br>")
document.write(" Birth Year is: ", about_age, "</h4>");
// let age_of_person_milli = about_age.getTime();
// let current_date_milli = date.getTime();
// var current_year = date.getFullYear();
// var candidate_year = about_age.getFullYear()
// // document.write(candidate_year);
// var difference=current_year-candidate_year;
// document.write(difference)
// let difference=
// document.write(current_date_milli)



// Questuion no 14
document.write("<h2> K-Electric Bill</h2>")
let customer_name = prompt("Input a name for K-Electric Bill").toUpperCase();
document.write("<h4>Customer Name: ", customer_name, "<br>");
let current_month = months[date.getMonth()];
document.write("Current Month: ", current_month, "<br>")
let charges_pr_unit = 23;
let min = 40;
let max = 240;
let no_of_units = Math.floor(Math.random() * (300 - 40 + 1) + 40);
document.write("Charges Per Unit is: ", no_of_units, "<br>");
let net_amount_payable = no_of_units * charges_pr_unit;
document.write("Net Amount Payable Within Due Date: ", net_amount_payable, "<br>");
let late_payment_subcharge = 340
document.write("Late payment Charges: ", late_payment_subcharge, "<br>");
let gross_payment_subcharge = late_payment_subcharge + net_amount_payable;
document.write("Amount Payable After Due Date: ", gross_payment_subcharge, "</h4>");