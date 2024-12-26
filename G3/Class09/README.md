# JS Libraries 🙌

## Adding a JS library to your page

JavaScript libraries are ready-to-use packages of already prepared code, that bring some functionality to your page. These libraries can be downloaded and referenced to, or be imported via a link, through some content delivery network ( CDN ). There are a few things that are important to know about using libraries:

* Downloaded libraries work even if you are offline, libraries added through a CDN require an internet connection
* Libraries sometimes have a dependency on other libraries so you must add them all to work
* The order of libraries and scripts, in general, is very important
  * Scripts are executed one by one in the order in which they are added to the HTML file
  * Your script with your custom javascript needs to be AFTER the library script, to use the features. ( if it is before, it will not be able to use the features because they don't exist yet )
  * Libraries that depend on other libraries need to be after the dependent libraries that they need
* Libraries have documentation that will help you set it up, lists functionality, and help you use it
* There are more advanced ways of adding libraries in a project as well, called package managers

## JQuery

### Setup

* You can download JQuery [here](https://jquery.com/download/)
* You can use JQuery Google CDN [here](https://developers.google.com/speed/libraries#jquery)

```html
<!-- Adding jquery from your machine -->
<script src="jquery-3.7.1.min.js"></script>
<!-- Adding jquery from a CDN -->
<script
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous"></script>
```

### Selecting

```js
// Everything in JQuery works with one multifunctional selector
// Selecting all elements
$("*");

// Selecting an element by Id
$("#myId");

// Selecting elements by class name
$(".myClass");

// Selecting elements by tag name
$("h1");
```

* All features can be found in the [documentation](https://api.jquery.com/)
