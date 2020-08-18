import React from 'react';

import Icon from './Icon';

class TemplatePlant extends React.Component {

    render() { return (
        <div className="template-plant-div">

            <Icon src={"images/sprout.png"}
                  height="3rem"
                  fun={() => this.props.addToGarden(this.props.index)}/>
            <span className="template-plant-title">{this.props.details["name"]}</span>
        </div>
    ) }
}

export default TemplatePlant;