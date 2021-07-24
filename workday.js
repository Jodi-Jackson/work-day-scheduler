function easyCal(){
    $(document).ready (function() {
        let momentVar=moment().format('dddd, MMMM Do, YYYY h:mm a');
        //set workday hours
        let workDayHours = ["8 am", '9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm',
        '4 pm'," 5 pm"]
        //current day is displayed at the top of the calendar
        function currentDay() {
            let currentDay = $('#currentDay').text(momentVar);
            return currentDay;
        }
        currentDay();
        let row;
        let timeColumn;
        //time blocks for standard business hours
        for (i=0; i<workDayHours.length; i++){
        let row = $('<div>').addClass('row');
        let timeColumn = $("<text-area>").text(workDayHours[i]).addClass("hour");
        let inputColumn = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
        saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");

        $(row).append(timeColumn).append(inputColumn).append(saveBtn);

        $("#calendar").append(row);
        
        }

                
        //add id's to input fields
        function addidToInput() {
            let inputId = document.getElementsByClassName("toDo-input");
            let length = inputId.length;
            for (i=0; i<length; i++);
            inputId[i].id="input-field"+(i+1);

        }
     });
    
        addidToInput();

        //add id's to save buttons

        function addIdToSaveBtn() {

            let saveBtnId = document.getElementsByClassName("saveBtn");
            
            let length = saveBtnId.length;
            
            for (i = 0; i < length; i++) {
            
            saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
            } 
        }

        //click event for save buttons
        //if else for past present and future

    }

 easyCal()
