import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import "./Color.css"

class Color extends Component{
    
    constructor(props){
        super(props);
        this.state = { red: Math.floor(Math.random() * 255) +1 , blue: Math.floor(Math.random() * 255) +1, green: Math.floor(Math.random() * 255) +1};
        this.handleClick = this.handleClick.bind(this);
    }
    
    generate(){
        this.setState(curState => ({
            red : curState.red = Math.floor(Math.random() * 255) +1
        }));
        this.setState(curState => ({
            blue: curState.blue = Math.floor(Math.random() * 255) +1
        }));
        this.setState(curState => ({
            green : curState.green = Math.floor(Math.random() * 255) +1
        }));
    }

    handleClick(){
        this.generate();
    }

    render(){
        return(
          <div className="Color-Box" onClick={this.handleClick}>
              <ColorBox red={this.state.red} blue={this.state.blue} green={this.state.green}/>
          </div>
          
        );
    }
}


export default Color;