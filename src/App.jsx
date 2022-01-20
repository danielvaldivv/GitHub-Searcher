import React, { useEffect, useState } from 'react'
import Header from './containers/Header/Header'
import Searcher from './components/Searcher/Searcher'
import Card from './containers/Card/Card'

import { getGitHubUsers } from './services/getUsers'

const App = () => {
  const [colorModeState, setColorModeState] = useState('LIGHT')
  const [inputUser, setInputUser] = useState('danielvaldivv')
  const [userState, setUserState] = useState(inputUser)

  const gettingUsers = async (user) =>{
    const userResponse = await getGitHubUsers(user)
    setUserState(userResponse)
  }

  useEffect(() => {
    gettingUsers(inputUser);
    },
    [inputUser],
  );


  return (
  <div className={`app ${colorModeState==='LIGHT' ?'appDark' :'appLight'}`}>
    <Header colorModeState={colorModeState} setColorModeState={setColorModeState}/>
    <Searcher colorModeState={colorModeState} setInputUser={setInputUser} />
    <Card userState={userState} colorModeState={colorModeState}/>
  </div>
  )
}

export default App