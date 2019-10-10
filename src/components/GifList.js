import React, {Component} from 'react'
import GifSearch from './GifSearch'

class GifList extends Component {
    render() {
        if(this.props.gifs.length > 0) {
            return(
                <div>
                    <ul>
                        <li>
                            <img src={this.props.gifs[0].images.downsized.url} alt="gifresult"/>
                        </li>
                        <li>
                            <img src={this.props.gifs[1].images.downsized.url} alt="gifresult"/>
                        </li>
                        <li>
                            <img src={this.props.gifs[2].images.downsized.url} alt="gifresult"/>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return(<h3>What GIF do you want to search?</h3>)
        }
    }
}

export default GifList;