import React from 'react';
import Modal from 'react-bootstrap/Modal'

class Plant extends React.Component {
    state = {
        watered : this.props.watered,
        note: this.props.note,
        animate : "",
        modalState: false
    };

    noteRef = React.createRef()

    water = e => {

        this.toggleAnimation("-shake", 500)
        const date = new Date();
        const formatDate = date.getMonth().toString().concat('/', date.getDate())
        const string = 'Watered: '.concat(formatDate)

        this.setState({watered : string})
    }

    toggleAnimation = (type, time) => {
        this.setState({animate : type});
        setTimeout(() => {
            this.setState({animate : ""})
        }, time);
    }

    componentDidMount() {
        this.toggleAnimation("-shake", 500);

        const waterStorageRef = localStorage.getItem(`water${this.props.index}`);

        if (waterStorageRef) {
            this.setState({watered: JSON.parse(waterStorageRef) });
        }

        const noteStorageRef = localStorage.getItem(`note${this.props.index}`);
        if (noteStorageRef) {
            this.setState({note: JSON.parse(noteStorageRef)});
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            `water${this.props.index}`,
            JSON.stringify(this.state.watered)
        );
        localStorage.setItem(
            `note${this.props.index}`,
            JSON.stringify(this.state.note)
        );
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

        this.setState({note:msg})
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
                <span>{this.state.note}<br/>{this.state.watered}</span>
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