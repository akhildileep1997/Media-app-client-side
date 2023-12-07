import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'


function Landingpage() {
  const navigate=useNavigate()

  return (
    <div>
      {/* first row */}
      <Row className="m-5 p-3">
        <Col>
          {/* content */}
          <h3 className="text-light">
            Welcome to <span className="text-warning">Media Player</span>{" "}
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            debitis suscipit nam, aut dicta officia ad quasi repellendus
            doloremque impedit labore a maiores hic aliquam saepe odio quam
            veritatis vero? Minima nihil molestias modi reiciendis dicta,
            deleniti repudiandae iusto hic necessitatibus doloribus itaque
            labore temporibus quaerat, officiis corrupti qui culpa officia ex
            eum voluptatibus, voluptatem quam. Quasi repudiandae distinctio
            expedita!
          </p>
          <button
            onClick={() => navigate("/home")}
            className="btn btn-warning my-4"
          >
            Get Started
          </button>
        </Col>
        <Col style={{ marginLeft: "50px" }}>
          {/* image */}
          <img
            style={{
              width: "600px",
              height: "280px",
              borderRadius: "20px",
              borderBottom: "2px solid orange",
            }}
            src="https://th.bing.com/th/id/R.4cd71fec8d928d37077db3651021a4be?rik=S%2blaeiLWqLlphg&riu=http%3a%2f%2f38.media.tumblr.com%2f5faafc026fcaa52eb621a6da636e4c80%2ftumblr_nic0wuHZKZ1tc8rbno1_1280.gif&ehk=alXCJBwuWaLv2UX8%2f1LwtGQ4De1w9QxYmN5JAay%2fmrQ%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </Col>
      </Row>

      {/* 2nd row */}
      <Row className="m-5">
        <h2 className="text-center text-light my-5">Features</h2>
        <Col style={{ marginLeft: "180px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "250px" }}
              src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "250px" }}
              src="https://media0.giphy.com/media/26tn7BL2UDTMVWovu/giphy-downsized.gif"
            />
            <Card.Body>
              <Card.Title>Categories Videos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "250px" }}
              src="https://cdn.dribbble.com/users/154088/screenshots/770283/attachments/76374/music_player02.gif"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* 3rd row */}
      <Row className="border border-1 border-warning p-5 m-5">
        <Col>
          <h3 className="text-light my-5">Simple, Fast and Powerful</h3>
          <h5>Play Everything</h5>
          <p className="text-warning">
            Allows to add videos on different topic with respected images and
            enables autoplay while clicking on the image card
          </p>
          <h5>Categorise Videos</h5>
          <p className="text-warning">
            Allows to add different categories and also enable us to drag and
            drop the added videos to the respected categories
          </p>
          <h5>Managing History</h5>
          <p className="text-warning">
            Allows you to view the watch history of the videos from the category
            list and from the added video list
          </p>
        </Col>
        <Col>
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/WWr9086eWtY?si=kQlT1pU7KoFGJPP5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
}

export default Landingpage