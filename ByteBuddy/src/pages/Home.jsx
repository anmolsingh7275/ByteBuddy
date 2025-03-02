import React from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { IoImagesSharp } from "react-icons/io5";
import { BsChatRightDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
function Home() {
  return (
  <div className="Home">
   <nav>
    <div className="logo">
        ByteBuddy
    </div>
   </nav>
   <div className="hero">
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
   </div>
   <form className="input-box">
    <button id="add">
    <IoMdAdd />
    </button>
    <input type="text" placeholder='Ask Something ...' />
    <button id="submmit">
    <FaArrowUp />
     </button>
   </form>
  </div>
  )
}

export default Home
