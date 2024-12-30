# AJAX and JSON Introduction 🤜🤛

## JSON

```json
{
  "property": "value",
  "anotherProperty": "another value",
  "Array": [
    "1",
    "2",
    "3"
  ],
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
    price: 100
}

// Converting from JavaScript Object to JSON
let orderJson = JSON.stringify(order);

// Converting a JSON string back to JavaScript object
let orderObj = JSON.parse(orderJson);
```

## AJAX with JQuery

To request some data from some address using AJAX from JQuery you would need a few things:

* URL to an endpoint that has some data
* The data source needs to be free, or you would have to have some access like a key of sorts
* Have JQuery integrated into your page
  * WARNING: Jquery.slim version does not contain AJAX, so you need to use the standard JQuery version, NOT slim

```js
// Get some data with JQuery AJAX
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users", // An URL to some data source
    success: function(result){ // A method that executes when we get successfully receive data
        console.log(result); // We can use the result here to do whatever we want with the received data
    }
});
```

## AJAX with Fetch

The fetch functionality to get data from a data source is native to one of the more modern JavaScript versions. It can be easily used to get some data without importing any libraries. Just remember that it will not work on older browsers ( Ex: Internet Explorer )

```js
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log("There was some problem!");
});
```
