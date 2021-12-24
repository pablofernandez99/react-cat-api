import Images from './Images'
import '../styles/Gallery.css'

const Gallery = ({ data }) => {
    return (
        <ul className="gallery">
            {data.map(({ id, url }) => (
                <li key={id}>
                    <div className="card-gallery">
                        <Images url={url} />
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Gallery
