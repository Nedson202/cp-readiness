import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <div className="todo-style">
          <li key={index}>{item}</li>
        </div>
      )
    }
  </ul>
);

export default List;
