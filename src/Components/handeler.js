import React, { Component } from 'react'

export default class EventHandeler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changesText:''
        }
        this.onChange = this.onChange.bind(this) //binding
        this.onClick = this.onClick.bind(this) //binding
    }
    
    
    onChange = (value) =>{
        this.setState({
            changesText: value.target.value
        },()=>{
            console.log(value.target.value);
        })
    }
    onClick = () =>{

       console.log(this.value);
    }

    render() {
        return (
            <div>
                <input type = "text" id={this.textId} onChange = {this.onChange}/>
                <button onClick= {this.onClick}>CLICK</button>
                <p>{this.state.changesText}</p>
            </div>
        )
    }
}
