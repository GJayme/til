import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'Neil Gaiman';

const Book = () => {
  const title = 'Absolute Sandman - Vol.1';

  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpghttps://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
