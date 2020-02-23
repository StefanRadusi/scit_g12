import { factorialRecursive } from "./factorial";
import { getMealData, searchAll } from "./search";

console.log("start");

const factorialResult = factorialRecursive(4);
console.log("this is the factorial result: ", factorialResult);

getMealData().then(json => {
  const string = searchAll(json, "Wash");
  console.log("this is the found string: ", string);
});
