import React from 'react'
import { Navbar, Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';
import '../Footer/Footer.css';

export default function Footer() {
    return (
      <>
     <Form>
      <footer className=" footer site-footer">
        <div className="container">
          <div className="row">                  
                <a className="text facebook" href="#">LinkedIn<i className="fa fa-facebook"></i></a>
                <a className="text twitter" href="#">GitHUB<i className="fa fa-twitter"></i></a>
                <a className="text dribbble" href="#">Facebook<i className="fa fa-dribbble"></i></a>
          </div>
        </div>
  </footer>
  </Form>
  </>
    )
}
