import React from 'react';
import Modal from 'react-bootstrap/Modal'

import Icon from './Icon';

class Plant extends React.Component {
    state = {
        animate : "",
        modalState: false
    };

    noteRef = React.createRef()

    water = e => {

        this.toggleAnimation("-water", 500)
        this.props.waterPlant(this.props.index)
    }

    toggleAnimation = (type, time) => {
        this.setState({animate : type});
        setTimeout(() => {
            this.setState({animate : ""})
        }, time);
    }

    componentDidMount() {
        this.toggleAnimation("-shake", 500);
    }

    addNote = () => {
        this.setState({modalState : true})
    }

    removePlant = () => {
        setTimeout(() => {
            this.props.removeFromGarden(this.props.index)}, 500)
        this.toggleAnimation("-shrink", 700)
    }

    addHarvest = () => {
        this.toggleAnimation("-harvest", 500)
        this.props.addHarvests(this.props.name, 1)
    }

    hideModal = () => {
        const ref = this.noteRef.current.value
        const msg = ref ? ref : ""

        if (msg) {
            this.props.addNote(this.props.index, msg)
        }

        this.setState({modalState : false })
    }

    render() {
        return (

        <div>
            <Modal show={this.state.modalState}>
                <Modal.Header>Enter a variety for your plant!</Modal.Header>
                <Modal.Body>
                    <input type="text"
                           ref={this.noteRef}
                           placeholder="Variety"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.hideModal}>Save</button>
                </Modal.Footer>
            </Modal>
        <div className={"plant-card".concat(this.state.animate)} >
            <div>
                <span className="plant-card-title">{this.props.name}</span>
            </div>
            <div className="descriptors">
                <span>{this.props.note}<br/>{this.props.watered}</span>
            </div>
            <div>
                <div className="icon-div">
                    <Icon src={"images/watering-can.png"}
                         height={"3rem"}
                         fun={this.water}/>
                    <Icon src={"images/sickle.png"}
                         height={"2.8rem"}
                         fun={this.addHarvest}/>
                    <Icon src={"images/wheelbarrow.png"}
                         height={"3rem"}
                         fun={this.addNote}/>
                    <Icon src={"images/shovel.png"}
                         height={"2.8rem"}
                         fun={this.removePlant}/>
                </div>
            </div>
        </div>

        </div>
    ) }
}

export default Plant;