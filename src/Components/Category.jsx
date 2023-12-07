import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import { addCategory, deleteAVideo, deleteCategory, getAVideo, getCategory, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';
import CategoryCard from './CategoryCard';



function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state for holding value during adding the category
  const [categoryName,setCategoryName] = useState('')
  // state for holding the category values while fetching the data 
  const [category,setCategory] = useState([])

   //for adding category
const handleCategory = async () => {
  if (categoryName) {
    const reqBody = {
      categoryName,
      allVideos: [], 
    };
    const response = await addCategory(reqBody);
    console.log(response);
    handleClose();
    getCategoryList();
    setCategoryName("");
    alert("Category added successfully");
  } else {
    alert("Enter a valid category name");
  }
};

  // for getting the added category
const getCategoryList = async() =>{
   const {data} = await getCategory()  //{data} means destructuring done
   console.log(data);
   setCategory(data)
}

//for deleting category
const deleteCategoryList = async(id) =>{
  const result = await deleteCategory(id)
  getCategoryList()
  alert("Category Removed")
  console.log(result);
}
console.log(category);
useEffect(()=>{
  getCategoryList()
},[])


//for drag over
const dragOver=(e)=>{
  console.log("Drag Over");
  e.preventDefault()
}

//function for drag and drop
const videoDrop = async (e, categoryId) => {
  console.log("Video dropped at category Id of " + categoryId);
  const videoId = e.dataTransfer.getData("videoId");
  console.log("Video-card id: " + videoId);

  // Api call for getting that particular video
  const { data } = await getAVideo(videoId);
  console.log(data);

  // Get category details
  const selectedCategory = category?.find((item) => item.id === categoryId);
  console.log(selectedCategory);

  // Ensure allVideos is an array
  if (!selectedCategory.allVideos) {
    selectedCategory.allVideos = [];
  }

  // Need to push the dragged video details to allVideos array in category array
  selectedCategory.allVideos.push(data);

  // Making api call to update category
  await updateCategory(categoryId, selectedCategory);
  getCategoryList();
};




  return (
    <div style={{ padding: "50px" }}>
      <button
        onClick={handleShow}
        className="btn bg-warning text-dark text-center m-5"
      >
        Add Category
      </button>
      <div>
        {category.length > 0 ? (
          category.map((item) => (
            <div
              droppable
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => videoDrop(e, item.id)}
              className="p-5"
              key={item.id} // Add a unique key for each category
            >
              <div className="d-flex justify-content-between shadow">
                <h5>{item.categoryName}</h5>
                <button
                  onClick={() => deleteCategoryList(item.id)}
                  className="btn bg-danger"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div>
                <Row>
                  {item.allVideos &&
                  Array.isArray(item.allVideos) &&
                  item.allVideos.length > 0 ? (
                    item.allVideos.map((data) => (
                      <Col key={data.id}>
                        {" "}
                        {/* Add a unique key for each video card */}
                        <CategoryCard displayData={data} />
                      </Col>
                    ))
                  ) : (
                    <p style={{ color: "red" }}>No Videos in this Category</p>
                  )}
                </Row>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>No Categories Added</p>
        )}
      </div>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ backgroundColor: "white" }} closeButton>
          <Modal.Title style={{ backgroundColor: "white" }}>
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "white" }}>
          <MDBInput
            onChange={(e) => setCategoryName(e.target.value)}
            label="Category Name"
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
          <Button onClick={(e) => handleCategory()} variant="success">
            Add CAtegory
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category