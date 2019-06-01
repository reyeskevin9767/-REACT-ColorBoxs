import React, {Component} from 'react';
import "./ColorBox.css";

class ColorBox extends Component{


    render(){
        var divStyle = { backgroundColor:  `rgb(${this.props.red}, ${this.props.blue}, ${this.props.green})`}
        return(
            <div style={divStyle} className="C-Box">
            </div>
        );
    }
}

export default ColorBox;