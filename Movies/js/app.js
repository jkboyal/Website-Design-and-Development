function renderMovies(movie_list) {

    //sorting movie by descending sales
    movie_list.sort(function(record1, record2) //function to compare one movie to another
    {
        return record2.revenue - record1.revenue;
    });
    var tbody = document.querySelector(".movies tbody");

    tbody.textContent = "";

    for (var x = 0; x < movie_list.length; x++) 
    {
     
        var row = renderMovie(movie_list[x]);
        tbody.appendChild(row);
    }

}

function renderMovie(movie) {
    var tr = document.createElement("tr");

   
    tr.appendChild(renderMovieProp(movie.title, true));
    tr.appendChild(renderMovieProp(movie.revenue));
    tr.appendChild(renderMovieProp(movie.rating));

    
    return tr;

}

function renderMovieProp(content, nonNumeric) {
    
    var td = document.createElement("td");
    td.textContent = content;
    if (nonNumeric) 
    {
        td.classList.add("non-numeric");
    }
    return td;

}


//Dynamic filtering

var inputBySearch = document.getElementById("movie-filter");
//console.log(inputBySearch);
function Movie_found(movie)
{
    var user_input = inputBySearch.value;

    var lowercase_userinput = user_input.toLowerCase(); //Convert to lower case
    //console.log(lowercase_userinput);

   var lowercase_title = movie.title.toLowerCase();
   //console.log(lowercase_title);

   //using if else to return movie
   if(lowercase_title.indexOf(lowercase_userinput) >= 0 ){
       return true;
    } else
     {
       return false;
     }
}
inputBySearch.addEventListener("input", function(){

   
    var movie_filter = MOVIES.filter(Movie_found);
    renderMovies(movie_filter);
}
);