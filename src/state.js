import React, { Component } from 'react'
import './CSS/styles.css'

export default class state extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
handleInc = () =>{
    this.setState({
        count : this.state.count+1 
    })
}
handleDec = () =>{
    this.setState({
        count : this.state.count-1 
    })
}
    render() {
        const{count} = this.state;
        if(true){
            return (
                <div>
                    <h1><u>Count: {count}</u></h1> 
                <div className="btn"> <button onClick = {this.handleInc} disabled={count===10? true:false}>+</button></div>
                <div className = "btn"> <button onClick = {this.handleDec}disabled={count===0? true:false}>-</button></div>
                 
                </div>
            )
        }
        // }else{
        //     this.setState({
        //         count: 0
        //     })
        //     return (
        //         <div>
        //             <h1><u>Count: {count}</u></h1> 
        //         <div className="btn"> <button onClick = {this.handleInc}>+</button></div>
        //         <div className = "btn"> <button onClick = {this.handleDec} disabled={count === 0? false:true}>-</button></div>
                 
        //         </div>
        //     )
        // }
     
    }
}






