import React from 'react'
import { Form } from 'react-bootstrap';

export default function Info() {
    return (
        <>
     <Form className= "contact-info " style={{color: "White"}}>

<section className="form-group">
  <h2 className= "form-title">Contact Info</h2>
</section>

<section className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <p>Ruben Sainz</p>
  </section>

  <section className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <p>rsainzlinarez@gmail.com</p>
</section>

  <div className="form-group">
    <label for="exampleFormControlSelect1">Phone Number</label>
    <p>(971) 239-6016</p>
  </div>

  <section className="form-group">
    <label for="exampleFormControlTextarea1">Resume</label> <br/>
    <a className = " download-link" href="./assets/Resume.pdf" download="newfilename">Download Resume</a>
  </section>

  <section className="form-group">
    <label for="exampleFormControlTextarea1">LinkedIn</label> <br/>
    <a className = " download-link" href="https://www.linkedin.com/in/ruben-s-906bb68b/" download="newfilename">LinkedIn Profile</a>
  </section>

  <section className="form-group">
    <label for="exampleFormControlTextarea1">GitHub</label> <br/>
    <a className = " download-link" href="https://github.com/rsainzlinarez" download="newfilename">GitHub Profile</a>
  </section>
</Form>

     </>
    )
}

