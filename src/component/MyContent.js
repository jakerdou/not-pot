import React from 'react';
import ReactDOM from 'react-dom';
import './MyContent.css';
import ImageView from './ImageView.js'

class MyContent extends React.Component{
    render(){
        return(
            <div className="MyContent">

              <ImageView />

            </div>
        )
    }
}

export default MyContent;
