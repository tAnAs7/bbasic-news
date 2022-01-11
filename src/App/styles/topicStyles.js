import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import vars from "../../theme/variables";

const animate = keyframes`
    0%{
    transform:rotate(0deg)
              translateY(-250%)
              rotate(0deg);}
    100%{
    transform:rotate(360deg)
              translateY(-250%)
              rotate(-360deg);}
`;

export const TopicBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-color: #ffffff;

  @media screen and (min-width: 320px) {
    flex-direction: column;
    height: auto;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    height: fit-content;
  }
  @media fullscreen{
    flex-direction: row;
    height: 95vh;
  }
`;

export const Split2ColLeft = styled.div`
  display: flex;
  background-color: ${vars.topic_background};
  margin: 1rem;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1025px) {
    width: 50vw;
    height: 45vw;
  }
`;

export const Split2ColRight = styled.div`
  display: flex;
  background-color: ${vars.topic_background};
  margin: 1rem;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1025px) {
    width: 50vw;
    height: 45vw;
  }
`;

export const OrbitSystem = styled.nav`
  display: block;
  position: relative;
  border-radius: 50%;
  &:hover * {
    animation-play-state: paused;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: 60vw;
    width: 60vw;
    margin: 3rem 0;
  }
  @media screen and (min-width: 1025px) {
    height: 35vw;
    width: 35vw;
    margin: 0;
  }
`;

export const GridSystem = styled.nav`
  display: none;
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
  @media screen and (max-width: 767px) {
    display: grid;
    width: 90%;
    align-items: center;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
`;

export const Item = styled.div`
`;

export const TopicItem = styled(Link)`
  display: flex;
  aspect-ratio: 1/1;
  margin: 0;
  text-decoration: none;
  color: ${vars.black1};
  cursor: pointer;
  align-items: center;

  animation-name: ${animate};
  animation-duration: 16s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  position: absolute;

  @media screen and (max-width: 767px) {  
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    height: 2.8rem;
    animation: none;
    position: static;
    background-color: ${vars.light};
    border-radius: 0.5rem;
    margin: 0.5rem;
    left: 40%;
    transition: all 0.5s ease-in-out;
    &:hover {
      transition: all 0.5s ease-in-out;
      background-color: ${vars.btn_background_hover};
    }
  }
  @media screen and (min-width: 768px) {
    height: 5.3rem;
    flex-direction: column;
    align-items: center;
    left: 0;
    margin: 24vw;
  }
  @media screen and (min-width: 1024px) {
    height: 6.5rem;
  }
  @media screen and (min-width: 1025px) {
    height: 6vw;
    margin: 14.4vw;
  }
`;

export const Icon = styled.img`
  @media screen and (min-width: 320px) {
    height: 2rem;
  }
  @media screen and (min-width: 768px) {
    height: 4rem;
  }
  @media screen and (min-width: 1025px) {
    height: 3rem;
  }
`;

export const EmptyDisk = styled.div`
  justify-content: center;
  align-items: center;
  color: ${vars.theme_brand};
  background-color: ${vars.topic_background};
  position: absolute;
  height: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: double ${vars.yellow2} 0.5rem;
  z-index: 1;
  font-family: 'High Up Italic';
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 4rem;
    transform: translate(41%, 45%);
  }
  @media screen and (min-width: 1024px) {
    font-size: 5rem;
    transform: translate(43%, 43%);
  }
  @media screen and (min-width: 1025px) {
    font-size: 3.5rem;
    transform: translate(45%, 43%);
  }
`;//-155%

export const ContentDisk = styled.div`
  justify-content: center;
  align-items: center;
  
  height: 50%;
  aspect-ratio: 1/1;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 50%;
  border: double white 0.5rem;
  transform: translate(40%, 43%);
  position: absolute;
  opacity:0;
  ${Item}:hover & {
    opacity:1;
    z-index:70;
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    transform: translate(43%, 43%);
  }
  @media screen and (min-width: 1025px) {
    transform: translate(45%, 43%);
  }
`;

export const BrandScreen = styled.h3`
  text-transform: uppercase;
  text-align: center;
`;

export const TopicTittle = styled.h4`
  text-transform: capitalize;
  text-align: center;
  
  @media screen and (min-width: 320px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1025px) {
    font-size: 0.8rem;
  }
`;

export const Timeline = styled.div`
  height: 75%;
  width: 95%;
`;

export const Container = styled.div`
  
  height: 3vw;
  width: 80%;
  
  text-align: center;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom: 0.5rem solid ${vars.dark};
  border-top: 0.5rem solid ${vars.light};
  @media screen and (min-width: 320px) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
  @media screen and (min-width: 1025px) {
    margin: 1rem;
    padding: 1rem;
  }
`;

export const UpdateTittle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0.05rem 0.05rem gray;
  @media screen and (min-width: 320px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.5vw;
  }
`;