import React, { Component } from "react";

class BookItem extends Component {
  render() {
    const bookItem = this.props.books

    const displayBookInfo = bookItem.map((item, index) => {
     return (
      <li key={index}>
        <img src={item.image} alt="book" />
        <h2>{item.title}</h2>
        <h3>{item.author}</h3>
        <h4>{item.description}</h4>
      </li>
    )
     })

    return (
      <div className='bookItems'>
        {displayBookInfo}
      </div>
    )
  }
}

export default BookItem;
