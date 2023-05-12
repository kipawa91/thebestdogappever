import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Best Dog App Ever</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container text-center'>
        <h1 className='display-1'>The Best Dog App Ever</h1>
      </main>
    </>
)}