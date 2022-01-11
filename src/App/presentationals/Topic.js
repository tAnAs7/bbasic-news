import { TopicItems, UpdateNews } from '../containers/TopicElements'
import { Container, OrbitSystem, GridSystem, Split2ColLeft, Split2ColRight, TopicBackground, UpdateTittle } from '../styles/topicStyles'
export default function Topic() {
    return (
        <TopicBackground>
            <Split2ColLeft>
                <Container>
                    <UpdateTittle>chủ đề chính</UpdateTittle>
                </Container>
                <OrbitSystem>
                    <TopicItems />
                </OrbitSystem>
                <GridSystem>
                    <TopicItems />
                </GridSystem>
            </Split2ColLeft>
            <Split2ColRight>
                <UpdateNews/>
            </Split2ColRight>
        </TopicBackground>
    )
}