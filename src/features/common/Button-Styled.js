import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
    font-family: "Lato", sans-serif;
    font-size: 1em;
    color: #ffffff;
    background-color: #bec9d1;
    display: inline-block;
    padding: 16px;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        color: #a7b5c6;
    }

    &:disabled {
        pointer-events: none;
        opacity: .5;
    }

    // a small button
    ${props => props.tiny && css`
        padding: 4px;
        font-size: .9em;
    `}
`;

class ButtonStyled extends React.Component {
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
        const { onClick = () => {}, label = '', tiny = false } = this.props;
        const { enabled } = this.state;

        return (
            <Button
                tiny={tiny}
                onClick={onClick}
                disabled={!enabled}>
                {label}
            </Button>
        );
    }
}

export default ButtonStyled;
