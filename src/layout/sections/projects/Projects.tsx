import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import { ProjectMenu } from "./projectMenu/ProjectMenu";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

import todo from "../../../assets/images/todo.jpg";
import socialNetwork from "../../../assets/images/social-network.jpg";
import weatherApp from "../../../assets/images/weather-app.jpg";
import messenger from "../../../assets/images/messenger.jpg";
import eCommerce from "../../../assets/images/e-commerce.jpg";
import dashboard from "../../../assets/images/dashboard.jpg";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

// const menuItems = ["All", "React", "JS", "AI"];
export type menuItemsStatusType = "all" | "react" | "js" | "ai";

const menuItems: Array<{
  title: string;
  status: menuItemsStatusType;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "JS",
    status: "js",
  },
  {
    title: "AI",
    status: "ai",
  },
];

const projects = [
  {
    title: "Social Network",
    img: socialNetwork,
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description:
      "Mini social platform with user profiles, posts, likes, comments, and follow system. Implemented with React, Redux Toolkit, and Node.js + Express.",
    type: "react",
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
    title: "Todo App",
    img: todo,
    icon: {
      iconId: "minreact",
      width: "20",
      height: "19",
      viewBox: "0 0 20 19",
    },
    description:
      "Task management application with task creation, editing, deletion, and filtering by status. Built with React and TypeScript, using local storage for data persistence.",
    type: "js",
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
    title: " Weather App",
    img: weatherApp,
    icon: {
      iconId: "minredux",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
    },
    description:
      "Weather forecast application with city search, current weather, 5-day forecast, and interactive map. Uses OpenWeatherMap API, React, and Leaflet.",
    type: "ai",
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
    title: "Messenger",
    img: messenger,
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description:
      "Real-time chat application with private messages, typing indicators, and online status. Built with Socket.io, React, and Node.js.",
    type: "react",
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
    title: "E-Commerce",
    img: eCommerce,
    icon: {
      iconId: "minreact",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
    },
    description:
      "Full-featured online store with product catalog, shopping cart, filters, and checkout process. Developed with Next.js, Stripe integration, and MongoDB.",
    type: "js",
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
    title: "Dashboard",
    img: dashboard,
    icon: {
      iconId: "minredux",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
    },
    description:
      "Analytics dashboard with interactive charts, data tables, and customizable widgets. Created with React, Recharts, and Material-UI.",
    type: "ai",
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
];

export const Projects = () => {
  const [currentStatus, setStatus] = useState<menuItemsStatusType>("all");

  let filteredProjects = projects;

  if (currentStatus === "react") {
    filteredProjects = projects.filter((item) => item.type === "react");
  }
  if (currentStatus === "js") {
    filteredProjects = projects.filter((item) => item.type === "js");
  }
  if (currentStatus === "ai") {
    filteredProjects = projects.filter((item) => item.type === "ai");
  }

  function changeFilterStatus(value: menuItemsStatusType) {
    setStatus(value);
  }

  return (
    <StyledProjects id="projects">
      <Container>
        <Fade direction='up' fraction={1} triggerOnce>
        <TitleSection>Projects</TitleSection>
        </Fade>
        <FlexWrapper
          $direction="column"
          $align="center"
          $gap="40px"
          $gapMobile="30px"
        >
          <ProjectMenu
            menuItems={menuItems}
            changeFilterStatus={changeFilterStatus}
            currentStatus={currentStatus}
          />

          <ProjectsWrapper>
            <Fade direction="up" cascade damping={0.2} triggerOnce>
              {filteredProjects.map((item) => (
                <Project
                  title={item.title}
                  img={item.img}
                  description={item.description}
                  icon={item.icon}
                  links={item.links}
                  type={item.type}
                  key={crypto.randomUUID()}
                ></Project>
              ))}
            </Fade>
          </ProjectsWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
overflow: hidden;
  background: #fcfcfc;
  padding-block: 80px;
  ${TitleSection} {
    color: ${theme.colors.secondFontColor};
  }

  @media ${theme.media.tablet} {
    padding-top: 60px;
  }

  @media ${theme.media.mobile} {
    padding-top: 30px;
  }
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px 20px;
  justify-items: center;
  border-radius: 50px;

  @media ${theme.media.mobile} {
    background: unset;
    box-shadow: unset;
    padding: unset;
    gap: 30px;
  }

  & > div {
      width: 100%;
  max-width: 450px;

  @media (min-width: 950px) {
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
  }

`;
