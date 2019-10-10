import React, {Component} from 'react'
import { EventEmitter } from 'events'

class GifSearch extends Component {
    state = {
        keyword: ''
    }
    handleKeywordChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitKeyword(this.state.keyword)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.value} onChange={event => 
                    this.handleKeywordChange(event)}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default GifSearch;