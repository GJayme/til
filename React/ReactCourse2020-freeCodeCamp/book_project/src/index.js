import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//Setup vars
const books = [
  {
    id: 1,
    author: 'Neil Gaiman',
    title: 'Absolute Sandman - Vol.1',
    img:
      'https://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpghttps://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpg',
  },
  {
    id: 2,
    author: 'Doug Moench e Kelley Jones',
    title: 'Batman, Vol.1',
    img: 'https://m.media-amazon.com/images/I/819ZMpwTNOL._AC_UY218_.jpg',
  },
  {
    id: 3,
    author: 'C.S.Lewis',
    title: 'As Crônicas de Nárnia. Brochura',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71yJLhQekBL._AC_UL200_SR200,200_.jpg',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
