import React from "react";
import Self from '../../Images/self.jpg';
import { Card, Button,} from 'react-bootstrap';
import '../About/About.css';
// import { CoolCard, CoolCardImage, CoolCardText } from "react-cool-card";
 
 function AboutCard () {
    return (
        
<Card className= "aboutCard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Self} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  
    )
};
export default AboutCard;