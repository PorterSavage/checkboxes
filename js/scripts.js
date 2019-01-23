$(document).ready(function(){
  var transportation = [];
  var fun = [];


  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
      transportation.push($(this).val());
      console.log(transportation);

    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
      fun.push($(this).val());
      console.log(fun);
    });

    if (transportation.length < 3 && fun.length < 2) {
      alert("your luck is good!")
    }
    else if (transportation.length > 3 && fun.length > 2) {
      alert("your luck is okay!")
    }
    else {
      alert("your luck is weird!")
    }

    $('#transportation_survey').hide();
  });
});
