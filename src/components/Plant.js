import React from 'react';
import Modal from 'react-bootstrap/Modal'

class Plant extends React.Component {
    state = {
        animate : "",
        modalState: false
    };

    noteRef = React.createRef()

    water = e => {

        this.toggleAnimation("-shake", 500)
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
        const msg = ref ? "Variety : ".concat(ref) : ""

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
                    <img src={"images/watering-can.png"}
                         className="icon-1"
                         alt="can"
                         onClick={this.water}/>
                    <img src={"images/sickle.png"}
                         className="icon-2"
                         alt="bag"
                         onClick={this.addHarvest}/>
                    <img src={"images/wheelbarrow.png"}
                         className="icon-3"
                         alt="bag"
                         onClick={this.addNote}/>
                    <img src={"images/shovel.png"}
                         className="icon-4"
                         alt="shovel"
                         onClick={this.removePlant}/>
                </div>
            </div>
        </div>

        </div>
    ) }
}

export default Plant;