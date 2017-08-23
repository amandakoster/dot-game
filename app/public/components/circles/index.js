//read where the click is made
$(document).click(function(e) {
  var x = event.clientX;
  var y = event.clientY;
  drawCircle(x,y);
});

//array used for random colors of circles
var color = ['#E72B8E', '#238A9B', '#F05C3F'];

//setting canvas and its size
var c = document.getElementById('canvas');

c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext('2d');

//function to draw circles
function drawCircle(x,y){

    //randomly chose color and size for circles
  var randC = color[Math.floor(Math.random() * color.length)];
  var randS = Math.floor(Math.random() * (80 - 30)) + 30;

    //draw circles
  ctx.beginPath();
  ctx.arc(x,y,randS,0,2 * Math.PI);

    //make gradient for random color and fill
  var grd = ctx.createLinearGradient(0,0,170,0);
  grd.addColorStop(0,randC);
  grd.addColorStop(1,'transparent');

  ctx.fillStyle = grd;
  ctx.fill();
  ctx.closePath();
}
