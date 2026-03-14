import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Project } from "./project/Project";

import interviewImg from "../../../assets/images/proj.jpg";

const menuItems = ["all", "react", "js", "ai"];

const projects = [
  {
    title: "Interview List",
    img: { interviewImg },
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description: "JavaScript, React, React Router, Redux, Zod, Vite",
    links: [
        {
        name: "demo",
        url: "#",
        },
        {
        name: "code",
        url: "#",
        },
    ],
  },
  {
    title: "Interview List",
    img: { interviewImg },
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description: "JavaScript, React, React Router, Redux, Zod, Vite",
    links: [
        {
        name: "demo",
        url: "#",
        },
        {
        name: "code",
        url: "#",
        },
    ]
  },
  {
    title: "Interview List",
    img: { interviewImg },
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description: "JavaScript, React, React Router, Redux, Zod, Vite",
    links: [
        {
        name: "demo",
        url: "#",
        },
        {
        name: "code",
        url: "#",
        },
    ]
  },
  {
    title: "Interview List",
    img: { interviewImg },
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description: "JavaScript, React, React Router, Redux, Zod, Vite",
    links: [
        {
        name: "demo",
        url: "#",
        },
        {
        name: "code",
        url: "#",
        },
    ]
  },
  {
    title: "Interview List",
    img: { interviewImg },
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description: "JavaScript, React, React Router, Redux, Zod, Vite",
    links: [
        {
        name: "demo",
        url: "#",
        },
        {
        name: "code",
        url: "#",
        },
    ]
  },
  {
    title: "Interview List",
    img: { interviewImg },
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description: "JavaScript, React, React Router, Redux, Zod, Vite",
    links: [
        {
        name: "demo",
        url: "#",
        },
        {
        name: "code",
        url: "#",
        },
    ]
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <TitleSection>Projects</TitleSection>
      <FlexWrapper direction="column" align="center" gap='30px' margin='30px 0 0 0'>
        <MenuWrapper>
          <Menu menuItems={menuItems} />
        </MenuWrapper>
        <ProjectsWrapper>
          {projects.map((item) => (
            <Project
              title={item.title}
              img={interviewImg}
              description={item.description}
              icon={item.icon}
              links={item.links}
              key={crypto.randomUUID()}
            ></Project>
          ))}
        </ProjectsWrapper>
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 50vh;
  background-color: lightgrey;
  padding-block: 70px;
`;

const MenuWrapper = styled.div`
  width: 100%;

`;



const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  border: 1px solid red;
`;
