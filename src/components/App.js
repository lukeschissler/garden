import React from 'react';
import '../css/App.css';
import samplePlants from "../samplePlants";
import Garden from "./Garden"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlantAdder from "./PlantAdder";
import FilteredList from "./FilteredList"

class App extends React.Component {

  state = {
    plants : {...samplePlants},
    garden : []
  };

  addPlant = plant => {
    const plants = {...this.state.plants };
    plants[`plant${Date.now()}`] = plant;
    this.setState( { plants } );
  };

  addToGarden = key => {
      const garden = [...this.state.garden ];
      garden.push(key)
      this.setState({ garden })
  }

  loadSamplePlants = () => {
    this.setState( { plants: samplePlants } )
  }

  render() {
    return (
        <Container className="main">
            <Row className="row">
                <Col className="first-column">
                    <h1>Template Plants</h1>
                    <FilteredList addToGarden={this.addToGarden}  plants={this.state.plants}/>
                </Col>
                <Col className="col-6">
                    <h1>Garden</h1>
                    <Garden garden={this.state.garden} plants={this.state.plants} />
                </Col>
                <Col className="third-column">
                    <h1>Add Plants</h1>
                    <PlantAdder addPlant={this.addPlant}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
