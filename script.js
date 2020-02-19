// console.log("start");

function factorial(n) {
  if (n === 0) return 0;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

// console.log(factorial(4));

export function factorialRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  factorialRecursive(n - 1);
}

// const array = [1, 2, 3];
function goTroughArray(array, index) {
  const element = array[index];
  if (array.length === index) return null;
  console.log(element);
  goTroughArray(array, index + 1);
}

// goTroughArray(array, 0);

// const resultFactorialRecursive = factorialRecursive(4);
// console.log(resultFactorialRecursive);

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
//   .then(r => r.json())
//   .then(json => {
//     console.log(json);
//     const obj = searchAll(json, "Water");
//     console.log(obj);
//   });

function searchAll(json, text) {
  if (!json) return null;

  if (typeof json === "string" && json.includes(text)) {
    return json;
  }

  if (typeof json === "object") {
    for (const key in json) {
      const found = searchAll(json[key], text);
      if (found) return found;
    }
  }
}
