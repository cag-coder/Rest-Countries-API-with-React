import React,{Component} from "react"
import axios from "axios"
import classes from "./Country.module.css"
import Countries from "../../components/Countries/Countries"
import Spinner from "../../components/UI/Spinner"
class Country extends Component{
    state={
        valueName:"",
        countryName: "Poland",
        post:[],
        error: false,
        loading: false
    }    

    componentDidMount(){    
        this.getCountries();
    }

    getCountries = () =>{

        this.setState({loading:true,valueName: " "})
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.countryName}`)
            .then(response =>{
               console.log(response.data)
                this.setState({
                    error: false,
                    post : response.data,
                    loading: false,
                    
                })
            })
            .catch(error =>{
                this.setState({error : true, loading:false})
            })
    }

    inputCountry = (e) =>{
        this.setState({
            valueName: e.target.value,
            countryName:this.state.valueName
        })
    }
    

    render(){

        let posts;
        if(this.state.loading){
            posts= <Spinner/>
        }
        if(!this.state.error && !this.state.loading){
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
        if(this.state.error){
            posts= <p style={{textAlign: "center", marginTop:" 10rem", fontSize: "2rem"}}>No country available with this name !</p>
        }
        

        return(
            <div className={classes.Country}>
                <h1 className={classes.Title}>Write a Country Name</h1>
                <div className={classes.Search }>
                    <input type="text" value={this.state.valueName} onChange={(e) => this.inputCountry(e)} />
                    <button onClick={this.getCountries}>Find a country</button>
                </div>
                {posts}
            </div>
        )
    }
}

export default Country