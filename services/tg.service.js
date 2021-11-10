import axios from "axios";

const API = `https://api.telegram.org/bot2140562485:AAEE9FZSET9CQFYWXElRJr9n_tlV0Bxi3Y8/`


const config = {
  baseURL: API
}
const http = axios.create(config)

const tgService = {
  sendMessage: async (message) => {
    return await http.post('sendMessage', {
      chat_id: 1958753602,
      text: message,
      parse_mode: 'markdown'
    })
  }
}

export default tgService