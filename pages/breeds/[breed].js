import Head from 'next/head'
import Layout from '../../components/Layout';
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
      <Layout>
        <main className='container'>
            { breed }
        </main>
      </Layout>
    );
  };