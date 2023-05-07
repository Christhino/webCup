import axios from "axios"
import { RapidAPI_HOST, RapidAPI_KEY } from "."

export const rapidApi = axios.create({
    baseURL: "https://openai80.p.rapidapi.com/"
})

rapidApi.defaults.headers.Accept = 'application/json'
    rapidApi.interceptors.request.use(
      async (config) => {
        config.headers= {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-RapidAPI-Key': RapidAPI_KEY,
            'X-RapidAPI-Host': RapidAPI_HOST,
          },
        console.log("config",config.headers)
        return config
      },
      (err) => Promise.reject(err)
)