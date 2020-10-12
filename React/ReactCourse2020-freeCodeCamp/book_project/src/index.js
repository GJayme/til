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
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  //Attributes, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}> {title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
