import React, { useEffect } from "react";
import "../../Components/home/home.css";
import video from "../../assets/mardins.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { AiFillFacebook,AiOutlineInstagram } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { SiTripadvisor } from "react-icons/si";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

 useEffect(()=>{
   
   Aos.init({duration:2000})
 },[])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4" />

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText" data-Aos="fade-up" >our Packages</span>
          <h1 className="homeTitle" data-Aos="fade-up">Search your holiday</h1>
        </div>

        <div className="cardDiv grid" data-Aos="fade-up">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here" />
              <GrLocation className="icon" />
            </div>
            </div>
      
       
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date"  />
              <GrLocation className="icon" />
            </div>
            </div>
 
     
          <div className="priceInput">
           <div className="label_total">
            <label htmlFor="price">max price:</label>
            <h3 className="total">$3000</h3>
           </div>
           <div className="input flex">
            <input type="range" max='3000' min='200'/>
           </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className='icon'/>
            <span>MORE FİLTERS</span>
          </div>
        </div>
   <div className="homeFooterIcons flex" data-Aos="fade-up">
    <div className="rightIcons">
      <AiFillFacebook className="icon"/>
      <AiOutlineInstagram className="icon"/>
     <SiTripadvisor className='icon'/>
    </div>

   <div className="leftIcons">
<BsListTask className="icon"/>
<TbApps className="icon"/>
   </div>
   </div>

      </div>
    </section>
  );
};

export default Home;
