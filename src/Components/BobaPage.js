import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function BobaPage() {
    const history = useHistory();
    const [type, setType] = useState("California");

    return (
        <>
            <div>
                <h1><br /><br /><br />Boba Entry</h1>
                <Form>
  <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>Drink</Form.Label>
      <Form.Control placeholder="Oolong Milk Tea" />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Restaurant</Form.Label>
      <Form.Control placeholder="Wushiland" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Row className="mb-3">
  <Form.Group as={Col}>
    <Form.Label>City</Form.Label>
    <Form.Control />
  </Form.Group>
  
  <Form.Group as={Col}>
      <Form.Label>State</Form.Label>
        <Form.Control 
        as="select"
        value={type}
        onChange={e => {
          console.log("e.target.value", e.target.value);
          setType(e.target.value)
        }}
      >
        <option value="CA">California</option>
        <option value="AL">Alabama</option>
        <option value="AZ">Arizona</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} md="3">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
</Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
            <Button onClick={() => history.push('/')} size='lrg' variant='dark'>Return</Button>
        </>
    )
}