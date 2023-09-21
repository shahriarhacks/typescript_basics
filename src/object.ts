const user: {
  name: string;
  company: "Programming Hero"; //Literal Type
  age: number;
  isMarried: boolean;
  wife?: string;
} = {
  name: "Shahriar Ahmed",
  company: "Programming Hero",
  age: 20,
  isMarried: false,
};
console.log(user);
user.age = 21;
user.isMarried = true;
user.wife = "Sharmin Akter Bonna";

console.log(user);
