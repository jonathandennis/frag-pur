import React from 'react'


const StoneFilterListItem = ({ type = "checkbox", id, name, value, checked = false, onChange }) => {
    console.log('Filter Item: ', id, checked)
  
    return (
      <input type={type} id={id} name={name} value={value} checked={checked} onChange={onChange} />
    )
  }

  export default StoneFilterListItem