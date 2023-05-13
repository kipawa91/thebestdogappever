import Head from 'next/head'
import Layout from '../components/Layout';
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
    <Layout>
      <main className='container'>
          <BreedsView breeds={ breeds }/>
      </main>
    </Layout>
  );
};