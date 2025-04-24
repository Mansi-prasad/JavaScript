let name = "Mansi";
let roll = 1;
export {name,roll};




class Student {
  constructor(name, roll) {
    console.log(`Student roll no is ${roll} and name is ${name}.`);
  }
}
// const obj = new Student("Mansi", 11);
// class calc {
//   Addition = (x, y) => {
//     return x + y;
//   };
// }
export default Student;
