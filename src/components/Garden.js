import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Garden extends React.Component {
    renderGarden = key => {
        const plant = this.props.plants[key]
        return (
                <Card className="plant-card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">
                            {plant.name}
                        </Card.Title>
                    </Card.Body>
                    <Card.Text>
                    {plant.watered}
                    </Card.Text>
                </Card>
                )
    };

    render() {
        return (
            <Row className ="garden-row">
                {this.props.garden.map(this.renderGarden)}
            </Row>
    ) }
}

export default Garden;