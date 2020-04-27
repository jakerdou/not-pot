import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ImageView from './ImageView.js'

class App extends React.Component{
    render(){
        return(
            <div className="App">
              <h1>Not Pot</h1>
              <ImageView />
            </div>
        )
    }
}

export default App;
