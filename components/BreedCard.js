import { useBreedImageURI } from '../helpers/dogapi'

function BreedCardImage({ breed }) {

    const { imageURI, isLoading, isError } = useBreedImageURI(breed);

    if (isLoading) return <></>;
    if (isError) return <></>;

    return (
        <img src={imageURI} className="card-img-top" alt={breed} />
    );
};

export default function BreedCard({ breed }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <BreedCardImage breed={breed} />
            <div className="card-body">
                <h5 className="card-title text-center">{breed}</h5>
            </div>
        </div>
    )
};

