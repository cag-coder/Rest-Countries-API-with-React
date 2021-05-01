import React,{Component} from "react"
import axios from "axios"
import classes from "./Country.module.css"
import Countries from "../../components/Countries/Countries"
class Country extends Component{
    state={
        valueName:"",
        countryName: "Turkey",
        post:[],
        error: false
    }    

    componentDidMount(){    
        this.getCountries();
    }

    getCountries = () =>{

        
        console.log(this.state.countryName)
       
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.countryName}`)
            .then(response =>{
               console.log(response.data)
                this.setState({
                    error: false,
                    post : response.data
                })
            })
            .catch(error =>{
                this.setState({error : true})
            })
    }

    inputCountry = (e) =>{
        this.setState({
            valueName: e.target.value,
            countryName:this.state.valueName
        })
    }
    

    render(){
        let posts= <p style={{textAlign: "center", marginTop:" 10rem", fontSize: "2rem"}}>No country available with this name !</p>

        if(!this.state.error){
            posts =this.state.post.map(el =>{
                return <Countries 
                key={2} 
                title={el.name}
                flag={el.flag}
                region ={el.region}
                capital = {el.capital}
                />
            })
        }
        

        return(
            <div className={classes.Country}>
                <h1 className={classes.Title}>Write a Country Name</h1>
                <div className={classes.Search }>
                    <input type="text" value={this.state.valueName} placeholder={"Enter a country name"}onChange={(e) => this.inputCountry(e)} />
                    <button onClick={this.getCountries}>Find a country</button>
                </div>
                {posts}
            </div>
        )
    }
}

export default Country