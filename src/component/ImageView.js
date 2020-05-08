import React from 'react';
import ReactDOM from 'react-dom';
import './ImageView.css';
import pot1 from '../assets/pot1.jpeg';
import Button from 'react-bootstrap/Button';
import $ from "jquery";
import { Form, Upload, Input } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';



class ImageView extends React.Component{

  constructor(){
    super();

    this.formRef = React.createRef(); // COMBAK:

    this.acceptTypes = ["image/jpeg", "image/jpg", "image/png"]

    this.state = {
      currImg: pot1,
      currOutput: "Welcome to Not Pot!"
    }
  }


  fileDisplay(img) {
    if (this.acceptTypes.includes(img.type)) {
      this.setState({
        currImg: URL.createObjectURL(img),
        currOutput: "Click submit to evaluate the image!"
      })
    }
    else {
      this.setState({
        currOutput: "Please upload only 1 image of an accepted type (.jpg, .jpeg, .png)."
      })
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


  fileUpload(fileList) {
    var img = fileList.dragger.file.originFileObj;
    var imgList = fileList.dragger.fileList
    if (this.acceptTypes.includes(img.type) && imgList.length == 1) {
      var self = this;
      var formData = new FormData();
      formData.append('img', img)

      $.ajax({
            type: 'POST',
            url: 'https://3.134.83.90:5000/api/model',
            data: formData,
            enctype: 'multipart/form-data',
            contentType: false,
            cache: false,
            processData: false,

            success: function(response) {
              console.log(response)

              self.percentDisplay(response)
            }
        });
    }
    else {
      this.setState({
        currOutput: "Please upload only 1 image of an accepted type (.jpg, .jpeg, .png)."
      })
    }

    this.formRef.current.resetFields();
  }


  // TODO: add yes/no buttons that let me label data that people upload
  render() {
    return(
      <div className="App">
        <div><img class="potImg" src={this.state.currImg} height="250" /></div>
        <div>{this.state.currOutput}</div>

        <div>
          Upload an image and let the machine learning model tell you whether or not it contains pot!
        </div>

        <div>
          <Form
            name="my_form"
            onFinish={(fileList) => this.fileUpload(fileList)}
            ref={this.formRef}
          >

            <Form.Item>
              <Form.Item name="dragger" noStyle>
                <Upload.Dragger
                  name="files"
                  accept={this.acceptTypes}
                  beforeUpload={file => this.fileDisplay(file)}
                  >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >

              <Button type="primary"> {/*type="primary" is what makes onFinish work*/}
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}


export default ImageView;
