import React ,{Component} from "react"
import classes from "./App.module.css"

import Country from "./containers/Country/Country"

class App extends Component {

  render(){
    return (
      <div className={classes.App}>
        <Country/>
      </div>
    );
  }



  
}

export default App;
