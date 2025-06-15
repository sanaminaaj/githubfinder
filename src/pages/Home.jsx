import React,{useContext, useEffect} from 'react'
import UserResult from '../components/users/UserResult'
import UserSearch from '../components/users/UserSearch'
import GithubContext from '../components/context/github/GithubContext';

export default function Home() {
  const {clearUsers} =useContext(GithubContext);

  useEffect(()=>{
    if(location.pathname ==="/"){
      clearUsers();
    }
  },[]);
  return (
    <div>
      <UserSearch/>
      <UserResult></UserResult>
    </div>
  )
}
