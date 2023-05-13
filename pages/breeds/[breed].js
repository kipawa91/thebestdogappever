import Head from 'next/head'
import { getAllBreeds } from '@/helpers/dogapi';

export async function getStaticPaths() {

  const breeds = await getAllBreeds();
  const paths = breeds.map(breed => {
    return {
      params: {
        breed
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const breed = params.breed;
  return {
    props: {
      breed,
    },
  };
}

export default function Breed({ breed }) {

    return (
      <>
        <Head>
          <title>The Best Dog App Ever - { breed }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1 className='display-1 text-center'>The Best Dog App Ever</h1>
        </header>
        <main className='container'>
            { breed }
        </main>
      </>
    );
  };