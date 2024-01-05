import React from 'react';
import "./FounderCard.css";

export type FounderCardProps = {
    img: string,
    aboutMe: string
}

const FounderCard: React.FC<FounderCardProps> = ({ img, aboutMe }) => {
  return (
    <div className="founder-container">
      <img 
        src={img} 
        alt="Founder Image" 
        className="founder-img"
    />
      <p className="founder-text">{aboutMe}</p>
    </div>
  )
}

export default FounderCard
