// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jinwoo = new Human('Jinwoo', 29, 'male');

// const person = {
//   name: 'jinwoo',
//   gender: 'male',
//   age: 29
// };

export const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender} ha`;
};

console.log(sayHi(jinwoo));

export {};
