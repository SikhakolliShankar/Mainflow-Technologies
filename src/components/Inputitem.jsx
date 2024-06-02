import React from 'react'

function Inputitem({handleChange, handleClick, item, warn, setWarn}) {

  function handledesc() {
    setWarn(false);
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" required className="form-control" placeholder='Enter Todo' onFocus={handledesc} onChange={handleChange} value={item} autoFocus/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Add</button>
      </div>
      <p style={{color:"red", display: warn? "inline": "none" }}>Enter any description</p>
    </div>
  );
}

export default Inputitem;