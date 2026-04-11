import styled from "styled-components";
import { ParallaxItem } from "./parallaxItem/ParallaxItem";

export const Parallax = () => {
  return (
    <StyledParallax>
      <ParallaxItem iconId="parallax-ts" width="26" />
      <ParallaxItem
        iconId="parallax-react"
        width="30"
        depth="minus-1"
        viewBox="0 0 53 53"
      />
      <ParallaxItem variant="none" />
      <ParallaxItem depth="minus-2" />
      <ParallaxItem
        iconId="parallax-redux"
        width="30"
        depth="minus-1"
        viewBox="0 0 53 53"
      />
      <ParallaxItem
        iconId="parallax-js"
        width="24"
        viewBox="0 0 24 24"
        depth="plus-1"
      />
      <ParallaxItem variant="none" />
      <ParallaxItem />
      <ParallaxItem depth="plus-2" />
      <ParallaxItem />
      <ParallaxItem depth="minus-2" variant="outline" />
      <ParallaxItem depth="plus-1" variant="outline" />
      <ParallaxItem variant="none" />
      <ParallaxItem depth="minus-2" />
      <ParallaxItem iconId="parallax-react" width="30" viewBox="0 0 53 53" />
      <ParallaxItem depth="plus-1" variant="outline" />
      <ParallaxItem
        iconId="parallax-redux"
        width="30"
        depth="plus-2"
        viewBox="0 0 53 53"
      />
      <ParallaxItem
        iconId="parallax-router"
        width="30"
        depth="plus-1"
        viewBox="0 -7 55 55"
      />
      <ParallaxItem variant="none" />
      <ParallaxItem depth="minus-1" variant="outline" />
      <ParallaxItem variant="none" />
      <ParallaxItem variant="outline" />
      <ParallaxItem
        iconId="parallax-redux"
        width="30"
        depth="plus-2"
        viewBox="0 0 53 53"
      />
      <ParallaxItem variant="outline" depth="minus-2" />
      <ParallaxItem width="24" iconId="parallax-js" viewBox="0 0 24 24" />
      <ParallaxItem variant="none" />
      <ParallaxItem depth="plus-1" />
      <ParallaxItem depth="minus-2" iconId="parallax-ts" width="26" />
      <ParallaxItem variant="none" />
      <ParallaxItem
        iconId="parallax-js"
        width="24"
        viewBox="0 0 24 24"
        depth="plus-2"
      />
      <ParallaxItem iconId="parallax-router" width="30" viewBox="0 -7 55 55" />
    </StyledParallax>
  );
};

const StyledParallax = styled.div`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  perspective: 350px;
  perspective-origin: 50%;
  grid-template-rows: auto;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-auto-columns: auto;
  place-items: center;
  display: grid;
  position: absolute;
  inset: 0;
  overflow: hidden;
  transform: none;
  z-index: 1;
  pointer-events: none;
`;
