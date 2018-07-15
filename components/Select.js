import React from 'react';

const Select = (props) => {

  const list = props.listItems.map((el, i)=>(
    <option value={el}>{el}</option>
  ));

  return (
    <div>
      <select>
        {
          list
        }
      </select>
    </div>
  )
};

export default Select;



