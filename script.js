import Book from "./index.js";


//title, numPages, author, publisher, ISBN, datePublished
const harryPotter1 = new Book(
  "Harry Potter and the Philosopher's Stone",
  223,
  "J.K Rowling",
  "Bloomsbury",
  "0-7475-3269-9",
  "June 26, 1997 15:00:00 PST",
  "/assets/images/HP.jpg"
);

console.log(harryPotter1.title);
console.log(harryPotter1.image);

const main = document.querySelector(".maincontent");

const content = `
  <article class="book" id="HP1">
    <figure class="book__image">
      <img src=${harryPotter1.image} alt="" />
    </figure>
    <h1 class="book__name">${harryPotter1.title}<h1>
    <ul class="book__attributes">
      <li class="book__pages">Pages:<span> ${harryPotter1.numPages}</span></li>
      <li class="book__author">Author:<span> ${harryPotter1.author}</span></li>
      <li class="book__publisher">Publisher:<span> ${harryPotter1.publisher}</span></li>
      <li class="book__ISBN">ISBN:<span> ${harryPotter1.ISBN}</span></li>
      <li class="book__published">Date Published:<span> ${harryPotter1.datePublished}</span></li>
      <li class="book__age">Age:<span> ${harryPotter1.bookAge()}</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;



//console.log("This book:", harryPotter1);
//console.log("This book has ", harryPotter1.numPages, "pages");
//harryPotter1.bookAge();
//console.log("Days since published: ", harryPotter1.bookAge());
