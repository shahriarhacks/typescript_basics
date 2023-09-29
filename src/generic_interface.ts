interface CrushInterface<T, U = null /* Default Parameter/Value in Generic */> {
  name: string;
  husband: T;
  wife?: U;
}

interface HusbandInterface<T, K> {
  name: T;
  salary: K;
}
interface PersonInterface {
  name: string;
  age: number;
}

const crush1: CrushInterface<boolean> = {
  name: "Kender Lust",
  husband: true,
};
const crush2: CrushInterface<string> = {
  name: "Leah Gotti",
  husband: "Many More",
};
const crush3: CrushInterface<HusbandInterface<string, number>> = {
  name: "Dani Danoels",
  husband: {
    name: "Jony Sins",
    salary: 99999,
  },
};

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
  name: "Mia Khalifa",
  husband: {
    name: "Shifat",
    age: 22,
  },
  wife: {
    name: "Mia Malkova",
    age: 31,
  },
};
