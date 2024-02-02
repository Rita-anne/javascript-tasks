// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.

const day=()=>{
 switch (new Date().getDay() ) {
case 0:
    console.log ("To day : is sunday");
    break;
    case 1:
    console.log ("To day : is monday");
    break;
    case 2:
    console.log ("To day : is tuesday");
    break;
    case 3:
    console.log ("To day : is wednesday");
    break;
    case 4:
    console.log ("To day : is thursday");
    break;
    case 5:
    console.log ("To day : is friday");
    break;
    case 6:
    console.log = ("To day : is saturday");
    break;
 }
}
  day()



//   Write a JavaScript program to find the largest of three given integers.
//  const integers=(x,y,z)=>{

//  }


// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.