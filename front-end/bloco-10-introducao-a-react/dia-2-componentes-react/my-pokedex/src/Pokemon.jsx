import React from "react";

class Pokemon extends React.Component {
    render() {
        const {each} = this.props;
        return (  
            <div key={each.id}>
                <p>{each.name}</p>
                <p>{each.type}</p>
                <p>{`Average weight: ${each.averageWeight.value} ${each.averageWeight.measurementUnit}`}</p>
                <img src={each.image} alt="pokemon"/>
            </div>
        )
    }
}

export default Pokemon;
