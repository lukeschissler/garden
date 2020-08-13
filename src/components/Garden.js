import React from 'react';
import Plant from './Plant';
import Row from 'react-bootstrap/Row';

class Garden extends React.Component {

    renderGarden = key => {
        const plant = this.props.garden[key]
         return (
            <Plant name={plant.name}
            watered={plant.watered}
            removeFromGarden={this.props.removeFromGarden}
            index={key}
            addHarvests={this.props.addHarvests}/>
                )};

    render() {
        const keys = Object.keys(this.props.garden)

        return (
            <Row className ="garden-row">
                {keys.map(this.renderGarden)}
            </Row>
    ) }
}

export default Garden;