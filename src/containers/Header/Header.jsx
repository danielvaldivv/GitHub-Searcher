import React from 'react';
import ColorMode from '../../components/ColorMode/ColorMode';

import './Header.scss'

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const {colorModeState, setColorModeState} = props;

  return (
    <header className='header'>
      <h2 className='h2'>
        <span className={colorModeState==='LIGHT' ?'appDark' :'appLight'}>
          devfinder
        </span>
      </h2>
      <ColorMode colorModeState={colorModeState} setColorModeState={setColorModeState}/>
    </header>
  )
}

export default Header;
