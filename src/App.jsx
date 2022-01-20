import React, { useEffect, useState } from 'react'
import Header from './containers/Header/Header'
import Searcher from './components/Searcher/Searcher'
import Card from './containers/Card/Card'

import { getGitHubUsers } from './services/getUsers'

const App = () => {
  const [colorModeState, setColorModeState] = useState('LIGHT')
  const [inputUser, setInputUser] = useState('octocat')
  
  const gettingUsers = async () =>{
    const user = await getGitHubUsers(inputUser)
    console.log(user);
  }
  
  useEffect(() => {
    gettingUsers();
    },
    [inputUser],
  );

  return (
  <div className={colorModeState==='LIGHT' ?'appDark' :'appLight'}>
    <Header colorModeState={colorModeState} setColorModeState={setColorModeState}/>
    <Searcher colorModeState={colorModeState} />
    <Card colorModeState={colorModeState}/>
  </div>
  )
}

export default App