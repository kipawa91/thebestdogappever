import DogsView from '@/components/DogsView';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import { getAllBreeds, getAllBreedImageURIs } from '@/helpers/dogapi';

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
  const images = await getAllBreedImageURIs(breed);
  return {
    props: {
      breed,
      images,
    },
  };
}

export default function Breed({ breed, images }) {

    return (
      <Layout>
        <main className='container'>
            <NavBar breed={breed} />
            <DogsView imageURIs={images} />
        </main>
      </Layout>
    );
}