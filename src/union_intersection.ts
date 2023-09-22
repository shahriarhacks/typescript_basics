type BeginnerDeveloperType = {
  name: string;
};

// type JuniorDeveloperType = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type JuniorDeveloperType = BeginnerDeveloperType & {
  expertise: string;
  experience: number;
};

const newDeveloper: JuniorDeveloperType = {
  name: "Developer",
  expertise: "JavaScript/JS",
  experience: 1,
};

type NextLevelDeveloperType = JuniorDeveloperType & {
  level: number;
  leadership: string;
};

const nextLevelDeveloper: NextLevelDeveloperType = {
  name: "Next Level Developer",
  expertise: "JavaScript/JS , TypeScript/TS",
  experience: 1.5,
  level: 2,
  leadership: "mid",
};
