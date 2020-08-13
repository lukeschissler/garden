import React from 'react';
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal'

import Container from "react-bootstrap/Container";

class Plant extends React.Component {
    state = {
        watered : this.props.watered,
        note: "",
        animate : "",
        modalState: false
    };

    noteRef = React.createRef()

    water = e => {
        this.toggleAnimation()
        const date = new Date();
        const formatDate = date.getMonth().toString().concat('/', date.getDate())

        this.setState({watered : formatDate})
    }

    toggleAnimation = () => {
        this.setState({animate : "shake"});
        setTimeout(() => {
            this.setState({animate : ""})
        }, 500);
    }

    componentDidMount() {
        this.toggleAnimation()
    }

    addNote = () => {
        this.setState({modalState : true})
    }

    hideModal = () => {
        const msg = "Variety : ".concat(this.noteRef.current.value)

        this.setState({note:msg})
        this.setState({modalState : false })
    }

    render() {
        return (

        <div>
            <Modal show={this.state.modalState}>
                <Modal.Header>Enter a variety for your plant!</Modal.Header>
                <Modal.Body>
                    <input type="text" ref={this.noteRef} placeholder="Variety"/>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.hideModal}>Save</button>
                </Modal.Footer>
            </Modal>

        <Card className={"plant-card".concat(this.state.animate)} >
            <Card.Body className="card-body">
                <Card.Title className="plant-card-title">
                    <span className="plant-card-title">{this.props.name}</span>
                </Card.Title>
            </Card.Body>
            <Card.Text>
                {this.state.note}
                {this.state.watered}
                <Container className="icon-div">
                    <img src={"images/watering-can.png"}
                         className="small-icon"
                         alt="can"
                         onClick={this.water}/>
                    <img src={"images/shovel.png"}
                         className="icon"
                         alt="shovel"
                         onClick={() => this.props.removeFromGarden(this.props.index)}/>
                    <img src={"images/grain-bag.png"}
                         className="icon"
                         alt="bag"
                         onClick={() => this.props.addHarvests(this.props.name, 1)}/>
                    <img src={"images/wheelbarrow.png"}
                         className="small-icon"
                         alt="bag"
                         onClick={this.addNote}/>
                </Container>
            </Card.Text>
        </Card>
        </div>
    ) }
}

export default Plant;