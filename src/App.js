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

  searchURL = (search, printFilter, bookFilter) => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyC5YGvHPQecNAjy0Fy62DczIu_bkrSK3eI'
    const URL = `${baseURL}q=${search}&filter=${printFilter}&printType=${bookFilter}`
    return URL;
  };

  // url = searchURL(
  //     this.state.searchTerm,
  //     this.state.printType,
  //     this.state.bookType
  //   );


  componentDidMount() {    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          searchResults: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

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
            getSearchTerm={this.getSearchTerm}
            setSearchTerm={this.setSearchTerm}
            printFilter={this.setPrintType}
            bookType={this.setBookType}
          />
          <BookList />
        </header>
      </div>
    );
  }
}

export default App;
