import React from 'react'
import { Form,} from 'react-bootstrap';
import '../Contact/Contact.css'
import Info from './Info';

export default function Contact() {
    return (
      <>
      <div>
        
        <Form className='contactCard'>
        <section className="form-group">
  <h2 className= "form-title">Contact Info</h2>
</section>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>First and Last Name</Form.Label>
          <Form.Control className= "inputField"  as="textarea" rows={1}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Email </Form.Label>
          <Form.Control className= "inputField" type="email" placeholder="name@example.com">
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Example multiple select</Form.Label>
          <Form.Control className= "inputField" as="select" multiple>
            <option>Web Development</option>
            <option>App Development</option>
            <option>Marketing</option>
            <option>Business Strategies</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control className= "inputField" as="textarea" rows={3} />
        </Form.Group>
      </Form>

      </div>
      <div>
        <Info/>
      </div>

     
      </>
      // <>
      // <Info/>
      // </>


      
    )

}


