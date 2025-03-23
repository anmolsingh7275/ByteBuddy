import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {
  let { input,setInput,previnput,setprevinput,showResult,setshowResult, feature,setfeature,  prevFeature,setPrevFeature} = useContext(dataContext)
  return (
    <div className="chat-page">

       <div className="user">
        {prevFeature == "upimg"? <> <img src={prevUser.imgUrl} alt="" />
        <span> {prevUser.prompt}</span></> : <span> {prevUser.prompt}</span>}
        </div>

        <div className="ai">

        {prevFeature == "genimg"?
         <> 
        <img src={prevUser.imgUrl} alt="" />
         
        {!showResult?<span> Loading </span>:< span> {showResult}</span>}
        </>
        :
        !showResult?<span> Loading </span>

         : <span> {showResult}</span>}

        </div>
    </div>
  )
}

export default Chat