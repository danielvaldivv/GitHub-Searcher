import React, { useState } from 'react';
import darkMode from '../../assets/icon-moon.svg'
import lightMode from '../../assets/icon-sun.svg'

import './ColorMode.scss'

const ColorMode = (props) => {
  // eslint-disable-next-line react/prop-types
  const {colorModeState, setColorModeState} = props;

  const [imgMode, setImgMode] = useState(lightMode);

  const handleSwitchColorMode = () => {
    if (colorModeState==='LIGHT') {
      setColorModeState('DARK')
      setImgMode(darkMode)

    } else{
      setColorModeState('LIGHT')
      setImgMode(lightMode)
    }
  };

  return (
    <button className='buttonSwitch' type='button' onClick={() => handleSwitchColorMode()}>
      <h4 className='h4'>
        <span className={colorModeState==='LIGHT' ?'appDark' :'appLight'}>
          {colorModeState}
        </span>
      </h4>
      <figure>
        <img src={imgMode} alt={colorModeState} />
      </figure>
    </button>
  )
}

export default ColorMode;
