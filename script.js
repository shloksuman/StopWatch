let [seconds, minutes ,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60 ){
        seconds = 0 ;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours ;
    let m = minutes < 10 ? "0" + minutes : minutes ;
    let s = seconds < 10 ? "0" + seconds : seconds ;

    displayTime.innerHTML = h + ":"  + m + ":" + s ;
}

function watchStart(){
    // Add the "enlarged" class when the image is clicked
    document.querySelector('.buttons img[src="images/start.png"]').classList.add('enlarged');

    // Set a timeout to remove the "enlarged" class after 3 seconds
    setTimeout(function () {
         document.querySelector('.buttons img[src="images/start.png"]').classList.remove('enlarged');
    }, 150);

    //FUNCTIONALITY

    if(timer!= null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);
}

function watchStop(){
    // Add the "enlarged" class when the image is clicked
    document.querySelector('.buttons img[src="images/stop.png"]').classList.add('enlarged');

    // Set a timeout to remove the "enlarged" class after 3 seconds
    setTimeout(function () {
         document.querySelector('.buttons img[src="images/stop.png"]').classList.remove('enlarged');
    }, 150);

    //FUNCTIONALITY

    clearInterval(timer);
}

function watchReset(){
    // Add the "enlarged" class when the image is clicked
    document.querySelector('.buttons img[src="images/reset.png"]').classList.add('enlarged');

    // Set a timeout to remove the "enlarged" class after 3 seconds
    setTimeout(function () {
        document.querySelector('.buttons img[src="images/reset.png"]').classList.remove('enlarged');
    }, 150);


    // FUNCTIONALITY
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

