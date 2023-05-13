import styles from './DogCard.module.css';

export default function DogCard({ imageURI }) {
    return (
        <figure className="figure col-sm-6 col-md-4 col-lg-3 g-5">
            <div className={styles.container}>
                <img
                    src={imageURI}
                    className='rounded-circle shadow'
                />
            </div>
        </figure>

    );
}