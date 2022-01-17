import Head from 'next/head'
import Image from 'next/image'
import DeliveryForm from "../components/deliveryForm"
import certificationPicture from '../public/images/certification.png'
import curveWhilePicture from '../public/images/curve-while.png'
import deliveryServicePicture from '../public/images/delivery-service.png'
import distilledWaterBottledPicture from '../public/images/distilled-water-bottled.png'
import flaskPicture from '../public/images/flask.png'
import freePicture from '../public/images/free.png'
import glassPicture from '../public/images/glass.png'
import microscopePicture from '../public/images/microscope.png'
import scheadulePicture from '../public/images/scheadule.png'
import timePicture from '../public/images/time.png'
import waterBottlePicture from '../public/images/water-bottle.png'
import waveDividerPicture from '../public/images/wave-divider.png'
import wavePicture from '../public/images/wave.png'

const drops = {
  right: [
    {
      title: 'Kaltsiy Ca2+',
      capacity: '10-20 mg/L',
      body: "Bizning tanamizdagi kaltsiyning taxminan 99% suyaklarimiz va tishlarimizda."
    },
    {
      title: 'Natriy Na+',
      capacity: '5-10 mg/L',
      body: "Bu mushaklar va nervlarning to'g'ri ishlashi uchun muhim komponent."
    },
    {
      title: 'Nitrat NO3-',
      capacity: '4.4 mg/L',
      body: "Nitrat miqdori 10 mg / l dan past bo'lgan suv ichish salomatlik uchun juda yaxshi."
    }
  ],
  left: [
    {
      title: 'Magniy Mg2+',
      capacity: '5-15 mg/L',
      body: "Magniy tananing sog'lom bo'lishi uchun zarur bo'lgan ozuqaviy moddadir."
    },
    {
      title: 'Sulfat SO4(2-)',
      capacity: '10-20 mg/L',
      body: "Sulfat hujayralardagi eng muhim makronutrientlardan biridir."
    },
    {
      title: 'Bikarbonat',
      capacity: '384 mg/L',
      body: "Bikarbonat antasid bo'lib, oshqozon ekşimesi va kislotali ovqat hazm qilishni bartaraf etish uchun ishlatiladi."
    },
  ]
}
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
        <div className='flex justify-center'>
          <div className='z-10 hidden md:block md:w-1/4 md:max-w-sm'>
            <div className='mr-[-200%] py-48 px-24'>
              <Image src={distilledWaterBottledPicture} layout='responsive' objectFit='fill' alt='Omadwater' />
            </div>
          </div>
          <div className='z-20 px-4 py-14 space-y-8 md:w-3/4'>
            <h1 className='text-5xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'>
              <span className='text-[#379eff]'>Suv</span> Yetkazish
            </h1>
            <p className='container max-w-[400px] mx-auto text-center text-xl leading-normal px-4'>
              Uyingizga suv yetkazib beramiz. Quyidagi yetkazib berish formasini to‘ldirish kifoya.
            </p>
            <div id='order' className='relative h-2'>
              <Image src={wavePicture} layout={'fill'} objectFit={'contain'} alt='Omadwater' />
            </div>
            <div className='bg-white max-w-[381px] mx-auto shadow-omad rounded-xl p-12 m-2 mt-4 text-base'>
              <DeliveryForm />
            </div>
          </div>
        </div>
        <div className='my-4'>
          <Image src={waveDividerPicture} layout={'responsive'} alt='Omadwater' />
        </div>
      </section>
      <section className='bg-section'>
        <div className="space-y-4 py-8">
          <h1 className='text-4xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'>
            Suv <span className='text-[#379eff]'>Tarkibi</span>
          </h1>
          <p className='text-center text-base leading-none font-semibold tracking-[2px] uppercase'>Nimalardan tashkil topgan?</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap justify-end p-[10px] space-y-8 lg:w-1/3">
            {drops.right.map((drop, index) => (
              <div key={index} className="flex flex-col pt-16 space-y-2 pr-12 text-right bg-drop-filled bg-right-top bg-no-repeat bg-right-drop-size">
                <h6 className='font-bold text-xl'>{drop.title}</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>{drop.capacity}</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> {drop.body}
                </p>
              </div>
            ))}
          </div>
          <div className='relative h-[285px] my-12 md:hidden lg:w-1/3 lg:grid lg:h-auto lg:items-center'>
            <Image src={waterBottlePicture} layout={'fill'} objectFit={'contain'} alt='Omadwater' />
          </div>
          <div className="flex flex-wrap justify-start p-[10px] space-y-8 lg:w-1/3">
            {drops.left.map((drop, index) => (
              <div key={index} className="flex flex-col pt-14 space-y-2 pl-16 bg-drop-filled bg-top-left bg-no-repeat bg-left-drop-size">
                <h6 className='font-bold text-xl'>{drop.title}</h6>
                <h6 className='text-primary font-bold text-xl leading-4'>{drop.capacity}</h6>
                <p className='tracking-[1px]'>
                  <span className='text-primary font-bold'>|</span> {drop.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <Image src={waveDividerPicture} layout={'responsive'} alt='Omadwater' />
        </div>
      </section>
      <section className="bg-section">
        <div className='px-4 py-14 space-y-8'>
          <h2 className='text-4xl font-bold font-dosis tracking-[1px] uppercase text-center leading-tight'>
            <span className='text-[#379eff]'>Bizning</span> hikoya
          </h2>
          <div className='relative h-2'>
            <Image src={wavePicture} layout={'fill'} objectFit={'contain'} alt='Omadwater' />
          </div>
          <p className='text-center text-xl leading-normal px-4 md:mx-[15%] lg:mx-[26%]'>
            Bizning kompaniyamiz 2008 yilda tashkil etilgan. Suv markasi shishasi ichish, ovqat pishirish, mashg'ulotlar va hatto bolalar uchun juda yaxshi. Mahsulot 50 ta davlatda sertifikatlangan.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap md:justify-center items-center">
            {story_boxes.map((box, index) => (
              <div key={index} className='w-1/2 md:w-1/4'>
                <div className="flex flex-col p-8 space-y-8 items-center">
                  <div className="bg-white shadow-omad-story p-8 w-32 lg:w-40 lg:p-10 rounded-full">
                    <Image src={box.picture} layout='responsive' alt='Omadwater' />
                  </div>
                  <p className='text-center text-[#081F46] font-semibold tracking-[2px] leading-5 font-dosis uppercase'>{box.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <Image src={curveWhilePicture} layout={'responsive'} alt='Omadwater' />
        </div>
      </section>
      <section className="bg-section">
        <div className="grid items-center">
          <div className="max-w-screen-lg mx-auto bg-white shadow-omad p-10 m-4 rounded-lg lg:py-16">
            <div className="flex flex-col space-y-2 py-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <div className="relative p-4 lg:p-0 lg:grid lg:items-center lg:w-1/2">
                <Image src={deliveryServicePicture} layout={'responsive'} alt='Omadwater' />
              </div>
              <div className='py-8 lg:py-0 px-3 mb-8 space-y-12  lg:w-1/2'>
                <div className="space-y-4">
                  <h1 className='text-4xl font-bold font-dosis tracking-[3px] uppercase leading-tight text-center lg:text-left'>
                    Etkazib berish <span className='text-[#379eff]'>Xizmati</span>
                  </h1>
                  <p className='leading-6 tracking-[2px] text-xl text-center text-main-dark lg:text-left'>
                    Bizning temmali tozalangan suvingizni etkazib berish xizmati bilan to'g'ridan-to'g'ri eshigingizga etkazish mumkin.
                  </p>
                </div>
                <div className="flex flex-col md:w-3/5 lg:w-1/2 space-y-6 lg:space-y-8 md:space-y-4 font-dosis">
                  {delivery_boxes.map((box, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1/4 mr-2">
                        <Image src={box.picture} layout={'responsive'} alt='Omadwater' />
                      </div>
                      <div className='flex uppercase font-bold tracking-[1px] text-footer text-xl'>
                        <p>
                          <span className='font-black text-primary mr-1'>|</span>
                          {box.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex'>
                  <a href='#order' className='hover:bg-black bg-omad-btn shadow-omad font-semibold outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer text-white rounded-full m-auto py-btnY px-btnX'>
                    <span>Hoziroq buyurtma bering</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
