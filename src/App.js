import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Container>
        <Row>
          <Col>
        <h1>Welcome to my first project using react</h1>
            
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <p>This is the main content of my app.</p>
          </Col>
          <Col md="4">
            <p>This is a sidebar.</p>
          </Col>
        </Row>
      </Container>

        <img src={logo} className="App-logo" alt="logo" />
        
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button> 



      </header>
    </div>
  );




}

export default App;
