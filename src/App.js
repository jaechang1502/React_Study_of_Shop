import { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "./plugins/bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import shoedata from "./data/shoedata.js";
import Detail from "./routers/detail.js";
import Event from "./routers/event.js";

function App() {
  const navigate = useNavigate();
  const [shoe] = useState(shoedata);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="showbox">
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Row>
                  {shoe.map((a) => {
                    let price = a.price.toLocaleString("ko-KR");
                    return (
                      <Col>
                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={a.img} />
                          <Card.Body>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Subtitle>{a.content}</Card.Subtitle>
                            <Card.Text>{price}Won</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            }
          />
          <Route path="/detail" element={<Detail />} />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<div>첫 주문시 양배추즙 보너스</div>} />
            <Route path="one" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
