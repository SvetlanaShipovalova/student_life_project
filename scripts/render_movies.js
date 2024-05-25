import movie from "../data/movie_data.js";

function renderMovieSlider() {
  let cardSliderHTML = ``;
  let randomCards = movie.sort(() => Math.random() - 0.5);
  randomCards.forEach((card) => {
    const { name, position, image, description } = card;

    cardSliderHTML += `
    <div class="parallax">
      <div class="bg_1" style="background-image:url(${image});">
        <div class="box">
          <h2 class="name">${name}</h2>
          <span class="description">${description}</span>
        </div>
      </div>
    </div>   
    `;
  });

  document.querySelector(".movies_data").innerHTML = cardSliderHTML;
}


renderMovieSlider();

