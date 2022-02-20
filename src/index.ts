const name = 'JINWOO';
const age = [29, 32];
const gender = 'male';

const sayHi = (name: String, age: Number[], gender: String): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender} ha`;
};

console.log(sayHi(name, age, gender));

export {};
