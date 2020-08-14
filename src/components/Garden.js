import React from 'react';
import Plant from './Plant';

class Garden extends React.Component {

    renderGarden = key => {
        const plant = this.props.garden[key]
         return (
            <Plant name={plant.name}
            removeFromGarden={this.props.removeFromGarden}
            index={key}
            addHarvests={this.props.addHarvests}
            watered={plant.watered}
            note={plant.note}/>
                )};

    render() {
        const keys = Object.keys(this.props.garden)

        return (
            <div className ="garden-row">
                {keys.map(this.renderGarden)}
            </div>
    ) }
}

export default Garden;