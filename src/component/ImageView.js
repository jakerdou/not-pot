import React from 'react';
import ReactDOM from 'react-dom';
import './ImageView.css';
import dk1 from '../assets/dk1.png';
import mario1 from '../assets/mario1.png';
import Button from 'react-bootstrap/Button';

class ImageView extends React.Component{

  constructor(){
    super();

    this.imgs = [
      dk1,
      mario1
    ]

    this.outputs = [
      "This image contains Donkey Kong! Is that correct?",
      "This image does not contain Donkey Kong! Is that correct?"
    ]

    this.state = {
      currImg: this.imgs[0],
      currOutput: this.outputs[0]
    }
  }

  GetNextImg() {
    var ci = this.state.currImg;
    var index = this.imgs.findIndex(imgs => imgs === ci);

    var nextImg = null;
    var nextOutput = null;

    if (index===1) {
      nextImg = this.imgs[0];
      nextOutput = this.outputs[0];
    }
    else {
      nextImg = this.imgs[1];
      nextOutput = this.outputs[1];
    }

    this.setState({
      currImg: nextImg,
      currOutput: nextOutput
    })
  }

  render() {
    return(
      <div className="App">
        <div><img class="dkImg" src={this.state.currImg} height="250" /></div>
        <div>{this.state.currOutput}</div>
        <div>
          <Button onClick = {() => this.GetNextImg()}>Yes</Button>
          <Button onClick = {() => this.GetNextImg()}>No</Button>
        </div>
        <div><Button>UPLOAD IMAGE</Button></div>
      </div>
    )
  }
}

export default ImageView;
