import Head from 'next/head'
import Image from 'next/image'
import wavePicture from '../public/images/wave.png'
import DeliveryForm from "../components/deliveryForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omad Water</title>
      </Head>
      <section className={'px-4 py-14 space-y-4'}>
        <h1 className={'text-5xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'}>
          <span className={'text-[#379eff]'}>Suv</span> Yetkazish
        </h1>
        <p className={'text-center text-xl leading-normal px-4'}>
          Uyingizga suv yetkazib beramiz. Quyidagi yetkazib berish formasini to‘ldirish kifoya.
        </p>
        <div className={'relative h-2'}>
          <Image src={wavePicture} layout={'fill'} objectFit={'contain'}/>
        </div>
        <div className={'shadow-omad rounded-xl p-8 m-2 mt-4 text-base'}>
          <DeliveryForm/>
        </div>
      </section>

    </>
  )
}
