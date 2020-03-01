import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    state = { gifs: [],
    }
    onSubmitKeyword = (keyword) => {
        const searchTerm = keyword
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json() )
        .then(({data}) => this.setState({gifs: data}))
    }
    render() {
        return (
            <div>
                <GifSearch onSubmitKeyword={this.onSubmitKeyword}/>
                <GifList gifs={this.state.gifs} />
            </div>
        
            )
        }
    }

    export default GifListContainer;
