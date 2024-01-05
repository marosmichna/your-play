import { useEffect, useState } from "react";
import "./AnimationHouse.css";

const AnimationHouse: React.FC = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
        setShowButton(true)
    }, 3500)
    return () => clearTimeout(timeout)
  }, []);

  return (
    <div>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
        <div className="line4" />
        <div className="line5" />
        <div className="line6" />
        {
            showButton && <button className="lineButton">YOUR IDEA</button>
        }
        
    </div>
    
  )
}

export default AnimationHouse