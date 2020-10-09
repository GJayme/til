import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//Setup vars
const firstBook = {
  author: 'Neil Gaiman',
  title: 'Absolute Sandman - Vol.1',
  img:
    'https://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpghttps://m.media-amazon.com/images/I/61xQCxJ1SqL._AC_UY218_.jpg',
};

const secondBook = {
  author: 'Doug Moench e Kelley Jones',
  title: 'Batman, Vol.1',
  img: 'https://m.media-amazon.com/images/I/819ZMpwTNOL._AC_UY218_.jpg',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
          elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis,
          espiritis santis.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
