// this function just access the data on the meal server and parse the response
export function getMealData() {
  return fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
  ).then(r => r.json());
}

// this is a recursive function
// this function will return the string containing the value in the "text" parameter
// even if there is more then one string which contains the value in "text" parameter the function will return the first one
export function searchAll(json, text) {
  if (!json) return null;

  // this is the point where if the string is found the recursive function start to return back
  if (typeof json === "string" && json.includes(text)) {
    return json;
  }

  if (typeof json === "object") {
    for (const key in json) {
      // here is where is drop in the data structure level
      const found = searchAll(json[key], text);
      if (found) return found;
    }
  }
}
