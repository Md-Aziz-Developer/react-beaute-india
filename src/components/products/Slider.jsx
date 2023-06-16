import banner from 'assets/pictures/banner.png';
import { Fragment } from 'react';
import { API_ENDPOINTS, useQuery } from 'utilities';

const Slider = () => {
    const { data } = useQuery(API_ENDPOINTS.SLIDER_IMAGES)

    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
        >
            <div className="carousel-inner">
                {data.map((item, idx) => (
                    <Fragment key={idx}>
                        <div className={`carousel-item ${idx === 0 ? 'active' : ''} `} data-bs-interval="3000">
                            <img src={item.image || banner} className="d-block w-100" alt="..." />
                        </div>
                    </Fragment>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider