import podcast from "./podcasts_data.js";

function renderAppSlider() {
  let cardSliderHTML = ``;
  let randomCards = podcast.sort();

  randomCards.forEach((card) => {
    const { id, name, video, description } = card;

    cardSliderHTML += `
    <div>
    <div class="podcasts_01">
    <div class="podcast_text"><h2>Подкаст №${id}</h2> "${name}"</div>
    <video controls width="900px" class="video">
    <source src="${video}" type="video/mp4" />
    </video>
    </div>
    <div class="podcasts_02"> <h3 style=" margin: 5px;">Аннотация:</h3> ${description}</div>
    <div>
    `;
  });
  document.querySelector(".podcasts").innerHTML = cardSliderHTML;
}

renderAppSlider();
