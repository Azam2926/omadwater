import Head from 'next/head'

export default function About() {
  return (<>
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

    <div className='flex space-x-2 p-2 m-2 rounded bg-primary text-white'>
      <div className="rounded font-bold bg-footer flex-grow">flex 1</div>
      <div className="rounded font-bold bg-footer">flex 2</div>
    </div>

  </>)
}