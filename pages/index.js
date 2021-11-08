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
          <form action="/" className={'space-y-4 grid items-center'} method="post">
            <input className={'outline-none py-4 px-6 border rounded-full mx-auto w-full'} type="text"
                   placeholder={'Ismingiz'}/>
            <input className={'outline-none py-4 px-6 border rounded-full mx-auto w-full'} type="text"
                   placeholder={'Manzilingiz'}/>
            <input className={'outline-none py-4 px-6 border rounded-full mx-auto w-full'} type="text" placeholder={'Tel' +
            ' raqamiz'}/>
            <input className={'outline-none py-4 px-6 border rounded-full mx-auto w-full'} type="number" placeholder={'Kapsula'}/>
            <input className={'outline-none cursor-pointer bg-bt text-white shadow-omad rounded-full'} type="submit" value={'Buyurtma' +
            ' berish'}/>
          </form>
        </div>
      </section>
    </>
  )
}
