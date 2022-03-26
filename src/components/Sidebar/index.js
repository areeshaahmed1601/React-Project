import React from 'react'
import {Link} from 'react-router-dom'
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElement'
const Sidebar = ({isOpen,toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
           <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink  onClick={toggle}><Link className='links' to={'/'}>Home</Link></SidebarLink>
            <SidebarLink  onClick={toggle}><Link className='links' to={'/books'}>Books</Link></SidebarLink>
              <SidebarLink  onClick={toggle}><Link className='links' to={'/footer'}>About</Link></SidebarLink>
              <SidebarLink  onClick={toggle}><Link  className='links' to={'/footer'}>Contact</Link></SidebarLink>
             
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar