/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Suvlar', href: '#' },
  { name: 'Yetkazib berish', href: '#' },
  { name: 'Biz haqimizda', href: '#about' },
  { name: 'Bog\'lanish', href: '#' },
]

export default function Layout ({ children }) {
  return (
    <>
      <nav className={'p-4'}>
        na
      </nav>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
