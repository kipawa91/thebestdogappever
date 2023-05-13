import urlJoin from 'url-join';
import useSWR from 'swr';

const APIROOT = 'https://dog.ceo/api/';
const APIENDS = {
    getAllBreeds: urlJoin(APIROOT, '/breeds/list/all'),
    getBreedImageURI: breed => urlJoin(APIROOT, '/breed/', breed,'/images/random'),
}

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(json => json.message);

export const getAllBreeds = () => fetcher(APIENDS.getAllBreeds).then(data => Object.keys(data));
export function useAllBreeds() {
    const { data, error, isLoading } = useSWR(APIENDS.getAllBreeds, getAllBreeds);
    return {
        breeds: data,
        isLoading: isLoading,
        isError: error
    }
}

export const getBreedImageURI = (breed) => fetcher(APIENDS.getBreedImageURI(breed));
export function useBreedImageURI(breed) {
    const { data, error, isLoading } = useSWR(APIENDS.getBreedImageURI(breed), () => getBreedImageURI(breed));
    return {
        imageURI: data,
        isLoading: isLoading,
        isError: error
    }
}