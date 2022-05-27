import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
  AiOutlineHeatMap,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <AiFillPhone size="3rem" color="rgb(177, 131, 182)" /> <br />
          <LinkItem href="tel:+49 176 34366882">+49 176 34366882</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <AiFillMail size="3rem" color="rgb(177, 131, 182)" /> <br />
          <LinkItem href="mailto:saif.halab@gmail.com">
            saif.halab@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <AiOutlineHeatMap size="3rem" color="rgb(177, 131, 182)" /> <br />
          <LinkItem>Schöneberg 10783 Berlin</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/saifhosari">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/saif-hosari-39853b1b0">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
