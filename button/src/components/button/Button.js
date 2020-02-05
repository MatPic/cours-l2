import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toggled: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState( { toggled: ! this.state.toggled })
  }

  render() {
    return (
      <button
         className={ this.state.toggled ? "toggled" : "untoggled" }
         data-testid="button"
         onClick= { this.handleClick }
      >
      {this.props.children ? this.props.children : "Click Me ! (Epico)"}
      </button>);
  }

}


export default Button;
