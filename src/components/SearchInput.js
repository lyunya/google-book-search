import React, { Component } from 'react';

class SearchInput extends Component {
    render() {
        return(
            <div className="searchBar">
                <form className="searchForm">
                    <label htmlFor="bar" className="label">
                        Search:
                        <input type="text" placeholder="Enter search keyword" id="input"></input>
                    </label>
                    <button type="submit" className="search-button"
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.search(e.target.value);
                    }}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchInput;