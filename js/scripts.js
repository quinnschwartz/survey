$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var person = $("input#person").val();
    var food = $("input#food").val();
    var music = $("input:radio[name=music]:checked").val();

    $(".person").text(person);
    $(".food").text(food);
    $(".music").text(music);

  $("#receipt").show();

  event.preventDefault();
  });
});
