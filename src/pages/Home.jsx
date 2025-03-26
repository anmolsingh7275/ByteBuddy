import React, { useContext } from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { IoImagesSharp } from "react-icons/io5";
import { BsChatRightDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { dataContext, prevUser, user } from '../context/UserContext';
import Chat from './Chat';
import { generateResponse } from '../gemini';
import { query } from '../huggingFace';

function Home() {
  let {startRes,setStartRes,popUp, setPopUp, input,setInput,feature,setfeature,showResult,setshowResult,prevFeature,setPrevFeature,genImgUrl,setGenImgurl} = useContext(dataContext)
  async function handlesubmit(e){
 
    setStartRes(true)
    setPrevFeature(feature)
    setfeature("chat")
    setshowResult("")
   prevUser.data = user.data,
   prevUser.mime_type = user.mime_type,
   prevUser.imgUrl = user.imgUrl,
   prevUser.prompt = input
   user.data = null
   user.mime_type = null 
   user.imgUrl = null
    setInput("")
    let result = await  generateResponse()
    setshowResult(result)
    setfeature("chat")
   
    
  }

  function handleImage(e){
     setfeature("upimg")
     let file = e.target.files[0];
     let reader = new FileReader()
     reader.onload =(event)=>{
        let base64 = event.target.result.split(",")[1]
        user.data = base64
        user.mime_type = file.type
        user.imgUrl = `data:${user.mime_type};base64,${user.data}`
     }
     reader.readAsDataURL(file)
    }
    async function handleGenerateImg(){
      setStartRes(true)
      setPrevFeature(feature)
      prevUser.prompt = input
    let result = await query ().then((e)=>{
      let url = URL.createObjectURL(e)
     setGenImgurl(url)
     
    })

    setInput("")
    setfeature("chat")

     
  }
  return (
  <div className="Home">
   <nav>
    <div className="logo" onClick={()=>{
      setStartRes(false)
      setfeature("chat")
      user.data = null
      user.mime_type = null 
      user.imgUrl = null
      setPopUp(false)
    }}>
        ByteBuddy
    </div>
   </nav>
   <input type="file"  accept='image/*'hidden id = 'inputImg' onChange={ handleImage}/>
   {!startRes? <div className="hero">
    <span id="tag">What I Can Help with ?</span>
    <div className="cate">
        <div className="upimg" onClick={()=>
          document.getElementById("inputImg").click()
         }>
        <IoImagesSharp />
        <span>Upload Image </span>
        </div>
        <div className="genimg" onClick={()=>
          
          setfeature("genimg")}>
        <RiImageAiLine />
        <span>Generate Image </span>
        </div>
        <div className="chat" onClick={()=>setfeature("chat")}>
        <BsChatRightDots />
        <span>Let's Chat</span>
        </div>
    </div>
   </div> : <Chat/>}

   
   
   <form className="input-box" onSubmit={(e)=>{
       e.preventDefault()
    if(input){
      if(feature == 'genimg'){
        handleGenerateImg()
      }else{
        handlesubmit(e)
      }
    
    }   
   }
    }>

      <img src= {user.imgUrl} alt="" id="im" />
      
     
     {popUp? <div className="pop-up">
      <div className="select-up"onClick={()=>{
        setPopUp(false)
          document.getElementById("inputImg").click()
        }} >
      <IoImagesSharp />
      <span>Upload Image </span>
      </div>

      <div className="select-gen" onClick={()=>

        {
          setPopUp(false)
          setfeature("chat")
          setfeature("genimg")}}>
      <RiImageAiLine />
      <span>Generate Image </span>
      </div>
    </div> : null}
    


    <div id="add" onClick={() => setPopUp(prev => !prev)}>
  {feature === "genimg" ? <RiImageAiLine  id= "genimg"/> : <IoMdAdd />}
</div>

    <input type="text" placeholder='Ask Something ...'  onChange={(e)=>setInput(e.target.value)} value={input}/>
    {input? <button id="submmit">
    <FaArrowUp />
     </button>: null}
   </form>
  </div>
  )
}

export default Home