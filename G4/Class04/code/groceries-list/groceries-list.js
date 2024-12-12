// EXAMPLE APPLICATION - Groceries management

const groceries = ['Bread', 'Milk', 'Butter'];

// a function to add an item to the list
// it should only be responsible for adding items and validating before adding
function addToGroceriesList(item) {
	// we want to add only if we pass a string, so we cannot add a number instead
	if (typeof item === 'string') {
		groceries.push(item);
	}
}

// a function to list all items in the list in a user friendly way
function showGroceriesList() {
	console.log('My groceries list:');
	for (let i = 0; i < groceries.length; i++) {
		// we want to log the items that have not been deleted only
		if (groceries[i] !== null) {
			console.log(`- ${groceries[i]}`);
		}
	}
}

// a function to find an item in the list
function findProductInList(item) {
	for (let product of groceries) {
		// we check if the item in the current iteration is === with what we are looking
		if (product === item) {
			// if condition is true, we log that the item is found
			console.log(`Found ${product}`);

			// we return the item directly and exit the loop
			return product;
		}
	}

	// if no item is found, we log a message and return null to indicate that such item is not found
	console.log(`Item is not in the list`);
	return null;
}

// a function to remove an item from the list
function deleteItemFromList(item) {
	console.log(`Attempt to delete: ${item}`);
	let index = 0;
	while (index < groceries.length) {
		// if the item in the current iteration is === to what we want to remove
		if (groceries[index] === item) {
			// log message
			console.log(`Deleted ${groceries[index]}`);

			// set the current item to null
			// Note: There are built-in methods that we can use to properly remove an item from the list
			// We'll get there in Advancer JavaScript :D
			groceries[index] = null;

			// If an item is removed, exit the loop as we don't need to check the rest of the items
			break;
		}
		console.log(`Checked item: ${groceries[index]}`);
		index++;
	}
	console.log('Delete attempt finished.');
}

addToGroceriesList('Salad');	// ['Bread', 'Milk', 'Butter', 'Salad']
addToGroceriesList(8);			// ['Bread', 'Milk', 'Butter']

let foundItem1 = findProductInList('Bread');	// returns 'Bread' and logs message
let foundItem2 = findProductInList('Salad');	// returns 'Salad' and logs message
let foundItem3 = findProductInList('Beef');		// returns null as there is no Beef in the list

deleteItemFromList('Bread');	// ['Milk', 'Butter']

showGroceriesList();