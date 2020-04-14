import React from 'react';
import ReactDOM from 'react-dom';
import './ImageView.css';
import dk1 from '../assets/dk1.png';

class ImageView extends React.Component{
    render(){
        return(
            <div className="App">
              <div><img class="dkImg" src={dk1} height="250" /></div>
              <div>This image contains Donkey Kong! Is that correct?</div>
              <div>Yes No</div>

            </div>
        )
    }
}

export default ImageView;
