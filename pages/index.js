import Head from 'next/head'
import BreedsView from '@/components/BreedsView';
import { getAllBreeds } from '@/helpers/dogapi';

export async function getStaticProps() {
  const breeds = await getAllBreeds();
  return {
    props: {
      breeds,
    },
  };
}

export default function Home({ breeds }) {
  return (
    <>
      <Head>
        <title>The Best Dog App Ever</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className='display-1 text-center'>The Best Dog App Ever</h1>
      </header>
      <main className='container'>
          <BreedsView breeds={ breeds }/>
      </main>
    </>
  );
};