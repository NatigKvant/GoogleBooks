import './App.css';
import axios from 'axios'
import {useState} from 'react'


function App() {

const [book,setBook] = useState("")
const [result,setResult] = useState([])
const [apiKey,setApiKey] = useState("AIzaSyCltc6bmTjS0kAOX1uVOs2vFB5JIzfArS8")


  function handleChange(e){
   const book = e.target.value

   setBook(book)
  }
  
  function handleSubmit(e) {
  e.preventDefault()
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=?`+ book +`&key=` + apiKey)
  .then(data => {
     setResult(data.data.items)
    })
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input onChange={handleChange}  type="text" className="form-control" placeholder="search books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
      {!result ? <p>Loading . . .</p> : result.map(book => (
        <img src = {book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      ))}
  </div>
  );
}

export default App;
