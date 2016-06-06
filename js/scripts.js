$(document).ready(function() {
  $("#btn").click(function(event) {
    var flavors = ["Mango", "Coconut", "Cookie Dough", "Vanilla", "Pistachio"];

    var counter = 0;
    flavors.forEach(function(flavor) {
      $("#flavor").append("<li>" + flavors[counter] + "</li>");
      counter++;
    });

    $("#flavor").show();


  event.preventDefault();
  });

});
