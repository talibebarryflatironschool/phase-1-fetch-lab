function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch data from the API
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((books) => renderBooks(books)); // Pass the data to renderBooks()
}

function renderBooks(books) {
  const main = document.querySelector('main'); // Find the main container in the HTML
  books.forEach((book) => {
    const h2 = document.createElement('h2'); // Create an h2 element
    h2.innerText = book.name; // Set the book title as the text
    main.appendChild(h2); // Append the h2 to the main container
  });
}

// Add an event listener to ensure the DOM is loaded before running fetchBooks()
document.addEventListener('DOMContentLoaded', fetchBooks);
