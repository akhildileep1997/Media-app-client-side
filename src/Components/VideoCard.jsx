import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { deleteAVideo, watchVideoHistory } from '../services/allAPI';




function VideoCard({displayData,setDeleteVideoStatus}) {
  console.log(displayData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const handleShow = async() => {
    setShow(true);
    // sort of desturucturing
    const {caption,embedLink} = displayData
    
    //setting date and time
    let today = new Date()
    // console.log(today);
    const timeStamp = new Intl.DateTimeFormat('en-us',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);
    console.log(timeStamp); //11/07/2023, 09:44:29 AM

     // make an api call to get the video history
    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }
    await watchVideoHistory(videoDetails)

  }
  


//function for deleting the video
const deleteVideo = async(id) =>{
//make api call for deleting
const response = await deleteAVideo(id)
console.log(response);
setDeleteVideoStatus(true)
}

//function for draging
const dragStarted = (e,id) =>{
  console.log("drag started" +id ,e);
 e.dataTransfer.setData("videoId",id);
}

  return (
    <div>
    {
            <MDBCard draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{width:'20rem',height:'20rem',margin:'30px'}}>
            <MDBCardImage style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:'10px'}} onClick={handleShow} src={displayData.url} position='top' alt='...' />
           <MDBCardBody>
             <MDBCardTitle style={{color:'white'}}><h3>{displayData?.caption}</h3></MDBCardTitle>
             <MDBBtn style={{background:'red'}}  onClick={()=>deleteVideo(displayData?.id)}  href='#'>Delete</MDBBtn>
           </MDBCardBody>
         </MDBCard>
    }
    {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={displayData?.embedLink} allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default VideoCard