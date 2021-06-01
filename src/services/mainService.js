function getBooks() {
  return fetch('http://localhost:3001/books')
    .then((res) => res.json())
    .catch((error) => alert(error));
}

function addBook(book) {
  fetch('http://localhost:3001/books', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => alert(error));
}

export { getBooks, addBook };
