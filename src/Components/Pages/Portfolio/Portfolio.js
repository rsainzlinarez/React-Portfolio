
import React from "react";
import Self from '../../Images/website-Optimization.png';
import PasswordImg from '../../Images/password-Generator.png';
import GroupPro from '../../Images/entertainment-Site.PNG';
import WeatherDash from '../../Images/weather-Dashboar.png';
import Crypto from '../../Images/Crypto-Investment-Tracker.JPG';
import NoteTaker from '../../Images/note-taker.JPG';
import { Card, Button,} from 'react-bootstrap';
import '../Portfolio/Portfolio.css';
// import { CoolCard, CoolCardImage, CoolCardText } from "react-cool-card";
 
 function Portfolio () {

  const cardInfo = [
    {image: Self, title: 'prueba', text: 'teskkkkkt'},
    {image: PasswordImg, title: 'test2', text: 'One one one'},
    {image: GroupPro, title: 'test3', text: 'there eis'},
    {image: WeatherDash, title: 'test4', text: 'test'},
    {image: Crypto, title: 'test4', text: 'test'},
    {image: NoteTaker, title: 'test4', text: 'test'},
   
  ];

  const renderCard = (card, index) => {
    return (
        
   <Card className= "portfolioCards" key={index}>
     <Card.Img className="image" variant="top" src={card.image} />
     <Card.Body >
       
       <Card.Text>
        {card.text}
       </Card.Text>
       <Button className="cardButton" variant="primary">Go somewhere</Button>
     </Card.Body>
   </Card>
       )
  }
  return <div className='portpolioCards'> 
  {cardInfo.map(renderCard)}
  
  </div>;

};
export default Portfolio;
