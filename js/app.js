

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




var searchUser=$("#searchUser");
var members = $(".newMembersCard");

searchUser.keyup(function(){
         var value = $(this).val().toLowerCase();
         $(".newMembersCard p").filter(function(){
              $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
         });
    
});

/*==============================================
        save settings to local storage
===============================================*/

$(function() {
    var checkBox = localStorage.getItem("settingbtn");
    if (checkBox !== null) {
        $(".toggle").each(function(){
            $(this).attr("checked", "checked");
        });
    }
});

$(".toggle").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("settingbtn", $(this).val());
    } else {
        localStorage.removeItem("favorite");
    }
});

  $(".selectTimeZone").change(function(){
        var key = $(this).attr("id");
        var value = $(this).val();
        localStorage.setItem(key,value);
  });
  var inputValue= JSON.parse(localStorage.getItem('inputValue')) || {};
  


 
  $(".timeZones").each(function(){
      var key = $(this).attr('id');
      if(localStorage.getItem(key)){
          $(this).val(localStorage.getItem(key));
      }
  });



