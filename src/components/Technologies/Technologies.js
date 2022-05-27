import React from "react";
import {
  DiFirebase,
  DiReact,
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiCss3,
} from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
        <DiHtml5 size="4rem" color="darkred"  />
        <DiCss3 size="5rem" color="rgb(15, 78, 210)"  />
        <DiJavascript1 size="5rem" color="darkgoldenrod" />
        <SiTypescript size="4rem" color="rgb(95, 155, 204)"  />
        <DiReact size="6rem" color="rgb(171, 198, 219)"  />
        <DiNodejs size="8rem" color="darkgreen"  />
        <SiExpress size="4rem" color="white"  />
        <DiMongodb size="8rem" color="green"  />
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3Full size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
