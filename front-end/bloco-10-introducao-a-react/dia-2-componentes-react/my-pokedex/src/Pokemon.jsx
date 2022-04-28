import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {each} = this.props;
        return (  
            <div key={each.id} className="pokemon-card">
                <p>{each.name}</p>
                <p>{each.type}</p>
                <p>{`Average weight: ${each.averageWeight.value} ${each.averageWeight.measurementUnit}`}</p>
                <img src={each.image} alt="pokemon"/>
            </div>
        )
    }
}

Pokemon.propTypes = {
    each: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image:PropTypes.string
    }).isRequired
}

export default Pokemon;
