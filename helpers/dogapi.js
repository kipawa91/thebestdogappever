import urlJoin from 'url-join';
import useSWR from 'swr';

const APIROOT = 'https://dog.ceo/api/';

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(json => json.message);

export function getAllBreeds() {

    const end = urlJoin(APIROOT, '/breeds/list/all');
    const { data, error, isLoading } = useSWR(end, fetcher);
 
    return {
        breeds: data,
        isLoading: isLoading,
        isError: error
    }
}

export function useBreedImageURI(breed) {

    const end = urlJoin(APIROOT, '/breed/', breed,'/images/random');
    const { data, error, isLoading } = useSWR(end, fetcher);
 
    return {
        imageURI: data,
        isLoading: isLoading,
        isError: error
    }
}