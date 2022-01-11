import { SlideBackground2 } from '../styles/slideShowStyles';
import { AboutHeaderContainer, Description, Headline, TittleContainer} from "../styles/aboutStyles";

import { SlideShowSection2 } from '../containers/SlideShow';

export default function About() {
  return (
    <SlideBackground2 >
        <AboutHeaderContainer>
            <TittleContainer>
                <Headline>BBASIC</Headline>
            </TittleContainer>
            <Description>
                <span>Dựa trên lý tưởng truyền đạt đa dạng kiến thức cho mọi lứa tuổi dưới hình thức phi lợi nhuận</span>
                <span>Bbasic là một dự án nhỏ được thiết kế theo các tiêu chí</span>
            </Description>
        </AboutHeaderContainer>
        <SlideShowSection2 />
    </SlideBackground2 >
  );
}