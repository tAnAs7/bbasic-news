import styled from 'styled-components'
import vars from '../../theme/variables';
import { ContentTittle } from './bodyStyles';

export const VFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100vw; 
  }
`;

export const HFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HFlexContainerResp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const FooterBrand = styled.h1`
  font-size: 2.5rem;
  -webkit-text-stroke: 0.05rem black;
  color: ${vars.white1};
  font-family : 'Permanent Marker';
  letter-spacing: 0.5rem;
  @media screen and (max-width: 767px) {
    margin: 0.5rem;
  }
`;

export const FooterSlogan = styled.h2`
  font-size: 1.2rem;
  color: ${vars.black1};
  text-align: center;
  font-family: 'Sedgwick Ave';
`;

export const FooterLogo = styled.img`
  height: 6rem;
  padding: 0 1rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Line = styled(HFlexContainer)`
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.3rem 3rem;
  font-size: 1rem;
  &:hover * {
    color: ${vars.btn_background_hover};
    transition: color 0.5s ease-in-out;
  }
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const Info = styled.a`
  text-decoration: none;
  color: black;
  @media screen and (max-width: 767px) {
    padding-left: 5rem;
  }
`;

export const MailSignContainer = styled(VFlexContainer)`
  background-image: url('backgrounds/digital-book.png');
  background-size: cover;
  align-items:center;
  justify-content: space-evenly;
  @media screen and (max-width: 767px) {
    width: 100vw;
    height: auto;
    justify-content: flex-start;
  }
  @media screen and (min-width: 768px) {
    width: 100vw;
  }
  @media screen and (min-width: 1025px) {
    width: 45vw;
    height: 22rem;
  }
`;

export const MailSignBtn = styled.input`
  display: inline-block;
  height: 3.7rem;
  width: calc(${vars.size9}*2);
  background: ${vars.light};
  border-radius: 0 1rem 1rem 0;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    
    background: ${vars.btn_background_hover};
    color: ${vars.blue4};
  }
  @media screen and (max-width: 768px) {
    width: 20vw;
    font-size: transition: all 0.5s ease-in-out;1rem;
    height: 2.3rem;
    border: none;
  }
`;

export const MailSignTittle = styled.h3`
  font-size: ${vars.size4};
  color: ${vars.white1};
  backdrop-filter: blur(${vars.size0});
  margin: 1rem;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.15rem; 
  }
`;

export const MailSignInput = styled.input`
  height: 3.5rem;
  width: 22rem;
  background: ${vars.btn_background};
  font-size: ${vars.size3};
  border: 0.1rem ${vars.light} solid;
  border-radius: 1rem 0 0 1rem;
  padding: 0 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    border: 0.1rem ${vars.btn_background_hover} solid;
  }
  @media screen and (max-width: 768px) {
    width: 50vw;
    font-size: 1rem;
    height: 2rem;
  }
`;

export const FooterIcon = styled.img`
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.5);
    transition: all 0.5s ease-in-out;
  }
  @media screen and (min-width: 320px) {
    width: 3rem;
    padding: 0 0.5rem;
  }
  @media screen and (min-width: 376px) {
    width: 4rem;
    padding: 0 1rem;
  }
  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1024px) {
    width: 6rem;
  }
  @media screen and (min-width: 1025px) {
    width: 4rem;
    padding: 0 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-rows: repeat(3, 5rem);
  align-items: center;
  justify-items: center;
  justify-content: center;
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(4, 4.5rem);
  }
  @media screen and (min-width: 376px) {
    grid-template-columns: repeat(4, 5rem);
  }
  @media screen and (min-width: 377px) {
    grid-template-columns: repeat(4, 6rem);
  }
`;

export const SponsorImg = styled.img`
  height: 4rem;
  width: 4rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.5);
    transition: all 0.5s ease-in-out;
  }
`;

export const SponsorTittle = styled(ContentTittle)`
  padding: 0 1rem;
`;

export const SponsorSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const HideContainer = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1025px) {
    display: block;
  }
`;

export const MailForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;