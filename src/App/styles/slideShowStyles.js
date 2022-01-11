import styled, { keyframes } from 'styled-components';
import vars from '../../theme/variables';
import { Brand } from './bodyStyles';

const scroll = () => keyframes`
  0% {transform: translateX(0);}
  100% {transform: translateX(calc(-15rem * 4));}
`;

//Slideshow 1----------
export const SlideShowDots = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  top: -10%;
`;

export const SlideShowSlider = styled.div`
  height: inherit;
  width: inherit;
`;

export const SlideShow = styled.div`
  @media (orientation:portrait){
    height: 50vh;
    width: 100vw;
  }
  @media (orientation:landscape) {
    height: 100vh;
    width: 100vw;
  }
  @media (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
    height: 50vh;
    width: 100vw;
  }
  @media (device-width: 1366px) and (device-height: 1024px) and (orientation:landscape) {
    height: 50vh;
    width: 100vw;
  }
`;

export const Slides = styled.div`
  display: inline-block;
  margin-top: unset;
  height: inherit;
  width: inherit;
`;

export const SlideBackground = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: contrast(.5) blur(6px);
  position: relative;
  height: inherit;
  width: inherit;
`; //image background

export const SlideForeground = styled.div`
  height: inherit;
  width: inherit;
  position: relative;
  transform: translateY(-100%);
`; //image background

export const HomePageBrand = styled(Brand)`
  position: absolute;
  z-index: 2;
  top: 10vmin;
  

  @media (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
    top: 0;
  }
  @media (device-width: 1366px) and (device-height: 1024px) and (orientation:landscape) {
    top: 10%;
  }

  @media (orientation:portrait) {
    top: 15vmax;
    padding: 0 5vmin;
    font-size: 10vmin;
    -webkit-text-stroke: .25vmin black;
    text-shadow: .5vmin .5vmin ${vars.btn_background_hover};
  }
  @media (orientation:landscape) {
    padding: 0 5vmax;
    font-size: 10vmax;
    -webkit-text-stroke: .25vmax black;
    text-shadow: .5vmax .5vmax ${vars.btn_background_hover};
  }
`;

export const Tittle = styled.h2`
  position: absolute;
  z-index: 2;
  color: white;
  top: 60vmin;

  @media (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
    top: 55%;
  }
  @media (device-width: 1366px) and (device-height: 1024px) and (orientation:landscape) {
    top: 55%;
  }
  
  @media (orientation:portrait) {
    padding: 0 5vmin;
    font-size: 5vmin;
    -webkit-text-stroke: .175vmin black;
    top: 55vmin;
  }
  @media (orientation:landscape) {
    padding: 0 5vmax;
    font-size: 3vmax;
    -webkit-text-stroke: .175vmax black;
  }
`;

//Slideshow 2----------

export const SlideBackground2 = styled.div`
  background: ${vars.theme_background_horizontal};
  width: 100vw;
  height: auto;
`; //color background

export const SlideShow2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: calc(15rem * 8);
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100vw;
    animation: none;
    align-items: center;
  }
  animation: ${scroll} 10s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

export const ElementsContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  border-radius: ${vars.size4};
  background-color: ${vars.white1};
  padding: 1rem;
  margin: ${vars.size2};
  @media screen and (max-width: 767px) {
    width: 75vw;
    flex-direction: row;
    height: 5rem;
  }
  @media screen and (min-width: 768px) {
    width: 11rem;
    height: 11rem;
  }
  @media screen and (min-width: 1024px) {
    width: 15rem;
    height: 13rem;
  }
`;

export const CriteriaImg = styled.img`
  height: 5rem;
  aspect-ratio: 1/1;
`;

export const CriteriaTittle = styled.div`
  font-family: 'Pacifico';
  font-size: 1.5rem;
  color: ${vars.black1};
  @media screen and (max-width: 768px) {
      font-size: 0.9rem;
  }
`;

export const CriteriaSubcript = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: ${vars.black1};
  margin-top: ${vars.size4};
  @media screen and (max-width: 768px) {
    margin: 0.5em;
    font-size: 0.7rem;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

