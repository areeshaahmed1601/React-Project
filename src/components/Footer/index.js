import React from 'react';
import {FaFacebook,FaTwitter,FaLinkedin,FaInstagram,FaAmazon} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElement';
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle > About me </FooterLinkTitle>
                            <FooterLink href="https://www.linkedin.com/in/namrata-agarwal-bb817b13/" target="_blank">Connect with me</FooterLink>
                            <FooterLink href="https://www.instagram.com/p/CPxEjKPJa1C/" target='_blank'> Activity</FooterLink>
                      </FooterLinkItems>

                      <FooterLinkItems>
                        <FooterLinkTitle> Awards </FooterLinkTitle>
                            <FooterLink href="https://www.instagram.com/p/CDZp39VJO8Z/" target='_blank'>award 1</FooterLink>
                            <FooterLink href="https://www.instagram.com/p/CD4cwevJg0z/" target='_blank'>award 2</FooterLink>
                      </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social media </FooterLinkTitle>
                            <FooterLink href="https://www.instagram.com/p/CZeoswmuFwS/" target='_blank'>Instagram</FooterLink>
                            <FooterLink  href="https://www.linkedin.com/in/namrata-agarwal-bb817b13/" target='_blank'>Linkedin</FooterLink>
                            <FooterLink href="https://www.amazon.com/Namrata-Agarwal/e/B08ZYYZP8T?ref=sr_ntt_srch_lnk_1&qid=1647348467&sr=8-1
			" target="_blank">Amazon</FooterLink>
                           <FooterLink href="https://www.instagram.com/p/CZeoswmuFwS/" target="_blank">Instagram</FooterLink>
                      </FooterLinkItems>

                      <FooterLinkItems>
                        <FooterLinkTitle> Books and magzines </FooterLinkTitle>
                            <FooterLink  href="https://www.instagram.com/p/B45wptLgtzA/" target="_blank">Life in lagos nigeria</FooterLink>
                           
                      </FooterLinkItems>
            </FooterLinksWrapper>

            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Namrata Agarwal
                    </SocialLogo>
                    <WebsiteRights>Namrata Agarwal &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                    
                        <SocialIconLink href='https://instagram.com/namrata.writer?utm_medium=copy_link' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>

                        <SocialIconLink href='https://www.linkedin.com/in/namrata-agarwal-bb817b13/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>

                        <SocialIconLink href='https://twitter.com/namrataagarwal?t=G1u7-RcWGmr-HmfQawhX1g&s=09' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>

                        <SocialIconLink href='https://www.amazon.com/Namrata-Agarwal/e/B08ZYYZP8T/ref=dp_byline_cont_book_1
' target="_blank" aria-label="Amazon">
                        <FaAmazon/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer