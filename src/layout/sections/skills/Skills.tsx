import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Skill } from "./skill/Skill";
// import { TickerTape } from "../../../components/tickerTape/TickerTape";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const skillsItems = [
  {
    iconId: "ts",
    title: "TypeScript",
  },
  { iconId: "js", title: "JavaScript" },
  {
    iconId: "react",
    title: "React",
    width: "53",
    height: "50",
    viewBox: "0 0 53 50",
  },
  { iconId: "redux", title: "Redux" },
  { iconId: "css", title: "CSS3" },
  {
    iconId: "sass",
    title: "Sass/SCSS",
    width: "68",
    height: "52",
    viewBox: "0 0 68 52",
  },
  {
    iconId: "router",
    title: "React Router",
    width: "55",
    height: "48",
    viewBox: "0 0 55 48",
  },
  {
    iconId: "html",
    title: "HTML5",
    width: "48",
    height: "50",
    viewBox: "0 0 50 53",
  },
  { iconId: "git", title: "Git" },
  { iconId: "vite", title: "Vite" },
  { iconId: "shadcn", title: "shadcn/ui" },
  {
    iconId: "formik",
    title: "Formik",
    width: "50",
    height: "50",
    viewBox: "0 0 50 63",
  },
  { iconId: "styled", title: "Styled Components" },
  { iconId: "material", title: "Material UI" },
  {
    iconId: "bun",
    title: "Bun",
    width: "54",
    height: "46",
    viewBox: "0 0 54 46",
  },
  {
    iconId: "docker",
    title: "Docker",
    width: "80",
    height: "48",
    viewBox: "0 0 80 48",
  },
  {
    iconId: "zod",
    title: "Zod",
    width: "55",
    height: "50",
    viewBox: "0 0 55 44",
  },
  {
    iconId: "nodejs",
    title: "Node JS",
    width: "90",
    height: "55",
    viewBox: "0 0 90 55",
  },
];

// const tickerTape = [
//   "REACT",
//   "&&",
//   "REDUX",
//   "&&",
//   "JAVASCRIPT",
//   "&&",
//   "TYPESCRIPT",
//   "&&",
//   "ZOD",
//   "&&",
//   "STYLED COMPONENTS",
//   "&&",
//   "REACT ROUTER",
//   "&&",
//   "BUN",
//   "&&",
//   "Node Js",
//   "&&",
//   "Docker",
//   "&&",
//   "Shadcn/ui",
// ];

export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
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
      </Container>
      {/* <TickerTape listItems={tickerTape} /> */}
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding-block: 80px;

  @media ${theme.media.tablet} {
    padding-top: 60px;
  }

  @media ${theme.media.mobile} {
    padding-top: 30px;
  }
`;
const SkillsWrapper = styled.div`
  width: min(100%, 1090px);
  /* background: ${theme.colors.secondaryBg};
  box-shadow: ${theme.colors.mainBoxShadow}; */
  margin-inline: auto;
  /* padding: 40px 30px; */
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  justify-content: center;
  gap: 30px 20px;
  border-radius: 50px;

  @media ${theme.media.mobile} {
    /* height: 450px;
    overflow: auto; */
    /* width: 260px; */
    /* height: 410px; */
    overflow: auto;
    justify-content: start;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 130px);
    gap: 10px;
    border-radius: 0;
  }
`;
