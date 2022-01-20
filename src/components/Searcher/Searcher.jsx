/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import search from '../../assets/icon-search.svg'
import './Searcher.scss'

const ColorMode = (props) => {
  const { colorModeState, setInputUser, notFound } = props
  const form = useRef(null);

  const handleSubmit = async () => {
    const formData = await new FormData(form.current);
    const username = await formData.get('username');
    await setInputUser(username)
  };

  return (
      <form ref={form} className={`form ${
        colorModeState==='LIGHT'
          ?'searcherDark'
          :'searcherLight'
        }` } >
        <figure>
          <img src={search} alt='Search'/>
        </figure>
        <input name="username" placeholder='Search GitHub username...' className='inputSearcher'/>
        <button onClick={() => handleSubmit()} className='buttonSearch' type='button'>Search</button>
        <span className={`results h4 ${notFound ?'notFound' :'found'}`}>no results</span>
      </form>
  )
}

export default ColorMode;
