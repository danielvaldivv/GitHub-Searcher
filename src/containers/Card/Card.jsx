import React from 'react';

import './Card.scss'

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const {colorModeState} = props;

  return (
    <section className={`card ${colorModeState==='LIGHT' ?'cardDark' :'cardLight'}` } >
      <section className='userHeaderInfo'>
        octacat
      </section>
      <section className='userMoreInfo'>
        descriptions
      </section>
    </section>
  )
}

export default Card;