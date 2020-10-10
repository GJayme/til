import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//Setup vars
const books = [
  {
    author: 'Neil Gaiman',
    title: 'Absolute Sandman - Vol.1',
    img:
      'https://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpghttps://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpg',
  },
  {
    author: 'Doug Moench e Kelley Jones',
    title: 'Batman, Vol.1',
    img: 'https://m.media-amazon.com/images/I/819ZMpwTNOL._AC_UY218_.jpg',
  },
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => <h1>{name}</h1>);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
