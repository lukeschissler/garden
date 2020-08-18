import React from 'react';

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
            <img src={this.props.src}
                style={imgStyle}
                 className={this.state.animate}
                alt=""
                onClick={this.toggleAnimation}/>

    ) }
}

export default Icon;
