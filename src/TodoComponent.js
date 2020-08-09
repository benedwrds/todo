import React from 'react';

const TodoComponent = (props) => {
  return (
    <div>
    <li>{props.listValue}</li>
    <button onClick={props.deleteButton}>delete</button>
    </div>
  )
}
export default TodoComponent;