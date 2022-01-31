import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {images: [] }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=25489413-2c7cd31196f9d8f827a106d2e&q=${entry}&image_type=photo`)
    this.setState({images: response.data.hits})
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '30px'}}>
        <SearchInput onSearchSubmit = {this.onSearchSubmit} />
        We have {this.state.images.length} images
        <br />
        <ImageList images = {this.state.images}/>
      </div>
    )
  }
}

export default App;