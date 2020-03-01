import React from "react";

const GifList = props => {
  return (
    <div>
      {props.gifs.map(gif => (
        <img key={gif.url} src={gif.url} alt="gif" />
      ))}
    </div>
  );
};

export default GifList;

// import React, {Component} from 'react'

// export default class GifList extends Component {
//     render() {
//         return(
//             <div>
//                 <ul>
//                     <li><img src={this.props} /></li>
//                 </ul>
//             </div>
//         )
//     }
// }
