// import styled from "styled-components";
// import { TitleSection } from "../../../components/TitleSection";
// import { Skill } from "./skill/Skill";
// import { Container } from "../../../components/Container";
// import { theme } from "../../../styles/Theme";
// import { Fade } from "react-awesome-reveal";
// const skillsItems = [
//   {
//     iconId: "ts",
//     title: "TypeScript",
//   },
//   { iconId: "js", title: "JavaScript" },
//   {
//     iconId: "react",
//     title: "React",
//     width: "53",
//     height: "50",
//     viewBox: "0 0 53 50",
//   },
//   { iconId: "redux", title: "Redux" },
//   { iconId: "css", title: "CSS3" },
//   {
//     iconId: "sass",
//     title: "Sass/SCSS",
//     width: "68",
//     height: "52",
//     viewBox: "0 0 68 52",
//   },
//   {
//     iconId: "router",
//     title: "React Router",
//     width: "55",
//     height: "48",
//     viewBox: "0 0 55 48",
//   },
//   {
//     iconId: "html",
//     title: "HTML5",
//     width: "48",
//     height: "50",
//     viewBox: "0 0 50 53",
//   },
//   { iconId: "git", title: "Git" },
//   { iconId: "vite", title: "Vite" },
//   { iconId: "shadcn", title: "shadcn/ui" },
//   {
//     iconId: "formik",
//     title: "Formik",
//     width: "50",
//     height: "50",
//     viewBox: "0 0 50 63",
//   },
//   { iconId: "styled", title: "Styled Components" },
//   { iconId: "material", title: "Material UI" },
//   {
//     iconId: "bun",
//     title: "Bun",
//     width: "54",
//     height: "46",
//     viewBox: "0 0 54 46",
//   },
//   {
//     iconId: "docker",
//     title: "Docker",
//     width: "80",
//     height: "48",
//     viewBox: "0 0 80 48",
//   },
//   {
//     iconId: "zod",
//     title: "Zod",
//     width: "55",
//     height: "50",
//     viewBox: "0 0 55 44",
//   },
//   {
//     iconId: "nodejs",
//     title: "Node JS",
//     width: "90",
//     height: "55",
//     viewBox: "0 0 90 55",
//   },
// ];


// export const Skills = () => {
//   return (
//     <StyledSkills id="skills">
//       <Container>
//         <Fade direction="up" fraction={1} triggerOnce>
//           <TitleSection>My Skills</TitleSection>
//         </Fade>
//         <SkillsWrapper>
//           <Fade cascade direction="up" damping={0.1} triggerOnce>
//             {skillsItems.map((item) => (
//               <Skill
//                 key={item.title}
//                 iconId={item.iconId}
//                 title={item.title}
//                 width={item.width}
//                 height={item.height}
//                 viewBox={item.viewBox}
//               />
//             ))}
//           </Fade>
//         </SkillsWrapper>
//       </Container>
//     </StyledSkills>
//   );
// };

// const StyledSkills = styled.section`
//   padding-block: 80px;

//   @media ${theme.media.tablet} {
//     padding-top: 60px;
//   }

//   @media ${theme.media.mobile} {
//     padding-top: 30px;
//   }
// `;
// const SkillsWrapper = styled.div`
//   width: min(100%, 1090px);
//   margin-inline: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, 120px);
//   justify-content: center;
//   gap: 30px 20px;
//   border-radius: 50px;

//   @media ${theme.media.mobile} {
//     overflow-x: scroll;
//     justify-content: start;
//     grid-auto-flow: column;
//     gap: 10px;
//     border-radius: 0;

//     grid-template-rows: repeat(3, 118px);
//     grid-template-columns: repeat(auto-fit, 115px);

//     overflow-x: auto;
//     overflow-y: hidden;
//     justify-content: start;
//     grid-auto-flow: column;
//     gap: 10px;
//     border-radius: 0;

//     grid-template-rows: repeat(3, 118px);
//     grid-template-columns: repeat(auto-fit, 115px);

//     padding-bottom: 7px;

//     &::-webkit-scrollbar {
//       height: 4px;
//     }

//     &::-webkit-scrollbar-track {
//       background: transparent;
//     }

//     &::-webkit-scrollbar-thumb {
//       background: #fff;
//       border-radius: 10px;
//     }

//     &::-webkit-scrollbar-thumb:hover {
//       background: #fff;
//     }
//   }
// `;



import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { Fade } from "react-awesome-reveal";
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


export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <Fade direction="up" fraction={1} triggerOnce>
          <TitleSection>My Skills</TitleSection>
        </Fade>
        <SkillsWrapper>
          <Fade cascade direction="up" damping={0.1} triggerOnce>
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
          </Fade>
        </SkillsWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding-block: 80px;

  @media ${({ theme }) => theme.media.mobile} {
    padding-top: 60px;
  }

 @media ${({ theme }) => theme.media.mobile} {
    padding-top: 30px;
  }
`;
const SkillsWrapper = styled.div`
  width: min(100%, 1090px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  justify-content: center;
  gap: 30px 20px;
  border-radius: 50px;

@media ${({ theme }) => theme.media.mobile} {
    overflow-x: scroll;
    justify-content: start;
    grid-auto-flow: column;
    gap: 10px;
    border-radius: 0;

    grid-template-rows: repeat(3, 118px);
    grid-template-columns: repeat(auto-fit, 115px);

    overflow-x: auto;
    overflow-y: hidden;
    justify-content: start;
    grid-auto-flow: column;
    gap: 10px;
    border-radius: 0;

    grid-template-rows: repeat(3, 118px);
    grid-template-columns: repeat(auto-fit, 115px);

    padding-bottom: 7px;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #fff;
    }
  }
`;
