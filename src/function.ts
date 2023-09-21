// Normal Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

//Arrow Function
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
// Callback Function

const arr: number[] = [4, 9, 7, 3];
const newArray = arr.map((elm: number): number => elm * elm);

// Function in Objects OR TypeScript Methods
const person: {
  name: string;
  balance: number;
  addBalance(newBal: number): number;
  removeBalance(newBal: number): number;
} = {
  name: "Shifat",
  balance: 2200,
  addBalance(newBal: number): number {
    return this.balance + newBal;
  },
  removeBalance(newBal: number): number {
    return this.balance - newBal;
  },
};
