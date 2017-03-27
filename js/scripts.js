$(document).ready(function(){
  $("form#grocery-list").submit(function(event){
  event.preventDefault();
    var blanks = ["item1", "item2", "item3", "item4"];
    var groceries = [];
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val().toUpperCase();
      groceries.push(userInput);
    });

    groceries.sort();
    var index = 0;
    groceries.forEach(function(grocery){
      $("." + blanks[index]).append(grocery);
      index++;
    })
    console.log(groceries);
    $(".list").fadeIn();
    $("#grocery-list").fadeOut();
  });
});
