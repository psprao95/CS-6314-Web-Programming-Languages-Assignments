$(document).ready(function())
{
$("#my").click(function()
{


  $.ajax(
  {
    type:'GET',


    url:"https://maps.googleapis.com/maps/api/geocode/json?",
    data
    {
      'address':'7777 mccalum blvd',
      'key':'AIzaSyCCswMte50IBjdugGSW2Uk_WbcdFXJDhQw',
    },
    dataType:'JSON',

  success:function(data)
  {
    alert("received");
  }
});


});



});
