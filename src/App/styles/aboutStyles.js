import styled from 'styled-components';
import vars from "../../theme/variables";
import { Brand } from './bodyStyles';

export const AboutHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TittleContainer = styled.div`
  background-image:  url('backgrounds/tittle/brush.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-position: center;
  justify-content: center;

  @media (orientation:portrait) {
    width: 75vmin;
    margin: 1vmin;
  }
  @media (orientation:landscape) {
    width: 75vmax;
    margin: 1vmax;
  }
`;

export const Headline = styled(Brand)`
  display: flex;
  justify-content: center;
  -webkit-text-stroke: 0.04rem black;

  @media (orientation:portrait) {
    font-size: 5vmin;
    text-shadow: .25vmin .25vmin ${vars.btn_background_hover};
  }
  @media (orientation:landscape) {
    font-size: 5vmax;
    text-shadow: .25vmax .25vmax ${vars.btn_background_hover};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${vars.theme_textcolor};
  font-size: 3vmin;
  text-shadow: 0.1vmin 0.1vmin ${vars.theme_textshadow};
  padding: 1vmin 5vmin;
`;