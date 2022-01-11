import styled from 'styled-components'
import vars from '../../theme/variables';
import { ContentTittle } from './bodyStyles'

export const WarningBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  @media (orientation:portrait) {
    flex-direction: column;
    background: ${vars.theme_background_vertical};
  }
  @media (orientation:landscape) {
    flex-direction: row;
    background: ${vars.theme_background_horizontal};
  }
`;

export const WarningImg = styled.img`
  width: 20%;
  @media (orientation:portrait) {
    margin: 0 1vmin;
    margin-top: 1.5vmin;
  }
  @media (orientation:landscape) {
    margin: 1vmax;
  }
`;

export const WarningTittle = styled(ContentTittle)`
  font-size: 5vmin;
`;

export const WarningContent = styled.div`
  color: ${vars.theme_textcolor};
  font-size: 3vmin;
  text-shadow: 0.1vmin 0.1vmin ${vars.theme_textshadow};
  margin-bottom: 1vmin;
`;