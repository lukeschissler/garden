import React from 'react';

class TemplatePlant extends React.Component {

    render() { return (
        <div className="template-plant-div">

            <img className = "add-image"
                    src={"images/sprout.png"}
                    alt="Sprout"
                    onClick={() => this.props.addToGarden(this.props.index)}/>
            <span className="template-plant-title">{this.props.details["name"]}</span>
        </div>
    ) }
}

export default TemplatePlant;