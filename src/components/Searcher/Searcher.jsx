/* eslint-disable react/prop-types */
import React from 'react';
import search from '../../assets/icon-search.svg'
import './Searcher.scss'

const ColorMode = (props) => {
const { colorModeState } = props

  return (
      <form className={`form ${
        colorModeState==='LIGHT'
          ?'searcherDark'
          :'searcherLight'
        }` } >
        <figure>
          <img src={search} alt='Search'/>
        </figure>
        <input placeholder='Search GitHub username...' className='inputSearcher'/>
        <button className='buttonSearch' type='button'>Search</button>
      </form>
  )
}

export default ColorMode;
