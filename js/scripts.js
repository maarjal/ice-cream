$(document).ready(function() {
  $("#btn").click(function(event) {
    var flavors = ["Mango", "Coconut", "Cookie Dough", "Vanilla", "Pistachio"];

    // var counter = 0;
    // flavors.forEach(function(flavor) {
    //   $("#flavor").append("<li>" + flavors[counter] + "</li>");
    //   counter++;
    // });


    for (var i = 0; i < flavors.length; i++) {
      $("#flavor").append("<li>" + flavors[i] + "</li>");
    }


    $("#flavor").show();


  event.preventDefault();
  });

});
