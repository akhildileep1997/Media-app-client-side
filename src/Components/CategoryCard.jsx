import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteDraggedVideo } from "../services/allAPI";

function CategoryCard({ displayData }) {
  console.log('cardddddddddddddddddddddddd', displayData);
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const handleShow = async () => {
    setShow(true);
    // sort of desturucturing
    const { caption, embedLink } = displayData
  }

 const handleDelete = async (categoryId, videoId) => {
   const response = await deleteDraggedVideo(categoryId, videoId);
   console.log(response);
 };
 

    return (
      <div>
        <MDBCard style={{ width: "20rem", height: "18rem", margin: "30px" }}>
          <MDBCardImage
            onClick={() => handleShow()}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={displayData.url}
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              <h3>{displayData.caption}</h3>
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>

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
            <iframe
              width="100%"
              height="315"
              src={displayData?.embedLink}
              allowfullscreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }


export default CategoryCard;
