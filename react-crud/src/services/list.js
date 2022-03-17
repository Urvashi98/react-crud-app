import axios from "axios";


export function getBooksList() {
  const res = axios.get("http://localhost:3333/books");
  return res;
}

export  function setBookToList(book) {
  let response= axios.post("http://localhost:3333/books", book);
    return response;
}

export function deleteBook(id) {
  const res = axios.delete(`http://localhost:3333/books/${id}`);
  return res;
}

export function getBookById(id) {
  const res = axios.get(`http://localhost:3333/books/${id}`);
  return res;
}

export function updateBook(id, book) {
  const res = axios.put(`http://localhost:3333/books/${id}`, book);
  return res;
}