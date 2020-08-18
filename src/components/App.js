import React from 'react';
import '../css/App.css';
import samplePlants from "../samplePlants";
import { formatDate } from "../helpers";

import Garden from "./Garden"
import Harvests from "./Harvests";
import FilteredList from "./FilteredList"

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

  waterPlant = gardenPlant => {
      const garden = {...this.state.garden};
      const string = 'Watered: '.concat(formatDate());

      garden[gardenPlant].watered = string;

      this.setState({garden})
  }

  waterAll = () => {
      const garden = {...this.state.garden};
      const gardenKeys = Object.keys(garden)
      const string = 'Watered: '.concat(formatDate());

      gardenKeys.forEach(key => {
          garden[key].watered = string;
      })

      this.setState({garden})
  }

  addNote = (gardenPlant, note) => {
      const garden = {...this.state.garden};
        garden[gardenPlant].note = note;
        this.setState({garden})
  }

  addToGarden = key => {
      const garden = {...this.state.garden }
      const gardenPlant = {name : this.state.plants[key].name,
                            watered : "",
                            note : ""}
      garden[`gardenPlant${Date.now()}`] = gardenPlant;
      this.setState({ garden })
  }

  removeFromGarden = key => {
      const garden = {...this.state.garden };
      delete garden[key]
      this.setState({garden })
  }

  removeAll = () => {
      const garden = {}
      this.setState({garden})
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
      const rightColStyle = {
        paddingTop: "0.5rem",
        borderBottomRightRadius: "1rem",
        borderTopRightRadius: "1rem",
        backgroundColor: "rgba(170, 204, 0, 0.4)"
      }

      const leftColStyle = {
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        backgroundColor: "rgba(170, 204, 0, 0.4)"
      }

    return (
        <Container className="main">
            <Row className="row">
                <Col className="col-2" style={leftColStyle}>
                    <div className="heading-div">
                        <span className="heading-font-side">Plants</span>
                    </div>
                    <FilteredList addToGarden={this.addToGarden}  plants={this.state.plants}/>
                </Col>
                <Col className="col-8">
                    <div className="heading-div">
                        <span className="heading-font-mid">Garden</span>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="button-tooltip">
                                    Water all your Plants!
                                </Tooltip>}
                            delay ={{show:500}}>
                            <img src={"images/hose.png"}
                                 className="top-img"
                                onClick={this.waterAll}
                                alt=""
                            />
                        </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="button-tooltip">
                                        Remove all your Plants!
                                    </Tooltip>}
                                delay ={{show:300}}>
                            <img src={"images/tractor.png"}
                                 className="top-img"
                                 onClick={this.removeAll}
                                 alt=""
                            />
                            </OverlayTrigger>
                    </div>
                    <Garden garden={this.state.garden}
                            removeFromGarden={this.removeFromGarden}
                            waterPlants={this.waterPlant}
                            addHarvests={this.addHarvests}
                            addNote={this.addNote}/>
                </Col>
                <Col className="col-2" style={rightColStyle}>
                    <div className="heading-div">
                        <h1 className="heading-font-side">Harvests</h1>
                    </div>
                    <Harvests harvests={this.state.harvests}
                              plants={this.state.plants}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
