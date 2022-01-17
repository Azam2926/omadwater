import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import {useEffect, useState} from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggler = () => setIsOpen(!isOpen)
  useEffect(() => document.body.style.overflow = isOpen ? 'hidden' : 'auto', [isOpen])

  return (
    <nav className={`p-4 flex flex-wrap items-start text-[#081F46] ${isOpen && 'fixed z-50 bg-white inset-0'}`}>
      <div className="flex flex-wrap w-full">
        <div className="flex justify-between w-full ">
          <button className='flex items-center space-y-2 my-2 px-3 cursor-pointer' onClick={toggler}>
            <span className='w-[26px] h-3 relative'>
              <span className={`transition-all  ease-linear duration-[.1806s] absolute block bg-black rounded h-0.5 w-full ${isOpen ? 'top-1' : 'top-0'}`}/>
              <span className={`transition-all  ease-linear duration-[.1806s] absolute block bg-black rounded h-0.5 ${isOpen ? 'w-full top-2' : 'w-3/5 top-3'}`}/>
            </span>
          </button>
          <Link href={'/'}>
            <a className='w-10 text-4xl text-center font-black flex-grow ml-6 mr-[70px]'>
              <span className='text-primary'>Omad</span>Water
            </a>
          </Link>
        </div>
        <div className={`grid w-full ${isOpen ? '' : 'hidden'}`}>
          <ul className='text-sm font-semibold p-4 pt-0 divide-y space-y-4 tracking-[1px]'>
            <Link href={'/'}>
              <li className='pt-4 border-t-[1px] cursor-pointer' onClick={toggler}>
                Bosh sahifa
              </li>
            </Link>
            <Link href={'/about'}>
              <li className='pt-4 cursor-pointer' onClick={toggler}>
                Biz haqimizda
              </li>
            </Link>
            <Link href={'/contact'}>
              <li className='pt-4 cursor-pointer' onClick={toggler}>
                Biz bilan bog'laning
              </li>
            </Link>
          </ul>
          <div className="flex order-[-1] justify-around text-xs m-4 mt-3 font-semibold tracking-[1px]">
            <div>
              <a href="https://yandex.uz/maps/org/176579593306/?ll=64.473624%2C40.138582&z=18.14" target={'_blank'} className='flex items-center mr-4 my-3'>
                <svg className='basis-[31px]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9749 3.12964C13.6008 1.14086 11.423 0 9.00032 0C6.57767 0 4.39984 1.14086 3.02569 3.12964C1.65829 5.10838 1.34255 7.61351 2.17941 9.82677C2.40325 10.4312 2.75906 11.0184 3.23445 11.5687L8.52117 17.7784C8.64074 17.919 8.81592 18 9.00032 18C9.18471 18 9.3599 17.919 9.47946 17.7784L14.7647 11.5703C15.2422 11.0169 15.5976 10.4303 15.8195 9.83078C16.6581 7.61351 16.3423 5.10838 14.9749 3.12964ZM14.641 9.38999C14.4698 9.85257 14.1903 10.3099 13.8108 10.7498C13.8098 10.7509 13.8087 10.7519 13.8079 10.7532L9.00032 16.3999L4.18982 10.7497C3.81052 10.3101 3.53106 9.85282 3.3582 9.38581C2.66611 7.55539 2.92876 5.48413 4.06101 3.84546C5.1968 2.20155 6.99722 1.25873 9.00032 1.25873C11.0034 1.25873 12.8036 2.20152 13.9394 3.84546C15.0719 5.48413 15.3347 7.55539 14.641 9.38999Z" fill="#081F46"/>
                  <path d="M9.00007 3.73425C7.05677 3.73425 5.47559 5.31523 5.47559 7.25874C5.47559 9.20224 7.05656 10.7832 9.00007 10.7832C10.9436 10.7832 12.5246 9.20224 12.5246 7.25874C12.5246 5.31544 10.9434 3.73425 9.00007 3.73425ZM9.00007 9.52445C7.75076 9.52445 6.73432 8.50801 6.73432 7.2587C6.73432 6.00939 7.75076 4.99295 9.00007 4.99295C10.2494 4.99295 11.2658 6.00939 11.2658 7.2587C11.2658 8.50801 10.2494 9.52445 9.00007 9.52445Z" fill="#081F46"/>
                </svg>
                <p className='m-2'>Buxoro Shofirkon Bog'iafzal</p>
              </a>
            </div>
            <div className="flex">
              <a href="tel:+998990981375" className='flex flex-wrap items-center justify-center content-center my-3'>
                <p className="mr-2 font-bold">+998 99 0981375</p>
                <p>Bizga qo'ng'iroq qiling</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}