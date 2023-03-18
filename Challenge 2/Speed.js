//   a function  that takes a speed parameter

function calculateDemeritPoints(speed) { 
  
  const speedLimit = 70; // a constant variable speedLimit 
  const DemeritPoint = 5; //  a constant variable DemeritPoint 
  
  if (speed <= speedLimit) { // if the speed is less than or equal to the speed limit, 
    console.log("Ok"); // output 
  } else { // if the speed is greater than the speed limit, 
    const demeritPoints = Math.floor((speed - speedLimit) / DemeritPoint); // calculate the number of demerit points based on the speed

    if (demeritPoints > 12) { // if the number of demerit points is greater than 12, execute the following block of code
      console.log("License suspended"); // output "License suspended" to the console
    } else { // if the number of demerit points is not greater than 12, execute the following block of code
      console.log("Points: " + demeritPoints); // output the number of demerit points to the console with the string "Points: "
    }
  }
}


calculateDemeritPoints(60); // Output Ok
calculateDemeritPoints(80); // Output 2
calculateDemeritPoints(90); // Output 4

