import React from 'react';
import ReactDOM from 'react-dom';
import './ImageView.css';
import pot1 from '../assets/pot1.jpeg';
import Button from 'react-bootstrap/Button';
import $ from "jquery";


class ImageView extends React.Component{

  constructor(){
    super();

    this.uploads_dir = "../../backend/uploaded-images/"

    this.state = {
      currImg: pot1,
      currOutput: "Welcome to Not Pot!"
    }
  }


  fileDisplay(img) {
    console.log(img)

    var img_path = this.uploads_dir + img.name

    try {
      this.setState({
        currImg: URL.createObjectURL(img)
      })
    }
    catch(err) {
      console.log(err)
    }
  }


  percentDisplay(response) {
    var pct_pot = parseFloat(response)
    var pct_not_pot = 1 - pct_pot
    pct_not_pot = pct_not_pot * 100
    pct_not_pot = pct_not_pot.toFixed(0)

    var msg = "We are " + pct_not_pot + "% certain that this is Not Pot!"

    this.setState({
      currOutput: msg
    })
  }


  fileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      var img = event.target.files[0]
      var self = this;
      var formData = new FormData();
      formData.append('img', img)

      $.ajax({
            type: 'POST',
            url: 'http://localhost:5000/api/model',
            data: formData,
            enctype: 'multipart/form-data',
            contentType: false,
            cache: false,
            processData: false,

            success: function(response) {
              console.log(response)

              self.fileDisplay(img)
              self.percentDisplay(response)
            }
        });
    }
  }


  // TODO: add yes/no buttons that let me label data that people upload
  render() {
    return(
      <div className="App">
        <div><img class="potImg" src={this.state.currImg} height="250" /></div>
        <div>{this.state.currOutput}</div>

        <div>
          <form method="post">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(event) => this.fileUpload(event)} />
          </form>
        </div>

        <div>
          Upload an image and let the machine learning model tell you whether or not it contains pot!
        </div>
      </div>
    )
  }
}


export default ImageView;
