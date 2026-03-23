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


const menuItems = ["All", "React", "JS", "AI"];

const projects = [
  {
    title: "Social Network",
    img: socialNetwork,
    icon: { iconId: "minjs", width: "20", height: "20", viewBox: "0 0 20 20" },
    description:
      "Mini social platform with user profiles, posts, likes, comments, and follow system. Implemented with React, Redux Toolkit, and Node.js + Express.",
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
  return (
    <StyledProjects>
      <Container>
        <TitleSection>Projects</TitleSection>
        <FlexWrapper $direction="column" $align="center" $gap="40px" $gapMobile="30px">
          <ProjectMenu menuItems={menuItems} />
          <ProjectsWrapper>
            {projects.map((item) => (
              <Project
                title={item.title}
                img={item.img}
                description={item.description}
                icon={item.icon}
                links={item.links}
                key={crypto.randomUUID()}
              ></Project>
            ))}
          </ProjectsWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding-top: 80px;

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

  padding: 40px;
  border-radius: 50px;
  background: ${theme.colors.secondaryBg};
  box-shadow: ${theme.colors.mainBoxShadow};

  @media ${theme.media.mobile} {
    background: unset;
    box-shadow: unset;
    padding: unset;
    gap: 30px;
  }
`;
