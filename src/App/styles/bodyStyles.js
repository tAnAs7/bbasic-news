import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import vars from '../../theme/variables'

export const ToggleTopBtn = styled.div`
  border-radius: 1rem;
  background: ${vars.gray1};
  padding: 0.7rem 1rem;
  color: ${vars.black1};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  right: 2rem;
  bottom: 2rem;
  position: fixed;
  font-size: 2rem;
  z-index: 99;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${vars.yellow1};
    color: ${vars.blue4};
    font-weight: 700;
  }
`;

export const Logo = styled.img`
  padding: 0 1rem;
`;

export const NavBtn = styled(Link)`
  background: ${vars.btn_background};
  padding: 0.7rem 1rem;
  color: ${vars.black1};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${vars.yellow1};
    color: ${vars.blue4};
    font-weight: 500;
    border-radius: 2rem;
  }
`;

export const Btn = styled.div`
  background: ${vars.gray1};
  padding: 0.7rem 1rem;
  color: ${vars.black1};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${vars.btn_background_hover};
    color: ${vars.blue4};
    font-weight: 500;
    border-radius: 2rem;
  }
`;

export const Brand = styled.h1`
  color: ${vars.white1};
  font-family : 'Permanent Marker';
  letter-spacing: 3vmin;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (orientation:portrait) {
    padding: 0 5vmin 3vmin 3vmin;
  }
  @media (orientation:landscape) {
    padding: 3vmax;
    padding-right: 5vmax;
  }
`;

export const BreakLine = styled.hr`
  margin: 1rem;
  width: 15rem;
  border: 0.1rem solid #dadde1;
`;

export const ContentTittle = styled.h2`
    font-family: 'Charm';
    color: white;
    text-shadow: 0.1rem 0.1rem ${vars.theme_textshadow};
`;


