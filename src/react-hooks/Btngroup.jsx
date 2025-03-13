import cn from 'classnames';
import React, { useState } from 'react';

const Btngroup = () => {

  console.log('BTN')
  const [activeButton, setActiveButton] = useState(null);

  const getClassName = (position) => cn(
    'btn btn-secondary',
    position,
    {active: activeButton === position}
  )

  return (
    <div className="btn-group" role="group">
      <button type='button' className={getClassName('left')} onClick={() => {setActiveButton('left')}}>Left</button>
      <button type='button' className={getClassName('right')} onClick={() => {setActiveButton('right')}}>Right</button>
    </div>
  )
}

export default Btngroup;
