import {useForm} from "react-hook-form";

export default function DeliveryForm() {
  const {register, handleSubmit} = useForm()

  const sendForm = (e) => {
    console.dir(e)
  }
  return (
    <>
      <form action="#" className={'grid items-center space-y-4'} onSubmit={handleSubmit(sendForm)}>
        <input {...register('name', {pattern: /^[A-Za-z']+$/i})} className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'} required type="text" placeholder={'Ismingiz'}/>
        <input {...register('address')} className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'} required type="text" placeholder={'Manzilingiz'}/>
        <input {...register('phone_number', {pattern: /^[0-9+]+$/i})} className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'} required type="text" placeholder={'Telefon raqamingiz'}/>
        <input {...register('amount', {pattern: /^[0-9]+$/i})} className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'} required type="number" placeholder={'Nechta kapsula'}/>
        <input className={'bg-omad-btn shadow-omad font-semibold outline-none cursor-pointer text-white rounded-full m-auto py-btnY px-btnX'} type="submit" value={'Buyurtma berish'}/>
      </form>
    </>
  )
}