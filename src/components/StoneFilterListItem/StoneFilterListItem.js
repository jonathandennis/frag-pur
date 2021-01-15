import React from 'react'


const StoneFilterListItem = ({ value, active, onChange }) => {
    //console.log('StoneFilterListItem: ', value, active)
  
    return (
      <label className="">
        <input type="checkbox" checked={active} data-value={value} onChange={onChange} />
        {value}
      </label>
        
    )
  }

  export default StoneFilterListItem