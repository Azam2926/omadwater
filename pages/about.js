import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>
          About
        </title>
      </Head>
      <section className={'px-4 py-14 space-y-4'}>
        <h1 className={'text-5xl font-bold font-dosis tracking-[3px] uppercase text-center leading-tight'}>
          <span className={'text-[#379eff]'}>Biz haqimizda</span>
        </h1>
      </section>
    </>
  )
}