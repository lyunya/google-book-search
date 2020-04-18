import React, { Component } from 'react';
import BookItem from './BookItem';

class BookList extends Component{
    render(){
        return (
          <section>
            <h2> Book Results </h2>
            <ul>
              <BookItem books={this.props.books} />
            </ul>
          </section>
        );
    }
}

export default BookList;