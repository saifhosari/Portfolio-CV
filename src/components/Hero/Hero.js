import React from "react";

// import saifcv from "../../../public/images/Saif'CV.pdf";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        being a web developer is a life style and a great way to show the world
        my creations...
        <br />
        Hire Me And See Wonders!
      </SectionText>

      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1Ski6QBbY3qdVkv9sNcw4H_XQJCG86xJP/view?usp=sharing"
          )
        }
      >
        learn More/Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
