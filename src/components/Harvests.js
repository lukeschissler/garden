import React from 'react';

class Harvests extends React.Component {
    renderHarvests = name => {
        const harvest = this.props.harvests[name]
        return (
            <p>{name} - {harvest}</p>

        )};

    render() {
        const keys = Object.keys(this.props.harvests)

        return (
            <div>
                {keys.map(this.renderHarvests)}
            </div>
        ) }
}

export default Harvests;