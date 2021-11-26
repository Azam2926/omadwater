import Head from 'next/head'
import Image from 'next/image'
import wavePicture from '../public/images/wave.png'
import waveDividerPicture from '../public/images/wave-divider.png'
import waterBottlePicture from '../public/images/water-bottle.png'
import microscopePicture from '../public/images/microscope.png'
import flaskPicture from '../public/images/flask.png'
import glassPicture from '../public/images/glass.png'
import certificationPicture from '../public/images/certification.png'
import deliveryServicePicture from '../public/images/delivery-service.png'
import curveWhilePicture from '../public/images/curve-while.png'
import freePicture from '../public/images/free.png'
import scheadulePicture from '../public/images/scheadule.png'
import timePicture from '../public/images/time.png'
import DeliveryForm from "../components/deliveryForm";

const story_boxes = [
  {
    picture: microscopePicture,
    text: 'Laboratoriya nazorati'
  },
  {
    picture: flaskPicture,
    text: 'Ajoyib kompozitsiya'
  },
  {
    picture: glassPicture,
    text: 'Nano filtrlash darajasi'
  },
  {
    picture: certificationPicture,
    text: 'Sifat sertifikatlari'
  },
]
const delivery_boxes = [
  {
    picture: freePicture,
    text: 'Tekin yetkazish'
  },
  {
    picture: scheadulePicture,
    text: 'Haftada 7 kun'
  },
  {
    picture: timePicture,
    text: '00:00 - 24:00'
  },
]

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
          <div id='order' className='relative h-2'>
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
          <div className='relative h-[285px] my-12'>
            <Image src={waterBottlePicture} layout={'fill'} objectFit={'contain'}/>
          </div>
          <div className="flex flex-wrap p-[10px] space-y-8">
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
      <section className="bg-section">
        <div className='px-4 py-14 space-y-8'>
          <h2 className='text-4xl font-bold font-dosis tracking-[1px] uppercase text-center leading-tight'>
            <span className='text-[#379eff]'>Bizning</span> hikoya
          </h2>
          <div className='relative h-2'>
            <Image src={wavePicture} layout={'fill'} objectFit={'contain'}/>
          </div>
          <p className='text-center text-xl leading-normal px-4'>
            Bizning kompaniyamiz 2008 yilda tashkil etilgan. Suv markasi shishasi ichish, ovqat pishirish, mashg'ulotlar va hatto bolalar uchun juda yaxshi. Mahsulot 50 ta davlatda sertifikatlangan.
          </p>
        </div>
        <div className="flex flex-wrap">
          {story_boxes.map(box => (
            <div className="flex flex-col p-8 space-y-8 w-1/2">
              <div className="bg-white shadow-omad-story rounded-full p-[30%] text-center">
                <Image src={box.picture}/>
              </div>
              <p className='text-center text-[#081F46] font-semibold tracking-[2px] leading-5 font-dosis uppercase'>{box.text}</p>
            </div>
          ))}
        </div>
        <div className='mt-8'>
          <Image src={curveWhilePicture} layout={'responsive'}/>
        </div>
      </section>
      <section className="bg-section">
        <div className="bg-white shadow-omad p-4 m-5 rounded-lg">
          <div className="flex flex-col space-y-8 py-4">
            <div className="relative p-4">
              <Image src={deliveryServicePicture} className={'rounded-full'} layout={'responsive'}/>
            </div>
            <div className="space-y-4 py-8 px-3 mb-8">
              <h1 className='text-4xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'>
                Etkazib berish <span className='text-[#379eff]'>Xizmati</span>
              </h1>
              <p className='text-center leading-6 tracking-[2px] text-xl '>
                Bizning temmali tozalangan suvingizni etkazib berish xizmati bilan to'g'ridan-to'g'ri eshigingizga etkazish mumkin.
              </p>
            </div>

            <div className="flex flex-col px-6 space-y-6 font-dosis">
              {delivery_boxes.map(box => (
                <div className="flex items-center">
                  <div className="w-1/4 mr-2">
                    <Image src={box.picture} layout={'intrinsic'}/>
                  </div>
                  <div className='flex uppercase font-bold tracking-[1px] text-footer text-xl'>
                    <span className='font-black text-primary mr-1'>|</span>
                    <p>{box.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href='#order' className='flex hover:bg-black bg-omad-btn shadow-omad font-semibold outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer text-white rounded-full m-auto py-btnY px-btnX'>
              <span>Hoziroq buyurtma bering</span>
            </a>

          </div>
        </div>

      </section>
    </>
  )
}
