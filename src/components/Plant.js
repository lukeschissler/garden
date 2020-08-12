import React from 'react';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Plant extends React.Component {
    render() { return (
        <Card className="template-plant-card">
            <Card.Body>
                <Card.Title>
                    <span className="template-plant-title">{this.props.details["name"]}</span>
                </Card.Title>
            <Button className = "add-button"
                    variant="outline-success"
                    size="sm"
                    onClick={() => this.props.addToGarden(this.props.index)}>Add</Button>
            </Card.Body>
        </Card>
    ) }
}

export default Plant;