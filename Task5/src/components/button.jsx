import React from 'react'

function Button({show, value}) {
  return (
    <div>
        <button 
            className = "b" 
            onClick={() => show(value)}>{value}</button>
    </div>
  )
}

export default Button;