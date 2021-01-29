import React from 'react'

import './StoneFilterListItem.css'

const StoneFilterListItem = ({ value, active, onChange }) => {
    //console.log('StoneFilterListItem: ', value, active)
  
    return (
      <label className="stone__nav-var">
        <input type="checkbox" checked={active} data-value={value} onChange={onChange} />
        {value}
        <span className="checkmark"></span>
      </label>
        
    )
  }

  export default StoneFilterListItem