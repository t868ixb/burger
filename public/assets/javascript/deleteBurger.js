 // Remove Burger
 $(".delete-button").on("click", function(event){
    var id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(function(){
      location.reload();
    });
  });