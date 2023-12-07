import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBBtn } from 'mdb-react-ui-kit'
import { MDBInput } from 'mdb-react-ui-kit';
import { uploadVideo } from '../services/allAPI';



function Add({setUploadVideoServerResponse}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for setting the values 
  const [video,setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })  //to hold the adding video details
  console.log(video);

  //function for custamizing you tube link
  const getEmbedLink=(e)=>{
    const {value} = e.target
    if(value){
      console.log(value.slice(-31));
      const link = `https://www.youtube.com/embed/${value.slice(-31)}`
      setVideo({...video,embedLink:link})
    }
    else{
      setVideo({...video,embedLink:""})
    }
  }

  //for adding video
  const handleAdd = async() =>{
    const {id,caption,url,embedLink} = video  //destructuring
    if(!id||!url||!caption||!embedLink)
    {
      alert("please enter the details of video")
    }
    else{
      //make an api call to add video details to db.json
      const response = await uploadVideo(video)
      console.log(response);
      if(response.status>=200&&response.status<=300)
      {
        setUploadVideoServerResponse(response.data)
        alert(`${response.data.caption} Added successfully`)
        handleClose() //for closing modal after adding the data one time
      }
      else{
        alert("oops may be the id is already in use please enter a new id")
      }
    }
  }
  return (
    <div>
      <Row>
        <Col xl={6} className="d-flex" style={{ marginLeft: "300px" }}>
          <div className='d-flex'>
            <h4 style={{ margin: "0" }}>Upload Video</h4>
            <button
              style={{ padding: "7px", border: "none", width: "40px" }}
              onClick={handleShow}
              className="ms-4 mb-2 bg-warning"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          {/* modal */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header style={{ backgroundColor: "white" }} closeButton>
              <Modal.Title>Add Video</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "white" }}>
              <MDBInput
                onChange={(e) => setVideo({ ...video, id: e.target.value })}
                label="Video id"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <br />
              <MDBInput
                onChange={(e) =>
                  setVideo({ ...video, caption: e.target.value })
                }
                label="video-caption"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <br />
              <MDBInput
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
                label="video-image-url"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <br />
              <MDBInput
                onChange={getEmbedLink}
                label="You-tube-video-link"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <br />
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "white" }}>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handleAdd} variant="success">
                Add video
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default Add