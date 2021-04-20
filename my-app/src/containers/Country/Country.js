import React,{Component} from "react"
import axios from "axios"
import classes from "./Country.module.css"
import Countries from "../../components/Countries/Countries"
class Country extends Component{
    state={
        valueName:"",
        countryName: "Turkey",
        post:[]
    }    

    componentDidMount(){    
        this.getCountries();
    }

    getCountries = () =>{

        
        console.log(this.state.countryName)
       
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.countryName}`)
            .then(response =>{
               console.log(response.data)
                this.setState({post : response.data})
            })
            .catch((error) =>{
                console.log(error)
            })
    }

    inputCountry = (e) =>{
        this.setState({
            valueName: e.target.value,
            countryName:this.state.valueName
        })
    }
    

    render(){

        const countries =this.state.post.map(el =>{
            return <Countries 
            key={2} 
            title={el.name}
            flag={el.flag}
            region ={el.region}
            />
        })

        return(
            <div className={classes.Country}>
                <h1 className={classes.Title}>Write a Country Name</h1>
                <div className={classes.Search }>
                <input type="text" value={this.state.valueName} placeholder={"Enter a country name"}onChange={(e) => this.inputCountry(e)} />
                <button onClick={this.getCountries}>Find a country</button>
                </div>
                {countries}
            </div>
        )
    }
}

export default Country