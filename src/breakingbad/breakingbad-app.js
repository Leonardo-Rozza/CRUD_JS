/**
 *
 * @param {HTMLDivElement} element
 */

const fetchQuote = async () => {
  //Guardamos la url en una variable.
  const url = `https://api.breakingbadquotes.xyz/v1/quotes`;
  //Con nuestra funcion asyncrona. LLamamos al método Fetch de js y esperamos la respuesta(await), que tambien almacenamos en una constante.
  const res = await fetch(url);
  //A nuesta respuesta la convertimos en un formato Json para poder manejarla con JS.
  const data = await res.json();
  //Nos devolvio un arreglo de objetos del cual solo nos interesa su primer objeto por eso retornamos solamente el mismo.
  return data[0];
};

export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "BrakingBad App";
  element.innerHTML = "Loading...";
  const quoteLabel = document.createElement("blockquote");
  const quoteAuthor = document.createElement("h4");
  const button = document.createElement("button");
  button.innerText = "Next Quote";

  const renderQuote = ({ quote, author }) => {
    quoteLabel.innerHTML = quote;
    quoteAuthor.innerHTML = author;
    element.replaceChildren(quoteLabel, quoteAuthor, button);
  };

  button.addEventListener("click", async () => {
    element.innerHTML = "Loading...";
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  fetchQuote().then(renderQuote);
};
