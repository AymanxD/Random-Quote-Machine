$(document).ready(function() {

  var randomQuote, randomAuthor;
   var quotewebsite = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
   findquote();  // At the start in order to create starter quote.
 function findquote(){
  $.getJSON(quotewebsite, function(quote) {
    randomQuote = quote.quoteText;
    randomAuthor = quote.quoteAuthor;
  $(".Quotes").text(randomQuote);
  $(".Author").text(randomAuthor);
    console.log(quote)
  });
 };
    $("#Newquotebutton").click((e) => findquote());  

  $("#Tweet").on("click", function() {
      window.open("https://twitter.com/intent/tweet/?text=" + randomQuote + " " +randomAuthor);             
    }); 
});