const PI = 3.14;
let radius;
let area;
let circumference;

radius = window.prompt("Enter the radius of the circle: ");
area = PI * radius * radius;
circumference = 2 * PI * radius;

console.log("Area of circle: "+area);
console.log("Circumference of circle: "+circumference);
