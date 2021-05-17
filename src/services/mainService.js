function getBooks() {
  return fetch('http://localhost:3001/books')
    .then((res) => res.json())
    .catch((error) => alert(error));
}

export { getBooks };
