import React, { Component } from "react"
import classes from "./Countries.module.css"

class Countries extends Component{
    render(){
        return(
            <div className={classes.Countries}>
                <img src={this.props.flag} alt="image" />
                <div className={classes.Info}>
                    <h1>Country: {this.props.title}</h1>
                    <h1>Region: {this.props.region}</h1>
                    <h1>Capital: {this.props.capital}</h1>
                </div>
            </div>
        )
    }
}


export default Countries