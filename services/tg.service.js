import axios from "axios";

const config = {
  baseURL: `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/`
}
const http = axios.create(config)

const tgService = {
  sendMessage: async (message) => {
    return await http.post('sendMessage', {
      chat_id: process.env.NEXT_PUBLIC_TELEGRAM_USER_ID,
      text: message,
      parse_mode: 'markdown'
    })
  }
}

export default tgService