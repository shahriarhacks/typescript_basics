interface INameAndRoll {
  name: string;
  roll: number;
}
interface ILoveHowMuch extends INameAndRoll {
  age: number;
  loveAvg: number;
  isLoyal: boolean;
}

const myLove: ILoveHowMuch = {
  name: "Shifat",
  age: 22,
  roll: 530270,
  loveAvg: 99.99,
  isLoyal: true,
};
