import React from 'react';
import ReactDOM from 'react-dom';

import Book from './Book';
import { data } from './books';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
