import React,{useState} from 'react'
import Background from '../../images/bg.jpg'
import {Button} from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElement'
const HeroSection = () => {
  const[hover,setHover]=useState(false)


  const onHover=()=>{
    setHover(!hover)
  }
  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg  src={Background}/>
        </HeroBg>
        <HeroContent>
          <HeroH1>Books Are Uniquely Portable Magic</HeroH1>
            <HeroP>
            Get best books for your children 
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection