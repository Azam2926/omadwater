import { useForm } from "react-hook-form";
import tgService from "../services/tg.service";
import _ from 'lodash'

export default function DeliveryForm() {
  const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = useForm()
  const sendForm = async (data) => {
    let message = ''
    Object.keys(data).forEach((key) => message += `*${_.startCase(key)}*: ${data[key]} \n`)
    return await tgService.sendMessage(message)
      .catch((err) => {
        console.log(err)
      })
  }

  return isSubmitSuccessful ? (
    <h1 className='animate-fade-in text-3xl text-[#379eff] font-bold tracking-[3px]  text-center leading-tight'>Buyurtmangiz uchun rahmat! </h1>
  ) : (
    <form className='grid items-center space-y-4' onSubmit={handleSubmit(sendForm)}>

      <input autoComplete={'name'} className='input' required {...register('ismi', { pattern: /^[A-Za-z']+$/i, required: true, maxLength: 20 })} placeholder={'Ismingiz'} />
      <input autoComplete={'street-address'} className='input' required {...register('manzili')} placeholder={'Manzilingiz'} />
      <input autoComplete={'tel'} className='input' required {...register('tel_nomeri', { pattern: /^[0-9+]+$/i })} placeholder={'Telefon raqamingiz'} />
      <input className='input' required {...register('soni', { pattern: /^[0-9]+$/i })} type="number" placeholder={'Nechta kapsula'} />

      <button disabled={isSubmitting} className='flex hover:bg-black bg-omad-btn shadow-omad font-semibold outline-none focus:ring-2 transition-all duration-200 hover:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer text-white rounded-full m-auto py-btnY px-btnX' type="submit">
        {isSubmitting ? (
          <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : <span>Buyurtma berish</span>}
      </button>

    </form>
  )
}