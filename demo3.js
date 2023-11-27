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


  const personArray = [{
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }];
personArray.forEach(p => console.log(p.firstName +" "+p.lastName));

let text = "Apple, Banana, Kiwi";
let part = text.slice(0,5)
console.log(part)

let txt = "I can eat bananas all day";
console.log(txt.length)


 

