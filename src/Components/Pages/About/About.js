import React from "react";
import Self from '../../Images/self.jpg';
import { Card, Button,} from 'react-bootstrap';
import '../About/About.css';
// import { CoolCard, CoolCardImage, CoolCardText } from "react-cool-card";
 
 function AboutCard () {
    return (
        
<Card className= "aboutCard">
  <Card.Img className="image" variant="top" src={Self} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <div>My name is Ruben. I am currently studying web development because I have had a interest in technology, computers, and the cyber space. In today's modern age in society, it is imperative to at least have an understanding about programing in order to keep up with the fast-changing world. Learning how to build websites will open the door to other opportunities that have not explored, therefore, I am very excited to become a web developer and put my skills to work.</div>


    <div>Some of my hobbies include: workingout, dancing, reading, learning, spending time with friends and family, cooking, and watching movies.</div>
    </Card.Text>
    <Button className="cardButton" variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  
    )
};
export default AboutCard;