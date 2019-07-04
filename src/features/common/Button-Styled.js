import React from "react";
import './Button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enabled: !props.disabled
        }
    }

    toggle(newState = !this.state.enabled) {
        this.setState({
            enabled: newState
        });
    }

    render() {
        const { modifier = '', onClick = () => {}, label = '' } = this.props;
        const { enabled } = this.state;

        return (
            <button className={`button ${modifier}`}
                 onClick={onClick}
                 disabled={!enabled}>
                {label}
            </button>
        );
    }
}

export default Button;
