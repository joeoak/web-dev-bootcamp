const elements = {
  form: document.querySelector("#search-form"),
  input: document.querySelector("#search-input"),
  results: document.querySelector("#search-results"),
  submit: document.querySelector("#search-submit"),
};

const getShows = async (searchValue) => {
  try {
    const config = {
      params: { q: searchValue },
    };
    const res = await axios.get("https://api.tvmaze.com/search/shows", config);
    // console.log(res);
    elements.results.innerHTML = "";
    res.data.forEach((item) => {
      if (item.show.image) {
        addResult(
          item.show.image.medium,
          item.show.name,
          item.show.officialSite,
          item.show.rating.average
        );
      } else {
        addResult(
          "",
          item.show.name,
          item.show.officialSite,
          item.show.rating.average
        );
      }
    });
  } catch (err) {
    console.log("error: ", err);
  }
};

const addResult = (showImage, showName, showSite, showRating) => {
  let newElement = document.createElement("div");
  newElement.className = "result";
  newElement.innerHTML = `
    <div class="result-image" style="background-image: url(${showImage})"></div>
    <div class="result-description">
      <div>${showName}</div>
      ${showRating ? `<div>${showRating}</div>` : ""}
      ${showSite ? `<a href=${showSite}>website</a>` : ""}
    </div>
  `;
  elements.results.appendChild(newElement);
};

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  getShows(elements.form.elements.query.value);
});
