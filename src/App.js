import React, { Component } from 'react';
import SearchForm from "./components/SearchForm"
import BookList from './components/BookList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: "",
      bookType: null,
      searchTerm: "",
      searchResults: [],
      error: null,      
    };
  }
    bookSearch = (event) => {
      event.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?key=AIzaSyC5YGvHPQecNAjy0Fy62DczIu_bkrSK3eI&q=${this.state.searchTerm}&printType=${this.state.printType}&filter=${this.state.bookType}`
    )
      .then((response) => response.json())
      .then(data => {
        data.items.map(items => {
        const bookInfo = {
          title: items.volumeInfo.title,
          author: items.volumeInfo.authors,
          image: items.volumeInfo.imageLinks.smallThumbnail,
          price: items.saleInfo.saleability,
          description: items.volumeInfo.description
        };
        this.setState(
          { searchResults: [...this.state.searchResults, bookInfo] }
          );
        return bookInfo        
      })      
      });
  }


  setSearchTerm = e => {    
    let val = e.target.value
    this.setState({
      searchTerm: val,
    });
  }

  setBookType = e => {
    let val = e.target.value
    console.log(val, "val");
    if (val === "no-filter") {
      this.setState({
        bookType: null,
      });
    } else {
      this.setState({
        bookType: val,
      });
    }
  }

  setPrintType = e => {
    let val = e.target.value
    this.setState({
      printType: val,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchForm
            bookSearch={this.bookSearch}  
            setSearchTerm={this.setSearchTerm}
            printFilter={this.setPrintType}
            bookType={this.setBookType}
          />
          <BookList books={this.state.searchResults} />
        </header>
      </div>
    );
  }

}
export default App;
