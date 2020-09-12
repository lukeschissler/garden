import React from 'react';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class Icon extends React.Component {
    state = {
        animate : ""
    }

    toggleAnimation = () => {
        this.setState({animate : "icon-active"});
        setTimeout(() => {
            this.setState({animate : "icon-inactive"})
        }, 200);
        setTimeout(() => {
            this.setState({animate : ""})
        }, 200);
        this.props.fun()
    }

    render() {
        const imgStyle = {
                height: this.props.height,
                width: 'auto'
            }

        return (
            <OverlayTrigger
                placement="bottom"
                overlay={
                    <Tooltip id="button-tooltip">
                        {this.props.hoverMsg}
                    </Tooltip>}
                delay ={{show:600}}>
                <img src={this.props.src}
                    style={imgStyle}
                     className={this.state.animate}
                    alt=""
                    onClick={this.toggleAnimation}/>
            </OverlayTrigger>

    ) }
}

export default Icon;
