
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'



function Home() {

  //state for doing state-lifting (in parent component)
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})
 
  return (
    <div style={{ minHeight: "70vh" }}>
      <Row className="my-5">
        <Col>
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </Col>
        <Col className="text-center">
          <Link style={{ textDecoration: "none" }} to={"/watch-history"}>
            <button style={{ color: "rgb(8, 8, 8)",backgroundColor:'white',padding:'12px',border:'none',borderRadius:'8px' }}>Watch History</button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h3>Added Videos</h3>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </Col>
        <Col sm={12} md={6} lg={6} className="text-center">
          <Category />
        </Col>
      </Row>
    </div>
  );
}

export default Home