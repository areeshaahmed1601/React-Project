import React,{useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
  
} from './NavbarElement'

const Navbar = ({toggle,}) => {
    const [scrollNav,setScrollNav]=useState(false)

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])
  return (
    <>
     <Nav scrollNav={scrollNav}>
         <NavbarContainer >
             <NavLogo to='/'>
                 Namrata Agarwal
             </NavLogo>
             <MobileIcon onClick={toggle}>
                 <FaBars/>
             </MobileIcon>
             <NavMenu >
             <NavItem>
                     <NavLinks ><Link className='links' to={'/'}>Home</Link></NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks ><Link className='links' to={'/footer'}>About</Link></NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks><Link  className='links' to={'/books'}>Books</Link></NavLinks>
                 </NavItem>
                 <NavItem>
                     <NavLinks><Link className='links' to ={'/footer'}>Contact</Link></NavLinks>
                 </NavItem>
             </NavMenu>
         
         </NavbarContainer>
     </Nav>
    </>
  )
}

export default Navbar