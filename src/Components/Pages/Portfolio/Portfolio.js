
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
    {image: Self, link: 'https://github.com/rsainzlinarez/Website-Optimization', title: 'Website Optimization'},
    {image: PasswordImg, link: 'https://github.com/rsainzlinarez/Random-Password-Generator', title: 'Password Generator'},
    {image: GroupPro, link: 'https://github.com/rsainzlinarez/entertainment-lists', title: 'Entertainment List'},
    {image: WeatherDash, link: 'https://github.com/rsainzlinarez/Weather-Dashboard', title: 'Weather Dashboard'},
    {image: Crypto, link: 'https://github.com/team-crypto-currency/crypto-investment-tracker',  title: 'Crypto Investment Tracker'},
    {image: NoteTaker, link: 'https://github.com/rsainzlinarez/Note-Taker', title: 'Note Taker'},
   
  ];

  const renderCard = (card, index) => {
    return (
    
   <Card className= "portfolioCards" key={index}>
     <Card.Img className="image" variant="top" src={card.image} />
     <Card.Body >
       
       <Card.Text>
        {card.text}
       </Card.Text>
       <Button className="cardButton" href={card.link} variant="primary">{card.title}</Button>
     </Card.Body>
   </Card>
       )
  }
  return <div className='portpolioCards'> 
  {cardInfo.map(renderCard)}
  
  </div>;

};
export default Portfolio;
