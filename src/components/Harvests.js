import React from 'react';

class Harvests extends React.Component {
    countGrains = numHarvests => {
        let harvestTally = [];

        while (numHarvests/10 >= 1) {
            numHarvests = numHarvests - 10
            harvestTally.push('images/crate.png');
        }
        while (numHarvests/5 >= 1) {
            numHarvests = numHarvests - 5
            harvestTally.push('images/grain-bag.png');
        }
        while (numHarvests/1 >= 1) {
            numHarvests = numHarvests - 1
            harvestTally.push('images/grain.png')
        }
        return harvestTally
    }

    renderGrains = image => {
        return (
            <img src={image}
                 alt=""
                className="harvest-image"/>
        )
    }

    renderHarvests = name => {
        const harvest = this.props.harvests[name]
        const grainTally = this.countGrains(harvest)

        return (
            <div>
                <p>{name} : {harvest}</p>
                {grainTally.map(this.renderGrains)}
            </div>
        )};

    render() {
        const keys = Object.keys(this.props.harvests)

        return (
            <div className="harvest-container">
                {keys.map(this.renderHarvests)}
            </div>
        ) }
}

export default Harvests;