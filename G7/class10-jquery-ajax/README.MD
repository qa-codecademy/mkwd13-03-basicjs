# JS Libraries 🙌

## Adding a JS library to your page

JavaScript libraries are ready-to-use packages of already prepared code, that bring some functionality to your page. These libraries can be downloaded and referenced to, or be imported via a link, through some content delivery network ( CDN ). There are a few things that are important to know about using libraries:

- Downloaded libraries work even if you are offline, libraries added through a CDN require an internet connection
- Libraries sometimes have a dependency on other libraries so you must add them all to work
- The order of libraries and scripts, in general, is very important
  - Scripts are executed one by one in the order in which they are added to the HTML file
  - Your script with your custom javascript needs to be AFTER the library script, to use the features. ( if it is before, it will not be able to use the features because they don't exist yet )
  - Libraries that depend on other libraries need to be after the dependent libraries that they need
- Libraries have documentation that will help you set it up, lists functionality, and help you use it
- There are more advanced ways of adding libraries in a project as well, called package managers

## JQuery

### Setup

- You can download JQuery [here](https://jquery.com/download/)
- You can use JQuery Google CDN [here](https://developers.google.com/speed/libraries#jquery)

```html
<!-- Adding jquery from your machine -->
<script src="jquery-3.7.1.min.js"></script>
<!-- Adding jquery from a CDN -->
<script
  src="https://code.jquery.com/jquery-3.7.1.min.js"
  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
  crossorigin="anonymous"
></script>
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

- All features can be found in the [documentation](https://api.jquery.com/)

# AJAX and JSON Introduction 🤜🤛

## JSON

```json
{
  "property": "value",
  "anotherProperty": "another value",
  "Array": ["1", "2", "3"],
  "object": {
    "innerProperty": "inner value"
  }
}
```

```js
let order = {
  street: "Some St.",
  streetNo: 21,
  city: "London",
  price: 100,
};

// Converting from JavaScript Object to JSON
let orderJson = JSON.stringify(order);

// Converting a JSON string back to JavaScript object
let orderObj = JSON.parse(orderJson);
```

## AJAX with JQuery

To request some data from some address using AJAX from JQuery you would need a few things:

- URL to an endpoint that has some data
- The data source needs to be free, or you would have to have some access like a key of sorts
- Have JQuery integrated into your page
  - WARNING: Jquery.slim version does not contain AJAX, so you need to use the standard JQuery version, NOT slim

```js
// Get some data with JQuery AJAX
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users", // An URL to some data source
  success: function (result) {
    // A method that executes when we get successfully receive data
    console.log(result); // We can use the result here to do whatever we want with the received data
  },
});
```

## AJAX with Fetch

The fetch functionality to get data from a data source is native to one of the more modern JavaScript versions. It can be easily used to get some data without importing any libraries. Just remember that it will not work on older browsers ( Ex: Internet Explorer )

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log("There was some problem!");
  });
```
