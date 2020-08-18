import React from 'react';

class PlantAdder extends React.Component {
    nameRef = React.createRef();
    wateredRef = React.createRef();

    createPlant = event => {
        event.preventDefault()
        const plant = {
            name : this.nameRef.current.value,
            watered : this.wateredRef.current.value
        };
        this.props.addPlant(plant)

        event.currentTarget.reset()
    }

    render() { return (
        <form onSubmit={this.createPlant}>
            <input name="name" ref={this.nameRef} type="text" placeholder="Plant Name"/>
            <input name="watered" ref={this.wateredRef} type="text" placeholder="Last Watered Date" />
            <button type="submit"> Add Plant</button>
        </form>
    ) }
}

export default PlantAdder;