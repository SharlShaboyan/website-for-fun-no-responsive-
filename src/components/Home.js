import { useState } from 'react';
import './css/home.css';

function Home() {
    const imgs = [
        {
          src : "../images/nkar.jpg"
        },
        {
          src : "../images/nkar2.jpg"
        },
        {
          src : "../images/nkar4.jpg"
        }
      ];
    
      let [tiv, setTiv] = useState(0);
      const [pic, setPic] = useState(imgs[tiv]);
    
      let count = imgs.length - 1;
    
    return (
      <div className="home">

        <button className="left" onClick={() => {
          setTiv(tiv-=1)
          if(tiv < 0) {
            setTiv(tiv = count)
            setPic(imgs[tiv])
          } else {
            setPic(imgs[tiv])
          }     
        }}>Prev</button>
    
        <img src={pic.src} alt="nkar" />
    
        <button className="right" onClick={() => {
          setTiv(tiv+=1)
          if(tiv > count) {
            setTiv(tiv = 0)
            setPic(imgs[tiv])
          } else {
            setPic(imgs[tiv])
          }
          }}>Next</button>
      </div>
    )
}

export default Home;