import book from "./book_data.js";

function renderBookSlider() {
  let cardSliderHTML = ``;
  let randomCards = book.sort(() => Math.random() - 0.5);

  randomCards.forEach((card) => {
    const { name, author, image, description, pages, restrictions } = card;

    cardSliderHTML += `
    <div class="block-figure-5">
      <div class="triangle-1"></div>
      <div class="triangle-2"></div>
        <div class="triangle-txt">
          <div class="img-container">
            <div class="img-inner">
              <div class="inner-skew">
                <img src="${image}">
              </div>
            </div>
          </div>
          <div class="book_title">
            <h2 class="name" style="font-size:28px;">${name}</h2>
            <h3 class="author">${author}</h3>
          </div>
          <div class="book_description">
            <p class="description">${description}</p><br>
          </div> 
          <div class="book_page">
            <h3 class="pages">${[pages]}</h3>
          </div>
          <div class="book_age">
            <h3 class="restrictions">${restrictions}</h3>
          </div>
        </div>
    </div>
  
    `;
  });
  document.querySelector(".books_data").innerHTML = cardSliderHTML;
}

renderBookSlider();
