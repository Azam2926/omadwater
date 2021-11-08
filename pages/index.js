import Head from 'next/head'
import Image from 'next/image'
import wavePicture from '../public/images/wave.png'

export default function Home () {
  return (
    <>
      <Head>
        <title>Omad Water</title>
      </Head>
      <section className={'px-4 py-14 space-y-4'}>
        <h1 className={'text-5xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'}><span
          className={'text-[#379eff]'}>Suv</span> Yetkazish</h1>
        <p className={'text-center px-4'}>Uyingizga suv yetkazib beramiz. Quyidagi yetkazib berish shaklini to‘ldirish
          kifoya.</p>
        <div className={'relative h-2'}>
          <Image src={wavePicture} layout={'fill'} objectFit={'contain'}/>
        </div>
        <div className={'shadow-omad rounded-xl p-8 m-2 mt-4 text-base'}>
          <form action="#" className={'space-y-4 grid items-center'} method="post">
            <input className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'}
                   type="text"
                   placeholder={'Ismingiz'}/>
            <input className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'}
                   type="text"
                   placeholder={'Manzilingiz'}/>
            <input className={'focus:ring-2 ring-blue-500 outline-none py-3 px-6 border rounded-full mx-auto w-full'}
                   type="text" placeholder={'Telefon ' +
            'raqamingiz'}/>
            <input className={'outline-none py-3 px-6 border rounded-full mx-auto w-full'} type="number"
                   placeholder={'Nechta kapsula'}/>
            <input
              className={'shadow-omad font-semibold outline-none cursor-pointer text-white rounded-full m-auto' +
              ' py-btnY' +
              ' px-btnX'}
              type="reset"
              value={'Buyurtma berish'}
              style={{ 'background': '#67b5ff linear-gradient(120deg, rgba(103, 151, 255, 0) 0%, #4d86ff 100%);' }}/>
          </form>
        </div>
      </section>
    </>
  )
}
