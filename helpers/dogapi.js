import urlJoin from 'url-join';
import useSWR from 'swr';

const APIROOT = 'https://dog.ceo/api/';
const APIENDS = {
    getAllBreeds: urlJoin(APIROOT, '/breeds/list/all'),
    getBreedImageURI: breed => urlJoin(APIROOT, '/breed/', breed,'/images/random'),
    getAllBreedImageURIs: breed =>  urlJoin(APIROOT, '/breed/', breed,'/images'),
}

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(json => json.message);

const OPTION_NO_REVALIDATION = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
}

export const getAllBreeds = () => fetcher(APIENDS.getAllBreeds).then(data => Object.keys(data));
export function useAllBreeds() {
    const { data, error, isLoading } = useSWR(APIENDS.getAllBreeds, getAllBreeds, OPTION_NO_REVALIDATION);
    return {
        breeds: data,
        isLoading: isLoading,
        isError: error
    }
}

export const getBreedImageURI = (breed) => fetcher(APIENDS.getBreedImageURI(breed));
export function useBreedImageURI(breed) {
    const { data, error, isLoading } = useSWR(APIENDS.getBreedImageURI(breed), () => getBreedImageURI(breed), OPTION_NO_REVALIDATION);
    return {
        imageURI: data,
        isLoading: isLoading,
        isError: error
    }
}

export const getAllBreedImageURIs = (breed) => fetcher(APIENDS.getAllBreedImageURIs(breed));
export function useAllBreedImageURIs(breed) {
    const { data, error, isLoading } = useSWR(APIENDS.getAllBreedImageURIs(breed), () => getAllBreedImageURIs(breed), OPTION_NO_REVALIDATION);
    return {
        imageURIs: data,
        isLoading: isLoading,
        isError: error
    }
}