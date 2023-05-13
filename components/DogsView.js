import DogCard from './DogCard';

export default function DogsView({ imageURIs }) {
    return (
        <div className="row">
            {imageURIs.map(image => <DogCard imageURI={image} />)}
        </div>
    );
};