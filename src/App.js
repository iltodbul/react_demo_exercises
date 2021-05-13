import './App.css';
import './Footer.js';
import './components/Heading';
import Heading from './components/Heading';
import Main from './components/Main';
import BookList from './components/BookList';
import Likes from './components/Counter';

const libraryOwner = 'Iliya'

const booksData = [
  { title: 'Title 1', description: 'description 1' },
  { title: 'Title 2', description: 'description 2' },
  { title: 'Title 3' },
]; // For demo. This information can be fetched from database.

function App() {
  return (
    <div className="App">
      <Heading name={libraryOwner}></Heading>
      <Main count={booksData.length} />

      <Likes />

      <BookList books={booksData} />
    </div>
  );
}

export default App;
