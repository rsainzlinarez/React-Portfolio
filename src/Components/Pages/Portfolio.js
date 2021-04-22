import React from "react";
import Self from '../Images/self.jpg';
import { CoolCard, CoolCardImage, CoolCardText } from "react-cool-card";
 
export default function Example () {
    return (
        <>
  <CoolCard>
    <CoolCardImage src={Self} alt="sample" />
    <CoolCardText
      title="This is a title."
      description="This is a description."
    />
  </CoolCard>
  </>
    )
};

