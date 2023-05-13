import BreedCard from "./BreedCard";
import { useAllBreeds } from '@/helpers/dogapi';

export default function BreedsView({ breeds }) {
    return (
        <div className="row">
            {breeds.map(breed => <BreedCard key={breed} breed={breed} />)}
        </div>
    );
};