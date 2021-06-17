import { Route, Switch, NavLink, Link } from 'react-router-dom';

import './App.css';
import './Footer.js';
import './components/Heading';
import Heading from './components/Heading';
import Main from './components/Main';
import BookList from './components/BookList';
import Likes from './components/Likes';
import Footer from './Footer.js';
import AddBook from './components/AddBook'

const libraryOwner = 'Iliya';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Heading name={libraryOwner}></Heading>
        <Main />
        <Likes />
        <Footer />
      </Route>
      <Route path="/books" component={BookList}></Route>
      <Route path="/add-book" component={AddBook}></Route>
    </div>
  );
}

export default App;
