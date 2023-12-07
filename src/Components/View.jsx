import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'



function View({uploadVideoServerResponse}) {
  // setting useState
  const [videos, setVideos] = useState([]);

  // for deleting
  const[deleteVideoStatus,setDeleteVideoStatus] = useState(false)
  
const getEveryVideo = async () => {
  try {
    const response = await getAllVideos();
    console.log(response.data); // Log the data to check if it's an array
    setVideos(response.data);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
  };
  
  console.log(videos); //contains array of videos
  useEffect(()=>{
    getEveryVideo()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  return (
    <>
      <Row>
        {videos && videos.length > 0 ? (
          videos.map((item) => (
            <Col sm={12} md={6} lg={6} key={item.id}>
              <VideoCard
                displayData={item}
                setDeleteVideoStatus={setDeleteVideoStatus}
              />
            </Col>
          ))
        ) : (
          <p style={{ color: "red", marginTop: "100px" }}>No Videos Added</p>
        )}
      </Row>
    </>
  );
}

export default View