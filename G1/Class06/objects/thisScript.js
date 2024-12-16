function windowSize() {
    let height = this.innerHeight;
    let width = this.innerWidth;
    console.log("In function");
    console.log(this);
    return [height, width];
};

// let result = windowSize();
// console.log(result);

// console.log(window);


let shape = {
    width: 600,
	height: 400,
	getArea: function(){
        console.log(this);
		return this.width * this.height;
	}
};

// console.log(shape.getArea());

let width = 600;
let screen = { width: 400 };

function showWidth() {
    console.log(this);
    console.log(this.width);
}
// in background showWidth will be added in the window object(goldab scope)
//window.showWidth = showWidth;
showWidth();
// // giving the finction reference to a property of an object 
// screen.showWidth = showWidth;
// // giving the result of the execution of function call to a property in the object
// screen.showWidthExecuted = showWidth();
// console.log(screen);
screen.showWidth = showWidth;
screen.showWidth();


