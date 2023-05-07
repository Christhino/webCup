import axios from "axios";
import { rapidApi } from "./base";
const  POST_OPEN_IA = "chat/completions"
export const  RapidAPI_KEY = "7b45dcda73msh917c88207ad4c9ep115680jsnd1f49d3b2564"
export const  RapidAPI_HOST = "openai80.p.rapidapi.com"


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

export const postDream = async(messages) => {
    const options = {
        method: 'POST',
        url: POST_OPEN_IA,
        data: {
          "model": 'gpt-3.5-turbo',
          "messages": [
            {
              "role": 'user',
              "content": messages
            },
          ]
        }
      };
      
      try {
          const response = await rapidApi.request(options);
          console.log(response);
      } catch (error) {
            if (error.response) {
                // Request made but the server responded with an error
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // Request made but no response is received from the server.
                console.log(error.request);
            } else {
                // Error occured while setting up the request
                console.log('Error', error.message);
            }
        }
}

    
/*const postDream = async(messages) => {
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
*/