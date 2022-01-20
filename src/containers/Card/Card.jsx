/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import Description from '../Description/Description';

import './Card.scss'

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const {colorModeState, userState} = props;
  const {
    avatar_url,
    name,
    login,
    created_at,
  } = userState;

  return (
    <section className={`card ${colorModeState==='LIGHT' ?'cardDark' :'cardLight'}` } >
        <figure className='avatar'>
          <img src={avatar_url} alt={`Avatar ${name}`} />
        </figure>
        <h1 className={`name h1 ${colorModeState!=='LIGHT' ?'modeDark' :'modeLight'}`} >{name}</h1>
        <h4 className='date h4'>{created_at}</h4>
        <span className='username h4' >{`@${login}`}</span>

        <Description userState={userState} />
    </section>
  )
}

export default Card;