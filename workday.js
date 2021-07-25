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


//timeList and timeId appends the data 
for (let i = 0; i < timeList.length; i++) {
    let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    let createTime = $("<div class='hour col-1'>");

    // create the textarea
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", timeList[i]);




        
        //create the buttons
        let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

        //append the created row to the container
        createContainer.append(createRow);
        //create timeList and appends rows 1-8 (9am -5pm)
        createTime.text(timeList[i]);
        createRow.append(createTime);

        // create textarea where user input content
        createRow.append(createTextarea);

        // create buttons from 9am to 5pm
        createButton.text();
        createRow.append(createButton);
        }
    
         // call localStorage Function
    localStorageFunction();

    //store the data from textarea into localStorage
    function localStorageFunction() {
    
        for (let index = 0; index < numbers.length; index++) {
            $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
        }
    }
    
    //save stored data entered into the textarea
    $("button").on("click", function (event) {
        event.preventDefault();
    
        for (let index = 0; index < numbers.length; index++) {
            localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
        }
    });
    
    // this will color the teaxtarea based on the time
    // grey equals past the hour
    // red equals current hour
    // green eqauls future hours
    function updateHour() {
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split(" ")[0]);
    
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    //calls function updateHour
    updateHour();
