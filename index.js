//get books
const axios = require("axios");
const getBooks = async () => {
  const resp = await axios.get("http://localhost:3000)/books");
  console.log(`request status ${resp.status} ${resp.statusText}`);
  console.log(resp.data);
};
// getBooks();

//get book by id
const getBookById = async(bookId) => {
  try{
    const resp = await axios.get("http://localhost:3000/books/"+bookId)

    console.log(`request status ${resp.status} ${resp.statusText}`);
    console.log(resp.data);

  }catch(err){
    if (err.response.status == 404){
      console.log(`book number #${bookId} does not exist`);
    }else{
      console.log(`something happened with book # ${bookId}`);
    }
  }
}
// getBookById(2)
//add books
const addBook = async(bookInfo) => {
  const resp = await axios.post("http://localhost:3000/books",bookInfo)
  console.log(`request status ${resp.status} ${resp.statusText}`);
  console.log(resp.data);
}
// addBook({"id":5,"name":"wings of fire"})

//delete books
const deleteBook = async(id) => {
  let resp
  try{
    const resp = await axios.delete("http://localhost:3000/books/"+ id)
    console.log(`request status ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
    console.log("successfully deleted #" + id + "  book");
  }
  catch(err){
    if (err.response.status == 404){
      console.log(`book number #${id} does not exist`);
    }else{
      console.log(`something happened with book # ${id}`);
    }
  }
}


// patch method
const updateBookSparse = async(bookId,bookInfo) => {
  try{
    const resp  = await axios.patch("http://localhost:3000/books/"+bookId,bookInfo)
    console.log(`request status ${resp.status} ${resp.statusText}`);
    console.log(resp.data);

  }catch{
    if (err.response.status == 404){
      console.log(`book number #${bookId} does not exist`);
    }else{
      console.log(`something happened with book # ${bookId}`);
    }
  }
}


// put method
const updateBookFull = async(bookId,bookInfo) => {
  try{
    const resp = await axios.put("http://localhost:3000/books/"+bookId,bookInfo)
    console.log(`request status ${resp.status} ${resp.statusText}`);
    console.log(resp.data);
  }catch(err){
    if (err.response.status == 404){
      console.log(`book number #${bookId} does not exist`);
    }else{
      console.log(`something happened with book # ${bookId}`);
    }

  }

}

const main = async() => {
  await getBookById(4);
  await updateBookFull(4,{name:"wise men fear",author:"i dont know"})
  await getBookById(4)
  await updateBookSparse(4,{author:"patric rothflush"})
}
// main()

// axios instance
const test = async () => {

  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
  })
  const resp = await instance.get("/books");
  console.log(resp.data);
}
test()
