import axios from "axios";

// export function getBooksList() {
//   let response;
//   try {
//     const res = axios.get("http://localhost:3333/books");
//     response = res.data;
//   } catch (err) {
//     response = err;
//   }
//   return response;
// }

export function getBooksList() {
  const res = axios.get("http://localhost:3333/books");
  return res;
}

export async function setBookToList(book) {
  let response;
  try {
    response = await axios.post("http://localhost:3333/books", book);
    return response;
  } catch (err) {
    return err;
  }
}
