

// prerequiste to work with canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// begin execution
var point = {
    x: 200,
    y: 200
}

console.log('point : ', point)

var manHeight = 100
drawMan(ctx, manHeight, point)
