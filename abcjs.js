let sum = 0, a = 1 ;
outerloop: while (true) {
    a =1;
    innerloop: while (a<3) {
        sum += a;
        if (sum >12) {
            break outerloop;
        }
        console.log("sum =" + sum);
        a++;
        }
    }


    const o = new Object();
    o.sony = 42;
    
    console.log(o);
 
    // hasOwnProperty code in js
const object1 = new Object();
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1')); // true


function addnumber (number1 , number2){
    return(number1+ number2)
}
console.log(addnumber(6,8))



// Creating an Empty Array
let names = [];
console.log(names);

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];

console.log(courses);

let members =[];
console.log(members);

let classes = ["sony", "roma", "swetha"]; 

    console.log(classes)



        let str1 = "John";
let str2 = new String("John");

console.log(str1 == str2);
console.log(str1.localeCompare(str2));





const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";

console.log(str1 == str2);
console.log(str1 === str2);


let x = 21
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(x.toLocaleString("bn-BD"));

    


      

