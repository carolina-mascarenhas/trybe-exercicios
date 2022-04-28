import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {each} = this.props;
        return (  
            <div className="pokemon">
                <div>
                    <p>{each.name}</p>
                    <p>{each.type}</p>
                    <p>{`Average weight: ${each.averageWeight.value} ${each.averageWeight.measurementUnit}`}</p>
                </div>
                <img src={each.image} alt={`${each.name} pokemon`} />
            </div>
        )
    }
}

Pokemon.propTypes = {
    each: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
}

export default Pokemon;
