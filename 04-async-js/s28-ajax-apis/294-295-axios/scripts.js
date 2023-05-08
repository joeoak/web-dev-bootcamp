// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getCharacter = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log("response: ", res.data);
//   } catch (err) {
//     console.log("error: ", err);
//   }
// };

// getCharacter(1);

const elements = {
  jokeText: document.querySelector("#joke-text"),
  jokeButton: document.querySelector("#joke-button"),
};

const getJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    return res.data.joke;
  } catch (err) {
    return "couldn't get joke";
  }
};

elements.jokeButton.addEventListener("click", async () => {
  const jokeText = await getJoke();
  elements.jokeText.innerText = jokeText.toLowerCase();
});
