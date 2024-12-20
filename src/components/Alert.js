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
      borderWidth: "1px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: "rgb(136, 132, 216)",
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
    this.bgColor = "rgb(29, 211, 176)";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(29, 211, 176)";
    this.bgColor = "rgb(22, 116, 63)";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };