import React from 'react';
import ReactDOM from 'react-dom';

/* NOTE - 1:
  stateless functional component
  always return JSX
*/

/* NOTE - 2:
JSX rules
  return single element
  div / section / article or fragment
  use camelCase for html attribute
  className instead of class
  close every element
  formatting
  */

// function Greeting() {
//   return (
//     <div className="">
//       <h1>Hello World</h1>
//       <ul>
//         <li>
//           <a href="#">Eai </a>
//         </li>
//         <img src="" alt="" />
//         <input type="text" />
//       </ul>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   );
// };

/* NOTE - 3:
  Nested Component, React Tools
*/

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById('root'));
