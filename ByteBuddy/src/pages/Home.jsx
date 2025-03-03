import React, { useContext } from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { IoImagesSharp } from "react-icons/io5";
import { BsChatRightDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import Chat from './Chat';
function Home() {
  let {startRes,setStartRes,popUp, setPopUp} = useContext(dataContext)
  async function handlesubmit(e){
    e.preventDefault()
    setStartRes(true)
  }
  return (
  <div className="Home">
   <nav>
    <div className="logo">
        ByteBuddy
    </div>
   </nav>
   {!startRes? <div className="hero">
    <span id="tag">What I Can Help with ?</span>
    <div className="cate">
        <div className="upimg">
        <IoImagesSharp />
        <span>Upload Image </span>
        </div>
        <div className="genimg">
        <RiImageAiLine />
        <span>Generate Image </span>
        </div>
        <div className="chat">
        <BsChatRightDots />
        <span>Let's Chat</span>
        </div>
    </div>
   </div> : <Chat/>}
   
   <form className="input-box" onSubmit={(e)=>handlesubmit(e)}>
     
     {popUp? <div className="pop-up">
      <div className="select-up">
      <IoImagesSharp />
      <span>Upload Image </span>
      </div>

      <div className="select-gen">
      <RiImageAiLine />
      <span>Generate Image </span>
      </div>
    </div> : null}
    


    <div id="add" onClick={()=>{
      setPopUp(prev=>!prev)
    }}>
    <IoMdAdd />
    </div>
    <input type="text" placeholder='Ask Something ...' />
    <button id="submmit">
    <FaArrowUp />
     </button>
   </form>
  </div>
  )
}

export default Home
