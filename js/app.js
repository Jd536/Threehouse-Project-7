

$(document).ready(function(){
    $(".x").click(function(e){
   this.closest("p").remove();
    });
    
    
  $("#bell").click(function(){
    $("#header_alerts").toggle();
    $("#bell_green_dot").toggle();
  });
    
  $("#x").click(function(e){
   this.closest("p").remove();
    });
});


// today's date
var date = document.getElementsByClassName("dates");


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = mm+'/'+dd+'/'+yyyy;
Array.from(date).forEach(function(e){
    e.textContent=today;
})


