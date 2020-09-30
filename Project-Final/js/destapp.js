//Dynamic filtering

var inputBySearch = document.getElementById("dest-filter");
//console.log(inputBySearch);
function dest_found(place)
{
    var user_input = inputBySearch.value;

    var lowercase_userinput = user_input.toLowerCase(); //Convert to lower case
    //console.log(lowercase_userinput);

   var lowercase_city = place.city.toLowerCase();
   //console.log(lowercase_city);

   //using if else to return movie
   if(lowercase_city.indexOf(lowercase_userinput) >= 0 ){
       return true;
    } else
     {
       return false;
     }
}
inputBySearch.addEventListener("input", function(){

   
    var c_filter = DESTINATION.filter(dest_found);
    renderDestinationRow(c_filter);
}
);