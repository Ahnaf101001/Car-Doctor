import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-[#FF3811]">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn bg-[#FF3811] hover:bg-transparent border-[#FF3811] hover:border-[#FF3811] text-white hover:text-[#FF3811]">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.node,
}