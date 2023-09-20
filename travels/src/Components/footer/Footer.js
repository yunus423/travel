import React, { useEffect } from 'react'
import '../../Components/footer/footer.css'
import malabadi from '../../assets/malabadi.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

    useEffect(()=>{
   
        Aos.init({duration:2000})
      },[])
  return (

   <section className='footer'>

    <div className='videoDiv'>

      <video  src={malabadi} loop autoPlay muted  type="video/mp4"></video>
    </div>
    <div className='secContent container'>

      <div className='contactDiv flex'>
        <div className='text' data-Aos="fade-up">

      <small>KEEP IN TOUCH</small>
      <h2>Travel width us</h2>
        </div>
        <div className='inputDiv flex'>
          <input data-Aos="fade-up"  type='text' placeholder='Enter Email Address'/> 
          <button data-Aos="fade-up" className='btn flex' type='submit'>
            SEND<FiSend className='icon'/>
          </button>
        </div>
        </div>

     <div className='footerCard grid'>
        <div className='footerIntro grid'>
            <div className='logoDiv'>
                <a className='logo flex' href='#'><MdOutlineTravelExplore className='icon'/>Travel.</a>
            </div>
            <div className='footerParagraph' data-Aos="fade-up">
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir
                . Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
                 galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                 Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
            </div>
            <div className='footerSocials' data-Aos="fade-up">
              <AiOutlineInstagram className='icon'/>
              <AiFillYoutube className='icon'  />
              <AiOutlineTwitter className='icon'/>
              <FaTripadvisor className='icon'/>
            </div> 
        </div>
        <div className='footerLinks grid'>
         <div className='linkGroup' data-Aos="fade-up" data-Aos-duration="3000">
         <span className='groupTitle'>OUR AGENCY</span>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Services
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
         Insurance
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Agency
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Tourism
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
        Payment
         </li>

         </div>
         
         <div className='linkGroup' data-Aos="fade-up" data-Aos-duration="4000">
         <span className='groupTitle'>PARTNERS</span>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
         Bookings
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
         Rentcars
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          HostelWord
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Trivago
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
         TripAdvisor
         </li>

         </div>

         <div className='linkGroup' data-Aos="fade-up"data-Aos-duration="5000">
         <span className='groupTitle'>LAST MINUTE</span>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
         Mardin
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
        Diyarbakır
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Hakkari
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Van
         </li>

         <li className='footerList flex'>
          <FiChevronRight className='icon'/>
        Bitlis
         </li>

         </div>
        </div>
        <div className='footerDiv flex' >
          <small  >TRAVEL WEBSİTE</small>
          <small >copyrights reserved - YUNUS </small>
        </div>
     </div>

        </div>
   
   </section>
  )
}

export default Footer