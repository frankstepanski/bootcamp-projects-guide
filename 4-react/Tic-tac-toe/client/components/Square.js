import React from 'react';

//  renders a single <button>
//  Square gets two props from Board (onClick and value)
//  Square is now a controlled components (because it has no state); Board has full control over them.
function Square({value, onClick}) {

    return (
      <button 
        className="square"
        onClick={()=> onClick()}
      >
        {value}
      </button>
    );
}

export default Square;