## The following resources will help you complete this challenge:

* [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method reference
* [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) method reference
* [`.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method reference
* [`.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property reference
* [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property reference

## Review and accept the Pull Request

Visit the GitHub repository for your `coursework-{username}` repository. Click the "Pull Requests" link and you will see a pull request from me with the files for this challenge.

Click the "Merge Pull Request" button to pull the code into your repository.

Once the Pull Request is merged, click the "Fetch Origin" button in GitHub Desktop to pull the new files to your computer.

## "`animations`" directory

For this challenge you will work in the `animations` folder of your challenges repo. The `index.html` is already created for you, but your will add JavaScript to the `js/app.js` file to enable the functionality you see in the video above.

## Requirements

Add code to `js/app.js` to enable the following features:

* As the user types into the `<input id="name-input">` element, update the contents of the `<span class="name-output">` element so that it reads `Hello, user-input`, replacing user-input with whatever the user has typed into the input box. If the length of the text in the input box is zero, set the contents of the `#name-output` to an empty string. It is not required to hide the "Hello," if the user does not type in a name.
* When the user clicks the `Animate` button, get the value of the currently selected option from the `<select id="animation-select">` element, and add that as a CSS style class to the output paragraph's `.classList`. This will trigger the animation. Just after you add the style class, also add another one-time event listener for the `"animationend"` event on that output paragraph. When that event occurs, remove the style class name you just added. This will ensure that the animation can occur multiple times.
