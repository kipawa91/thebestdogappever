import BreedCard from "./BreedCard";
import { getAllBreeds } from '@/helpers/dogapi';

export default function BreedsView() {

    const { breeds, isLoading, isError } =  getAllBreeds();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    return (
        <div className="row">
            {Object.keys(breeds).map(breed => <BreedCard key={breed} breed={breed} />)}
        </div>
    );
};