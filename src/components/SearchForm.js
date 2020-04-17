import React, { Component } from 'react';


class SearchForm extends Component {
  setSearchTerm(event) {
    // event.preventDefault();
    this.setState({
      searchterm: event.target.value,
    });
  }
 
  render() {
    return (
      <>
        <div className="searchForm">
          <form>
            <label htmlFor="Search">Search: </label>
            <input
              type="text"
              name="searchTerm"
              id="searchTerm"
              placeholder="Enter Search Term"
              onChange={this.props.setSearchTerm}
            />
            <button type="submit" onClick={(event) => this.props.bookSearch(event)}>
              Search
            </button>
          </form>
        </div>
        <div>
          <label htmlFor="book-type" name="book-type">
            Book Type:
          </label>
          <select onChange={this.props.bookType}>
            <option value="no-filter">None</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="ebooks">ebooks</option>
            <option value="partial">partial</option>
            <option value="full">full</option>
          </select>
          <label htmlFor="print-type" name="print-type">
            Print Type:
          </label>
          <select onChange={this.props.printFilter}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </div>
      </>
    );
  }
}

export default SearchForm;