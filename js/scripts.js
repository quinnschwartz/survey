$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var personInput = $("input#person").val();
    $(".person").text(personInput);
  });

    var food = $("#food").val();
    $(".form-control").text(food);
  });

    var music = $("input:radio[name=music]:checked").val();

$("#output").text(result);


 });

});
