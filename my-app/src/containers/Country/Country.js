import React,{Component} from "react"
import axios from "axios"
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
            return <Countries key={2} title={el.name}/>
        })

        return(
            <div className="App">
                <h1>Write a Country Name</h1>
                <input type="text" value={this.state.valueName} onChange={(e) => this.inputCountry(e)} />
                <button onClick={this.getCountries}>Find a country</button>
                {countries}
            </div>
        )
    }
}

export default Country