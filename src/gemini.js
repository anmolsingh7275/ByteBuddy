import { prevUser } from "./context/UserContext"

const Api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCaK4cp125Jti1eg-HbkWkrb40oAwyLh6A"

export  async function generateResponse(){
    let RequestOption = { 
        method : "POST",
        Headers : {'Content-Type ': 'application/json'},
        body:JSON.stringify({
          "contents": [{
    "parts":[
      {"text": prevUser.prompt},
      prevUser.data?[ {
        "inline_data": {
          "mime_type":prevUser.mime_type,
          "data": prevUser.data
        }
      }]:[]
     
    ]
  }]    
        } )
    } 
    try {
       let response = await  fetch(Api_url,RequestOption)
       let data =  await response.json()
       let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*(\S*)/g, '$1').
       trim()

       return apiResponse;
       
    } catch (error) {
        
    }
}