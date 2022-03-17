import { useEffect, useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUser/AddUserForm";
import Navbar from "./components/Navbar";
import ShowUser from "./components/ShowUsers/ShowUser";
import {
  deleteBook,
  getBookById,
  getBooksList,
  setBookToList,
  updateBook,
} from "./services/list";

const initialBookData = {
  id: null,
  bookName: "",
  bookAuthor: "",
};

function App() {
  const [data, setData] = useState([]); //set books data here
  const [loading, setLoading] = useState(false); //load state
  const [book, setBook] = useState(initialBookData); // generate book obj for form

  //on submit
  function submitHandler(e) {
    e.preventDefault();
    if (book.id) {
      let updatedBook = {
        bookName: book.bookName,
        bookAuthor: book.bookAuthor,
      };
      //update call
      (async () => {
        let res = await updateBook(book.id, updatedBook);
        console.log("response of updated data", res.data);
        if (res) {
          res = await getBooksList();
          setData(res.data);
          setLoading(false);
        }
      })();
      setBook(initialBookData);
    } else {
      var id = "id_" + Math.random().toString().slice(10);
      book.id = id;
      setLoading(true);
      (async () => {
        let res = await setBookToList(book);
        if (res) {
          res = await getBooksList();
          setData(res.data);
        }
      })();
      setBook(initialBookData);
    }
  }

  function deleteHandler(id) {
    //get the id to delete
    console.log("in app.js delete handler", id);
    (async () => {
      let res = await deleteBook(id);
      if (res.statusText === "OK") {
        res = await getBooksList();
        setData(res.data);
      }
      console.log("responmse of delete", res);
    })();
  }

  function editHandler(id) {
    console.log("in edithandler app.js", id);
    (async () => {
      const res = await getBookById(id);
      console.log("Book returned by getBookByID", res);
      setBook(res.data);
    })();
  }
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setTimeout(() => {
      getBooksList().then((res) => {
        if (mounted) {
          setData(res.data);
        }
        setLoading(false);
      });
    }, 100);
    return () => {mounted = false; clearInterval();};
  }, []);

  //on change
  const onChange = (e) => {
    const { id, value } = e.target;
    setBook((preState) => ({ ...preState, [id]: value }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <AddUserForm
          onChangeHandler={onChange}
          submitHandler={submitHandler}
          book={book}
        />
        <ShowUser
          books={data}
          isLoading={loading}
          onDelete={deleteHandler}
          onEdit={editHandler}
        />
      </header>
    </div>
  );
}

export default App;
