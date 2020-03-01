import React, { Component } from "react";
import GifList from "../components/GifList.js";
import GifSearch from "../components/GifSearch.js"

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query = "ducks") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}


  // constructor() {
  //   super();
  //   this.state = {
  //     searchResults: []
  //   };
  // }

  // componentDidMount() {
  //   let tempArray = [];
  //   fetch(
  //     "http://api.giphy.com/v1/gifs/search?q=ducks&api_key=dc6zaTOxFJmzC&rating=g"
  //   )
  //     .then(response => response.json())
  //     .then(response => {
  //       for (let i = 0; i < 3; i++) {
  //         tempArray.push(response.data[i]);
  //       }
  //       this.setState = {
  //         searchResults: tempArray
  //       };
  //     });
  // }

  // render() {
  //   return (
  //     <div>
  //       {console.log(this.state.searchResults)}
  //       {/* <GifList img={this.state.searchResults[1]} />
  //       <GifList img={this.state.searchResults[2]} /> */}
  //     </div>
  //   );
  // }

