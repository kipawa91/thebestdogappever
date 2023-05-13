import DogCard from './DogCard';

export default function DogsView({ imageURIs }) {
    return (
        <div className="row">
            {imageURIs.map(image => <DogCard key={image} imageURI={image} />)}
        </div>
    );
};