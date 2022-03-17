import { useEffect, useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUser/AddUserForm";
import Navbar from "./components/Navbar";
import ShowUser from "./components/ShowUsers/ShowUser";
import { getBooksList, setBookToList } from "./services/list";


const initialBookData = {
  id: null,
  bookName: "",
  bookAuthor: "",
};

function App() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(initialBookData);
  //load the books from api
  //on submit
   function submitHandler (e) {
    e.preventDefault();
    var id = "id_" + Math.random().toString().slice(10);
    book.id = id;
    setLoading(true);
    setBookToList(book).then((res) => {
      console.log('in submit');
      (async () => {
        let x = await getBooksList();
        setData(x.data)
        setLoading(false);
      }
      )();
    });
    setBook(initialBookData);
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getBooksList().then((res) => {
      if (mounted) {
        setData(res.data);
      }
    setLoading(false)
    });
    return () => (mounted = false);
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
        <ShowUser books={data} isLoading={loading} />
      </header>
    </div>
  );
}

export default App;
