import axios from "axios";
const  POST_OPEN_IA = "https://openai80.p.rapidapi.com/chat/completions"
const  RapidAPI_KEY = "7b45dcda73msh917c88207ad4c9ep115680jsnd1f49d3b2564"
const  RapidAPI_HOST = "openai80.p.rapidapi.com"

/*
  data: {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'vous connais daonja54@gmail.com'
      }
    ]
  }
*/
const postDream = async(messages) => {
    try {
        await axios.post(POST_OPEN_IA,{
            model: 'gpt-3.5-turbo',
            messages: messages
        }, {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': RapidAPI_KEY,
                'X-RapidAPI-Host': RapidAPI_HOST
            }
        })
    } catch (error) {
        
    }
}