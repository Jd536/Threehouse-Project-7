var chartAlert = document.getElementById("chartAlert");
var bellAlert = document.getElementById("bell");
var headerAlerts= document.getElementById("header_alerts");
document.getElementById("x").addEventListener("click", function() {
    chartAlert.style.display="none";
}); 

bellAlert.addEventListener("click", function() {
    if(headerAlerts.style.display=="none"){
        headerAlerts.style.display="inline-block";
     
        bellDot.style.display="none";
       } else{
           headerAlerts.style.display="none";
           bellDot.style.display="inline-block";
       }
}); 


