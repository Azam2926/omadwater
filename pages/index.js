import Head from 'next/head'
import Image from 'next/image'
import wavePicture from '../public/images/wave.png'
import waveDividerPicture from '../public/images/wave-divider.png'
import waterBottlePicture from '../public/images/water-bottle.png'
import DeliveryForm from "../components/deliveryForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omad Water</title>
      </Head>
      <section className='bg-section'>
        <div className='px-4 py-14 space-y-4'>
          <h1 className='text-5xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'>
            <span className='text-[#379eff]'>Suv</span> Yetkazish
          </h1>
          <p className='text-center text-xl leading-normal px-4'>
            Uyingizga suv yetkazib beramiz. Quyidagi yetkazib berish formasini to‘ldirish kifoya.
          </p>
          <div className='relative h-2'>
            <Image src={wavePicture} layout={'fill'} objectFit={'contain'}/>
          </div>
          <div className='shadow-omad rounded-xl p-8 m-2 mt-4 text-base'>
            <DeliveryForm/>
          </div>
        </div>
        <div className='my-4'>
          <Image src={waveDividerPicture} layout={'responsive'}/>
        </div>
      </section>
      <section className='bg-section'>
        <div className="space-y-4 py-8">
          <h1 className='text-4xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'>
            Suv <span className='text-[#379eff]'>Tarkibi</span>
          </h1>
          <p className='text-center text-base leading-none font-semibold tracking-[2px] uppercase'>Nimalardan tashkil topgan?</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap p-[10px] space-y-8">
            <div className="flex flex-col pt-16 pr-12 text-right bg-drop-filled bg-right-top bg-no-repeat bg-right-drop-size">
              <div className="space-y-2">
                <h6 className='font-bold text-xl'>Kaltsiy Ca2+</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>240 mg/L</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> Bizning tanamizdagi kaltsiyning taxminan 99% suyaklarimiz va tishlarimizda.
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-16 pr-12 text-right bg-drop-filled bg-right-top bg-no-repeat bg-right-drop-size">
              <div className="space-y-2">
                <h6 className='font-bold text-xl'>Natriy Na+</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>5.2 mg/L</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> Bu mushaklar va nervlarning to'g'ri ishlashi uchun muhim komponent.
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-16 pr-12 text-right bg-drop-filled bg-right-top bg-no-repeat bg-right-drop-size">
              <div className="space-y-2">
                <h6 className='font-bold text-xl'>Nitrat NO3-</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>4.4 mg/L</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> Nitrat miqdori 10 mg/l dan past bo'lgan suv ichish salomatlik uchun juda yaxshi.
                </p>
              </div>
            </div>
          </div>
          <div className='relative h-[285px]'>
            <Image src={waterBottlePicture} layout={'fill'} objectFit={'contain'}/>
          </div>
          <div className="flex flex-wrap p-[10px]">
            <div className="flex flex-col pt-16 pl-12 bg-drop-filled bg-top-left bg-no-repeat bg-left-drop-size">
              <div className="space-y-2">
                <h6 className='font-bold text-xl'>Magniy Mg2+</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>42 mg/L</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> Magniy tananing sog'lom bo'lishi uchun zarur bo'lgan ozuqaviy moddadir.
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-16 pl-12 bg-drop-filled bg-top-left bg-no-repeat bg-left-drop-size">
              <div className="space-y-2">
                <h6 className='font-bold text-xl'>Sulfat SO4(2-)</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>400 mg/L</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> Sulfat hujayralardagi eng muhim makronutrientlardan biridir.
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-16 pl-12 bg-drop-filled bg-top-left bg-no-repeat bg-left-drop-size">
              <div className="space-y-2">
                <h6 className='font-bold text-xl'>Bikarbonat</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>384 mg/L</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> Bikarbonat antasid bo'lib, oshqozon ekşimesi va kislotali ovqat hazm qilishni bartaraf etish uchun ishlatiladi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <Image src={waveDividerPicture} layout={'responsive'}/>
        </div>

      </section>
    </>
  )
}
