import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import vars from '../../theme/variables';

import { BreakLine, Btn, Logo, NavBtn } from './bodyStyles';

import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: ${({scrollNav}) => {
    if (scrollNav===1) {return vars.black1}
    else if (scrollNav===2){return vars.theme_background_horizontal}
  else {return 'unset'}
  }};
  height: 2rem;
  width: 100vw;
  padding: 1rem 0;

  display: flex;
  justify-content: flex-start;
  
  position: fixed;
  top: 0px;
  z-index: 99;

  opacity: ${({scrollNav}) => {
    if (scrollNav===1) {return .7}
    else {return 1}}};

  transition: all 0.5s ease-in-out;
`;

export const NavWoLink = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;

  color: ${vars.white1};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;

  display: flex;
  align-items: flex-end;
  text-decoration: none;

  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 1.5rem;
    border: 0;
    &:hover {
      border: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    border-bottom: 0.5rem solid transparent;
    transition: all 1s ease-in-out;
    &:hover{
    color: ${vars.yellow2};
    border-bottom: 0.25rem solid ${vars.yellow3};
    transition: all 0.4s ease-in-out;
    }
  }
  @media screen and (min-width: 1025px) {
    font-size: 1rem;
  }
`;

export const LogoHolder = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 1rem;
  }
`; //other devices
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
  
export const NavBtnArea = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50vw;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavMini = styled.nav`
  align-items: center;
  width: 100vw;
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SearchBtn = styled(NavBtn)`
  border-radius: 4rem;
  margin: 0 1rem;
`;

export const SearchArea = styled.input`
  width: 4rem;
  margin: 0 1rem;
`;
  
export const NavCapsuleBtnLeft = styled(Btn)`
  border-radius: 2rem 0rem 0rem 2rem;
  margin-left: 1rem;
`;

export const NavCapsuleBtnRight = styled(Btn)`
  border-radius: 0rem 2rem 2rem 0rem;
  margin-right: 2rem;
`;

export const HeaderLogo = styled(Logo)`
  width: 6rem;
`;

export const Dropdown = styled.div`
  position: absolute;
  transform: translate(-80% ,30%);
  color: ${vars.gray2};
  background-color: ${vars.dark};
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export const SlideRight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translate(0%, 65%);
  background-color: ${vars.light};
  color: white;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.5rem;
  padding-top: 1rem;
  width: 50vw;
  @media screen and (min-width: 1024px) {
    width: 25vw;
    transform: translate(0%, 60%);
  }
`;

export const Item = styled.div`
  padding: 0.5rem;
  &:hover {
    background-color: green;
  }
`;

export const SlideItem = styled.div`
  height: 2rem;
  padding-left: 1rem;
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Break = styled(BreakLine)`
  border: 0.01rem solid #dadde1;
  margin: 0;
  width: inherit;
`;

