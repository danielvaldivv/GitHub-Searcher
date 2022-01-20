import React, { useEffect, useState } from 'react'
import Header from './containers/Header/Header'
import Searcher from './components/Searcher/Searcher'
import Card from './containers/Card/Card'

import { getGitHubUsers } from './services/getUsers'

const App = () => {
  const [colorModeState, setColorModeState] = useState('LIGHT');
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const gettingUsers = async (user) =>{
    const userResponse = await getGitHubUsers(user);

    if (userState==='octocat'){
      localStorage.setItem('octocat', userState);
    }

    if(userResponse.message==='Not Found') {
      const { octocat } = localStorage;
      setInputUser(octocat)
      setNotFound(true)
    } else {
      setUserState(userResponse);
    }

    if(userResponse.message !== 'Not Found' && inputUser !== 'octocat'){
      setNotFound(false)
    }
  }

  useEffect(() => {
    gettingUsers(inputUser);
    },
    [inputUser],
  );


  return (
  <div className={`app ${colorModeState==='LIGHT' ?'appDark' :'appLight'}`}>
    <Header colorModeState={colorModeState} setColorModeState={setColorModeState}/>
    <Searcher notFound={notFound} colorModeState={colorModeState} setInputUser={setInputUser} />
    <Card userState={userState} colorModeState={colorModeState}/>
  </div>
  )
}

export default App