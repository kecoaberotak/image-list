import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props)

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  onSearchSubmit(entry){
    console.log(entry)
    axios.get(`https://pixabay.com/api/?key=25489413-2c7cd31196f9d8f827a106d2e&q=${entry}&image_type=photo`)
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '30px'}}>
        <SearchInput onSearchSubmit = {this.onSearchSubmit} />
      </div>
    )    
  }
}

export default App;