

document.getElementById("button").addEventListener("click", function(){
    var timeleft = 7;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft + 
    " " + "days remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time to water and fertilize!"
    }
    }, 1000); 

    
});