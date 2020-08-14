import React from 'react';
import '../css/App.css';
import samplePlants from "../samplePlants";
import Garden from "./Garden"
import Harvests from "./Harvests";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilteredList from "./FilteredList"

class App extends React.Component {

  state = {
    plants : {...samplePlants},
    garden : {},
    harvests : {}
  };


  addPlant = plant => {
    const plants = {...this.state.plants };
    plants[`plant${Date.now()}`] = plant;
    this.setState( { plants } );
  };

  addToGarden = key => {
      const garden = {...this.state.garden }
      const gardenPlant = {name : this.state.plants[key],
                            watered :}
      garden[`gardenPlant${Date.now()}`] = this.state.plants[key];
      this.setState({ garden })
  }

  removeFromGarden = key => {
      const garden = {...this.state.garden };
      delete garden[key]
      this.setState({garden })
  }

  addHarvests = (key, value) => {
      const harvests = {...this.state.harvests};
      harvests[key] = harvests[key] + value || value;
      this.setState({harvests})
  }

  componentDidMount() {

      const localStorageRef = localStorage.getItem("garden");
      if (localStorageRef) {
          this.setState({ garden: JSON.parse(localStorageRef) });
      }
  }

  componentDidUpdate() {
      localStorage.setItem(
          "garden",
          JSON.stringify(this.state.garden)
      );
  }

  render() {
    return (
        <Container className="main">
            <Row className="row">
                <Col className="col-2">
                    <h1>Plants</h1>
                    <FilteredList addToGarden={this.addToGarden}  plants={this.state.plants}/>
                </Col>
                <Col className="col-8">
                    <h1>Garden</h1>
                    <Garden garden={this.state.garden}
                            removeFromGarden={this.removeFromGarden}
                            addHarvests={this.addHarvests}/>
                </Col>
                <Col className="third-col">
                    <h1>Harvests</h1>
                    <Harvests harvests={this.state.harvests}
                              plants={this.state.plants}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
