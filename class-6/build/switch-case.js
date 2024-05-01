"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayNumber = 1;
switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}
// Create a variable with myAnswer type
const isClassOnMonday = "nahi";
// Use switch case with myAnswer type
switch (isClassOnMonday) {
    case "yes": // Type assertion or type casting
    case "YES":
    case "haan":
        console.log('There is class');
        break;
    case "no":
    case "NO":
    case "nahi":
        console.log('There is no class');
        break;
    default:
        console.log('Invalid input');
}
