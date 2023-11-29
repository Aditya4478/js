function checkDatesAvailability() {
    let obj = document.querySelectorAll('.ui-datepicker-month');
    
    if (obj && obj[0] && obj[0][10] && obj[0][10]["attributes"] && obj[0][10]["attributes"]["1"]) {
        let check = obj[0][10]["attributes"]["1"].value;
        
        if(check === 'selected') {
            let lengthh = document.querySelectorAll('.greenday').length;
            
            if (lengthh !== 0) {
                console.log("Dates available");

                let audio = new Audio('https://samplelib.com/lib/preview/mp3/sample-9s.mp3');
                audio.play();
		clearInterval(intervalID);
		console.log("Exiting Loop");
            } else {
                console.log("No Dates");
            }
        }
    } else if (obj && obj[0] && obj[0][11] && obj[0][11]["attributes"] && obj[0][11]["attributes"]["1"]) {
        let check = obj[0][11]["attributes"]["1"].value;
        
        if(check === 'selected') {
            let lengthh = document.querySelectorAll('.greenday').length;
            
            if (lengthh !== 0) {
                console.log("Dates available");

                let audio = new Audio('https://samplelib.com/lib/preview/mp3/sample-9s.mp3');
                audio.play();
		clearInterval(intervalID);
		console.log("Exiting Loop");
            } else {
                console.log("No Dates");
            }
        }
    } else {
        console.log("Cannot find the desired object or its attributes.");
    }
}

// Set a timestamp for the start time
const startTime = new Date().getTime();

// Set the duration for 5 minute (300,000 milliseconds)
const duration = 300000;

// Run the function until the current time exceeds the start time + duration
let intervalID = setInterval(function() {
    const currentTime = new Date().getTime();

    if (currentTime >= startTime + duration) {
	let audio = new Audio('https://samplelib.com/lib/preview/mp3/sample-3s.mp3');
        audio.play();
        clearInterval(intervalID); // Exit the loop after 5 minute
        console.log("Exiting the loop after 1 minute.");
    } else {
        checkDatesAvailability();
    }
}, 2000); // Run every 2 seconds
