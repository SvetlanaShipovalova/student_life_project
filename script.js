import movie from "./data.js";

function renderCardSlider() {
  let cardSliderHTML = ``;
  let randomCards = movie.sort(() => Math.random() - 0.5);

  randomCards.forEach((card) => {
    const { name, position, image, description } = card;

    cardSliderHTML += `
<div class="parallax">
    <div class="bg_1" style="background-image:url(${image});">
<div class="box">
<h1 class="name">${name}</h1>
<span class="description">${description}</span>
</div>
</div>
</div>
       
        
    `;
  });

  document.querySelector(".movies_data").innerHTML = cardSliderHTML;
}

renderCardSlider();
