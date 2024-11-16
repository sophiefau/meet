// src/components/Alert.js
import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: "rgb(175, 252, 65)",
      textAlign: "center",
      fontSize: "13px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(22, 116, 63)'; 
    this.bgColor = 'rgb(195, 255, 179)'; 
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(22, 116, 63)";
    this.bgColor = "rgb(175, 252, 65)";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(22, 116, 63)";
    this.bgColor = "rgb(29, 211, 176)";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };