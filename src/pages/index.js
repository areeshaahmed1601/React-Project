import React,{useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infoSection';
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from '../components/infoSection/Data';
import Service from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <Service/>
    <Footer/>

    
    </>
  )
}

export default Home