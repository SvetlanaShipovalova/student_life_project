import book from "../data/app_data.js";

function renderAppSlider() {
  let cardSliderHTML = ``;
  let randomCards = book.sort(() => Math.random() - 0.5);

  randomCards.forEach((card) => {
    const { name, image, description } = card;

    cardSliderHTML += `
    <div class="block-figure-5">
      <div class="triangle-1"></div>
      <div class="triangle-2"></div>
        <div class="triangle-txt">
          <div class="img-container">
            <div class="img-inner">
              <div class="inner-skew">
                <img src="${image}" style = "width:300px; height: 300px; margin-right: 50px;">
              </div>
            </div>
          </div>
          <div class="book_title">
            <h2 class="name" style="font-size:28px;">${name}</h2>
            
          </div>
          <div class="book_description">
            <p class="description">${description}</p><br>
          </div> 
        </div>
    </div>
  
    `;
  });
  document.querySelector(".apps_data").innerHTML = cardSliderHTML;
}

renderAppSlider();
