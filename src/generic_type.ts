type GenericArrayType<T> = Array<T>;
type GenericTupleType<X, Y> = [X, Y];
interface INameAndRoll {
  name: string;
  roll: number;
}
interface ILoveAvg extends INameAndRoll {
  age: number;
  loveAvg: number;
  isLoyal: boolean;
}

const ourRollNumbers: GenericArrayType<number> = [530098, 530236, 530270];
const ourRollNumbers2: GenericArrayType<string> = [
  "530098",
  "530236",
  "530270",
];
const arrayBoolean: GenericArrayType<boolean> = [true, false];
const nameAndRollArray: GenericArrayType<INameAndRoll> = [
  { name: "Bonna", roll: 530236 },
];

const relationTuple: GenericTupleType<string, number> = ["Bonna", 530236];
const SASandSAB: GenericTupleType<ILoveAvg, ILoveAvg> = [
  { name: "Shifat", age: 22, roll: 530270, loveAvg: 99.99, isLoyal: true },
  {
    name: "Bonna",
    age: 24,
    roll: 530236,
    loveAvg: 97.97,
    isLoyal: true,
  },
];
