// Type Alias
type MyCrushType = {
  name: string;
  age?: number; //Optional Type
  profession: string;
  address: string;
};
const firstCrush: MyCrushType = {
  name: "Sharmin Akter Bonna",
  age: 24,
  profession: "My Wife",
  address: "My House",
};
type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = true;

type CourseNameType = string;

const courseName: CourseNameType = "Next Level Web Development 2.0";

type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
  return operation(num1, num2);
};

calculate(10, 20, (x, y) => x + y);
