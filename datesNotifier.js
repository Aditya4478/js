(function() {
    function checkDatesAvailability() {
        let obj = document.querySelectorAll('.ui-datepicker-month');
        
        if (obj && obj[0] && obj[0][10] && obj[0][10]["attributes"] && obj[0][10]["attributes"]["1"]) {
            let check = obj[0][10]["attributes"]["1"].value;
            
            if(check === 'selected') {
                let lengthh = document.querySelectorAll('.greenday').length;
                
                if (lengthh !== 0) {
                    console.log("Dates available");

                    let audio = new Audio('https://aditya4478.github.io/js/music.mp3');
                    audio.play();

                    // Stop the loop since we found available dates
                    clearInterval(intervalID);
                } else {
                    console.log("No Dates");
                }
            }
        } else {
            console.log("Cannot find the desired object or its attributes.");
        }
    }

    // Run the function every 3 seconds and store the interval ID
    let intervalID = setInterval(checkDatesAvailability, 3000);

})();
