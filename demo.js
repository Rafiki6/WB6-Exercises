

let a = 10;
let b = 5;

if (a == b) {
    console.log("a and b are equal");
} else {
    console.log("a and b are not equal");
}
let sum = 0;

function add(x, y, z)
{
  let sum = x + y + z;
  return sum;
}
function display()
{
  console.log(sum);
}

sum = add(1, 2, 3);
sum = add(3, 4, 5);
display()


let c = new Date();
console.log(c.getMonth() + "/" + (c.getDay() + 1) +
"/" + c.getFullYear());

let d = new Date();
console.log((d.getMonth() + 1) + "/" + d.getDay() +
"/" + d.getFullYear());

let e = new Date();
console.log((e.getMonth() + 1) + "/" + (e.getDate() + 1)
+ "/" + e.getFullYear());

let f = new Date();
console.log((f.getMonth() + 1) + "/" + f.getDate() +
"/" + d.getFullYear());

let num1 = 18;
let num2 = 65;
let num = 0;

if(num >= num1 && num <= 65){
    console.log(num)
}
for (let i = 0; i < 5; i++){
    
    console.log(i + 1)
}
let colors = ["green", "yellow", "blue", "red", "pink"];
for(let i = 0; i < 5; i++)
{
  if (colors[i] == "blue") break;
  // do something
  
}
let numbers = [0, 0, 0];
function doit(n)
{
  let num = 10;
  for (let i = 1; i < n; i++)
  {
    num += i;
    numbers[i] = num;
  }
}
doit(3);
console.log(numbers);

let ticketHolder = {
    ticketID : "GCIWMY",
    tickholder : "Chris O'Gre",
    seats : ["Sec E Row 22 Seat 1",
             "Sec E Row 22 Seat 2"]
  };
  let amt = 0;
  for (let i = 0; i < ticketHolder.seats.length; i++)
  {
    amt += 125;
  }
  console.log(amt);

  let ages = [9, 11, 62, 65, 17, 16, 15, 14, 31, 35, 37];
let number = ages.find(p => p > 20)
    
console.log(number[ages])

const flip = (d, a) => {
  if (d === 'R' || d === 'A') {
    a = a.map(row => row.reverse()); // Flip horizontally (right)
  }

  if (d === 'L' || d === 'A') {
    a = a.reverse(); // Flip vertically (upside down)
  }

  return a;
};

// Example usage:
const arrayToFlip = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(flip('R', arrayToFlip)); // Flip array to the right
console.log(flip('L', arrayToFlip)); // Flip array to the left
console.log(flip('A', arrayToFlip)); // Flip array in both directions