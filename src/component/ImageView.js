import React from 'react';
import ReactDOM from 'react-dom';
import './ImageView.css';
import pot1 from '../assets/pot1.jpeg';
import notpot1 from '../assets/notpot1.jpg';
import Button from 'react-bootstrap/Button';
import $ from "jquery";

class ImageView extends React.Component{

  constructor(){
    super();

    this.imgs = [
      pot1,
      notpot1
    ]

    this.outputs = [
      "This image contains Pot! Is that correct?",
      "This image does not contain Pot! Is that correct?"
    ]

    this.state = {
      currImg: this.imgs[0],
      currOutput: this.outputs[0]
    }
  }

  getNextImg() {
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

  fileUpload(event) {
    var img = event.target.files[0]
    var self = this;
    var formData = new FormData();
    formData.append("img", img)


    $.ajax({
          type: 'POST',
          url: 'http://localhost:5000/api/model',
          data: formData,
          processData: false,

          success: function(response) {
            console.log(response)
          }
      });
  }

  render() {
    return(
      <div className="App">
        <div><img class="dkImg" src={this.state.currImg} height="250" /></div>
        <div>{this.state.currOutput}</div>
        <div>
          <Button onClick = {() => this.getNextImg()}>Yes</Button>
          <Button onClick = {() => this.getNextImg()}>No</Button>
        </div>
        <div>
          <input type="file" accept=".jpg,.jpeg,.png" onChange={(event) => this.fileUpload(event)} />
        </div>
        <div>
          Upload an image and let the machine learning model tell you whether or not it contains pot!
        </div>
      </div>
    )
  }
}

export default ImageView;
