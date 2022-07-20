const sliders = document.querySelector(".carrossel");
var scrollPerClick;
var ImagePadding = 20;

showMovieData();

var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}

async function showMovieData() {
  const api_key = "03b9c04ce96ee04f712d8d5f314a2f6b";

  var result = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`
  );

  result = result.data.results;

  result.map(function (cur, index) {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 508;
}

// *******************************

const slider = document.querySelector(".carrossel-serie");
var scrollPerClick;
var ImagePadding = 20;

showSerieData();

var scrollAmount = 0;

function sliderScrollLeft2() {
  slider.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight2() {
  if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
    slider.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}

async function showSerieData() {
  const api_key = "03b9c04ce96ee04f712d8d5f314a2f6b";

  var result = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}&sort_by=popularity.desc`
  );

  result = result.data.results;

  result.map(function (cur, index) {
    slider.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    );
  });

  scrollPerClick = 508;
}
