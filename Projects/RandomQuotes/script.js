document.getElementById("getQuote").addEventListener("click", function () {
  // fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  const url = "https://qapi.vercel.app/api/random";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        "quote"
      ).textContent = `"${data.quote}" — ${data.author}`;
    })
    .catch((error) => {
      document.getElementById("quote").textContent = "Error fetching quote!";
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});
