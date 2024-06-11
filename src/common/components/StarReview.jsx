import React from 'react';
import PropTypes from 'prop-types';
import './styles/StarReview.css'; // Import the CSS file for styling

const StarReview = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < rating) {
            if (rating - index >= 1) {
                return <span key={index} className="fas fa-star star filled"></span>;
            } else if (rating - index >= 0.5) {
                return <span key={index} className="fas fa-star star half-filled"></span>;
            }
        }
        return <span key={index} className="far fa-star star"></span>;
    });

    return <div className="star-review">{stars}</div>;
};

StarReview.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarReview;
