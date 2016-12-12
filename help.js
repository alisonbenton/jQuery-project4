$(document).ready(function(){
  $("#1").click(function(){
    $("#hidden1").css("display", "inline")
  })
  $("#2").click(function(){
    $("#hidden2").css("display", "inline")
  })
  $("#3").click(function(){
    $("#hidden3").css("display", "inline")
  })
  $("#4").click(function(){
    $("#hidden4").css("display", "inline")
  })
  $("#5").click(function(){
    $("#hidden5").css("display", "inline")
  })
  $("#6").click(function(){
    $("#hidden6").css("display", "inline")
  })
  $("#7").click(function(){
    $("#hidden7").css("display", "inline")
  })
  $("#8").click(function(){
    $("#hidden8").css("display", "inline")
  })
  $("#9").click(function(){
    $("#hidden9").css("display", "inline")
  })
  $("#10").click(function(){
    $("#hidden10").css("display", "inline")
  })
  $("#11").click(function(){
    $("#hidden11").css("display", "inline")
  })
  $("#12").click(function(){
    $("#hidden12").css("display", "inline")
  })

// 1 - doesn't work
$("#submitBtn").click(function(){
  var string = $("input#textInput").val();
  var newhtml = "<h3>" + string + "</h3>"
  $(newhtml).insertAfter("#submitBtn")
 });


// 2
// $(how to identify button)
// $(".chex input").is(":checked")(function(){
//   $("hidden").toggleClass();
//   });


// 3 not working
$("table table-striped tr:last").append('<tr><td>Lily</td><td>10</td><td>Content</td></tr>');



// 4 working!

      $("td").each(function(){
      if(($(this).text() == "Hangry")){
        $(this).css("color", "red")
      }else if(($(this).text() == "Content")){
        $(this).css("color", "green")
      };

    });
  });


// 5
$("btn btn-warning").click(function(){
  $("tr").each(function(){

  })
  $("td;nth-child(2)").each(function(){
  if(($(this).value() >= 10)){
    $()
  }else {
        };
})

// 6
$("btn btn-success").click(function(){
    var cats = $("cattable tbody tr td:nth-child(1)").each( function(){
    var name = $(this).text()
    $(this).text = name.toUpperCase
    });
    });



})
