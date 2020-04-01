console.log("start");

fetch("https://movies-api-siit.herokuapp.com/movies?Title=Corona")
  .then(response => response.json())
  .then(json => {
    console.log(json);
  });

document.getElementById("login").addEventListener("click", () => {
  fetch("https://movies-api-siit.herokuapp.com/auth/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify({
      username: "stefan_cel_mare",
      password: "1234"
    })
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);

      document.cookie = `token=${json.accessToken}`;
    });
});

document.getElementById("button").addEventListener("click", () => {
  console.log(
    document.cookie
      .split(";")
      .find(element => {
        if (element.includes("token")) return true;
      })
      .split("=")[1]
  );
  const token = document.cookie
    .split(";")
    .find(element => {
      if (element.includes("token")) return true;
    })
    .split("=")[1];

  fetch(
    "https://movies-api-siit.herokuapp.com/movies/5e725d024fb1460022d1d4c4",
    {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        Title: "Corona5"
      })
    }
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
});

document.getElementById("logout").addEventListener("click", () => {
  const token = document.cookie
    .split(";")
    .find(element => {
      if (element.includes("token")) return true;
    })
    .split("=")[1];

  fetch("https://movies-api-siit.herokuapp.com/auth/logout", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *client
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
});
