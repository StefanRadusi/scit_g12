export function getMealData() {
  return fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
  ).then(r => r.json());
}

export function searchAll(json, text) {
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
