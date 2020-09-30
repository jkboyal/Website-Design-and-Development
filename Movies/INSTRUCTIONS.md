Now that you know how to generate page content from data, it's time to build something that demonstrates those skills. For this challenge you will build a page that renders that movie box office data from the Programming in JavaScript challenge to an HTML table, and allows the user to filter the list based by the movie title.

## Resources
The following resources will help you complete this challenge:

* [Creating Content From Data Tutorial](https://imt-549-sp19.github.io/coursework/javascript-iteration.html)
* [Sorting and Filtering Tutorial](https://imt-549-sp19.github.io/coursework/javascript-sorting.html)
* [document.createElement() method reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [Element .appendChild() method reference](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* [Array .sort() method reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [Array .filter() method reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [String .toLowerCase() method reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
* [String .indexOf() method reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## Where to Work

For this challenge you will be working in the `movies` folder of your challenges repo. Similar to the previous challenge, you will add code to the `js/app.js` file to make the application functional.

## Requirements

### Implement the Functions

There are several functions already defined in the `js/app.js` file. Start by implementing the body of the various functions:

1. `renderMovieProp()` should create and return a new `<td>` element, set its contents to the value parameter, and if `nonNumeric` is `true`, add the CSS style class `non-numeric`.
2. `renderMovie()` should create and return a new `<tr>` element, using `renderMovieProp()` to create elements for the `title`, `revenue`, and `rating` properties and appending them to the `<tr>`.
3. `renderMovies()` should get a reference to the `<tbody>` element, clear its existing content, and then for each movie call `renderMovie()` to create a table row, appending it to the `<tbody>` element.

If you do all of that correctly, you should be able to open the `index.html` file in your browser, and see the entire set of movies rendered to the page as an HTML table.

### Sort the Data by Sales Descending

The data in the array is sorted alphabetically by movie title, but it would be better if the data were sorted by sales descending, so that the movies with the highest sales were at the top. Before the line of code that passes the `MOVIES` array to your `renderMovies()` function, use the `.sort()` method on the `MOVIES` array to sort it by the `sales` property in descending order.

Note that since the array contains objects and not simple numbers, you must provide a compare function to the `sort()` method. Your function should accept two parameters, `record1` and `record2`. Your function should return a negative number if `record1` should appear before `record2` in the final sorted order, a `0` if the two records are equal to each other, or a positive number if `record1` should appear after `record2` in the final sorted order.

### Enable Dynamic Filtering

Once your page is rendering all of the movies, then add code to accomplish the following:

1. As the user types into the `<input id="movie-filter">` element, [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) the `MOVIES` array so that it contains only those movies where the value the user typed is somewhere within the movie `title`. 

Your comparison should be done in a case-insensitive manner, meaning that entering either "force" or "FORCE" should match "Star Wars: Episode VII - The Force Awakens" To re-render just the filtered set of movies, pass the return value of the `filter()` method to your `renderMovies()` function.

## Commit, Sync, and Publish

When you've verified that your page is operating correctly, make sure you've committed all of your changes to your local repo and then synchronize with GitHub. You should then be able to see your published page at the following URL, replacing your-github-username with your GitHub user name:  
https://imt-549-sp19.github.io/coursework-your-github-username/movies/

## Submit

After you've verified that your published page is working as expected, submit a link to your GitHub repo via this assignment.