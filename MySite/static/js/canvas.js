// Control variables
// Slant/inclination of rays
var slant = 2.5;
// Angular speed of the points
var ang_mom = 0.08;
// Points Count
var points_count = 70;
// Points spread (higher number means more evenly spread
var points_spread = 50;

var colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];

var mouse = {
  x: undefined,
  y: undefined
};

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.len = Math.pow(
      Math.pow(this.x - canvas.width / 2, 2) +
      Math.pow(this.y - canvas.height / 2, 2), 
      0.5
  );
  this.ang = Math.atan2(this.y - canvas.height / 2, this.x - canvas.width / 2);
  this.color = colors[Math.floor(Math.random() * 3)];
  //Controls the opacity/brightness of the rays
  this.getOpac = function(linex, liney) {
    if (mouse.x == undefined) return (50).toString(16);
    var mx = linex - mouse.x;
    var my = (mouse.y - liney) / slant;
    var dis = Math.abs(mx - my);
    // Rays glow brighter if mouse is closer to them
    if (dis < 100) {
      return (50 + Math.floor(2 * (100 - dis))).toString(16);
    } else return (50).toString(16);
  };

  this.draw = function() {
    ctx.beginPath();
    // Drawing the Point
    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    var linex = canvas.width;    
    var liney = this.y - (canvas.width - this.x) * slant;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // Drawing the Ray
    ctx.lineTo(linex, liney);
    ctx.strokeStyle = "#FFFFFF" + this.getOpac(linex, liney);
    ctx.stroke();
  };

  this.rotate = function() {
    this.ang += ang_mom * Math.PI / 180;
    this.x = canvas.width / 2 + this.len * Math.cos(this.ang);
    this.y = canvas.height / 2 + this.len * Math.sin(this.ang);
  };
}

var points = [];
for (var i = 0; i < points_count; i++) {
  var rad = Math.floor(Math.random() * points_spread) * (canvas.width / (2 * points_spread));
  var ang = Math.random() * Math.PI * 2;
  var x = canvas.width/2 + rad * Math.cos(ang);
  var y = canvas.height/2 +  rad * Math.sin(ang);
  
  var p = new Point(x, y);
  points.push(p);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#252934";
  ctx.fill();
  for (var i = 0; i < points.length; i++) {
    points[i].rotate();
    points[i].draw();
  }
}
animate();

canvas.addEventListener("mousemove", function(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
canvas.addEventListener("mouseout", function(event) {
  mouse.x = undefined;
  mouse.y = undefined;
});
