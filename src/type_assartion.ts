let eni: any;
eni = "Next Level Web Development";
<string>eni;

type CustomErrorType = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
