document.addEventListener("DOMContentLoaded", () => {
  // Array of domains
  const domains = [
    "google.com",
    "facebook.com",
    "apple.com",
    "nike.com",
    "adidas.com",
    "audi.com",
    "ferrari.com",
    "disney.com",
    "linkedin.com",
    "nobul.com",
    "cohere.com",
    "dream.ca",
    "humber.ca",
    "riot.com",
    "siemens.com",
    "amazon.com",
    "ibm.com",
    "oracle.com",
    "cisco.com"
  ];

  // Loop through domains and fetch logo data from Clearbit Logo API
  Promise.all(
    domains.map((domain) =>
      fetch(`https://logo.clearbit.com/${domain}?size=200`)
        .then((response) => response.url)
        .catch(() => "")
    )
  ).then((logoUrls) => {
    // Build HTML body using insertAdjacentHTML()
    const listedLogo = logoUrls
      .map((url) => {
        return `<li class="carousel__slide current-slide">
      <img class="carousel__image" src="${url}" alt="Logo">
      </li>`;
      })
      .join(``);
    const body = document.querySelector("body");
    body.insertAdjacentHTML(
      "beforeend",
      `<h1>Guess the Logo! </h1>
        <div class="carousel">
        <button class="carousel__button carousel__button--left">
          <img src="left-arrow.svg" alt="left arrow">
        </button>
        <div class="carousel__track-container">
          <ul class="carousel__track">
          ${listedLogo}
          </ul>
          </div>
        <button class="carousel__button carousel__button--right">
          <img src="right-arrow.svg" alt="right arrow">
        </button>
        </div>
        <div class="guess">
          <input type="text" id="guess-input" name="guess-input">
          <button id="guess-button">Guess</button>
          <p id="result"></p>
        </div>
      `
    );

    // Get elements for input, button, and result
    const guessInput = document.getElementById("guess-input");
    const guessButton = document.getElementById("guess-button");
    const result = document.getElementById("result");

    // Add an event listener for the guess button
    guessButton.addEventListener("click", (e) => {
      // Get the value of the guess input and the current domain
      const guess = guessInput.value.toLowerCase();
      // Get the index of the current slide and corresponding domain
      const currentSlideIndex = slides.findIndex(slide => slide.classList.contains("current-slide"));
      const domain = domains[currentSlideIndex].split(".")[0].toLowerCase();

      // If the guess is correct
      if (guess === domain) {
        // Move to the next slide
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        // If the current slide is the last one, show a congratulatory message and reset the carousel
        if (nextSlide === null) {
          result.textContent = "Congratulations! You have guessed all the logos!";
          resetCarousel();
        } else {
          moveToSlide(track, currentSlide, nextSlide);
        }

      } else {
        // If the guess is incorrect, show the error message
        result.textContent = "Incorrect. Please try again.";
      }

      // Clear the guess input and set focus to it
      guessInput.value = "";
      guessInput.focus();
    });

    const resetCarousel = () => {
      const currentSlide = track.querySelector(".current-slide");
      const firstSlide = slides[0];
      moveToSlide(track, currentSlide, firstSlide);
      currentSlideIndex = 0;
    };


    // Get the track element after it has been added to the DOM
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");

    const slideWidth = slides[0].getBoundingClientRect().width;

    //arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    //when clicking right
    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide != null) {
        moveToSlide(track, currentSlide, nextSlide);
        result.textContent = "";
      }
    });

    //when clicking left
    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;

      if (prevSlide != null) {
        moveToSlide(track, currentSlide, prevSlide);
      }
    });
  });
});
