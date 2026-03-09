import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Skill } from "./skill/Skill";
import { TickerTape } from "../../../components/tickerTape/TickerTape";

const skillsItems = [
  { iconId: "ts", title: "TypeScript" },
  { iconId: "js", title: "JavaScript" },
  { iconId: "react", title: "React" },
  { iconId: "redux", title: "Redux" },
  { iconId: "css", title: "CSS3" },
  { iconId: "html", title: "HTML5" },
  { iconId: "sass", title: "Sass/SCSS" },
  { iconId: "router", title: "React Router" },
  { iconId: "git", title: "Git" },
  { iconId: "vite", title: "Vite" },
  { iconId: "shadcn", title: "shadcn/ui" },
  { iconId: "formik", title: "Formik" },
  { iconId: "styled", title: "Styled Components" },
  { iconId: "material", title: "Material UI" },
  { iconId: "bun", title: "Bun" },
  { iconId: "docker", title: "Docker" },
  { iconId: "zod", title: "Zod" },
  { iconId: "nodejs", title: "Node JS", width: '90', height: '55', viewBox: '0 0 90 55' },
];

const tickerTape = ['REACT', '&&', 'REDUX', '&&', 'JAVASCRIPT', '&&', 'TYPESCRIPT', '&&', 'ZOD', '&&', 'STYLED COMPONENTS'];

export const Skills = () => {
  return (
    <StyledSkills>
      <TitleSection>My Skills</TitleSection>
      <SkillsWrapper>
        {skillsItems.map((item) => (
          <Skill 
          key={item.title} 
          iconId={item.iconId} 
          title={item.title} 
          width={item.width}
          height={item.height}
          viewBox={item.viewBox}
          />
        ))}
      </SkillsWrapper>
      <TickerTape listItems={tickerTape}/>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding-block: 70px;
  min-height: 70vh;
  background-color: lightskyblue;
`;
const SkillsWrapper = styled.div`
  margin-top: 40px;
  margin-inline: auto;
  padding: 40px 65px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 30px;
  width: min(100%, 1180px);
  background-color: lightcyan;
  margin-bottom: 70px;
`;
