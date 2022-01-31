import React from "react";

class SearchInput extends React.Component {
  constructor(props){
      super(props)
      this.state={entry: ''}

      // cara 1 bila tidak pakai arrow function
      // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // cara 2, diubah jadi arrow function
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">

              {/* untuk menggunakan fungsi/callback dalam event, tidak ditambahkan parentheses atau (), karena fungsi akan dijalankan secara automatis bila ditambahkan () */}
              {/* cara 1 */}
              {/* <input type="text" placeholder="search..." onChange={this.onInputChange}/> */}

              {/* cara 2 */}
              <input type="text" placeholder="search..." 
                  onChange={(event) => this.setState({entry: event.target.value})}
                  // value memiliki nilai sesuai state agar textfield menampilkan text sesuai inputan user
                  value={this.state.entry}
              />

              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchInput;