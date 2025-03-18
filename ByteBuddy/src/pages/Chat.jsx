import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'

function Chat() {
  let { input,setInput,previnput,setprevinput} = useContext(dataContext)
  return (
    <div className="chat-page">

       <div className="user">

        <img src="" alt="" />
        <span> {previnput}</span>
        </div>

        <div className="ai">

        <img src="" alt="" />
        <span> ai </span>

        </div>
    </div>
  )
}

export default Chat
