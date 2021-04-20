import React, { Component } from "react"
import classes from "./Countries.module.css"

class Countries extends Component{
    render(){
        return(
            <div className={classes.Countries}>
                <img src={this.props.flag} alt="image" />
                <div className={classes.Info}>
                    <h1>{this.props.title}</h1>
                    <h4>{this.props.region}</h4>
                </div>
            </div>
        )
    }
}


export default Countries