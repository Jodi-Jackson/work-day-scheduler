// no delay time/date upon page refresh
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// display the current date and time top of page
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

//create a container   
const createContainer = $(".container");
//select all of the buttons
const saveButton = document.querySelectorAll("button");
//Array time and numbers
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            
