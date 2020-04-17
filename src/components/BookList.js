import React, { Component } from 'react';
import BookItem from './BookItem';

class BookList extends Component{
    render(){
        return(
        <section>
            <ul>
                {/* <BookItem /> */}
                <h1> hello</h1>
                {console.log(this.props.books)}
            </ul>
        </section>
        )
    }
}

export default BookList;