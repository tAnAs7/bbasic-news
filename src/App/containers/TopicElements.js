import {Icon, TopicTittle, TopicItem, ContentDisk, Item, EmptyDisk, BrandScreen, Container, UpdateTittle, Timeline} from '../styles/topicStyles';
import data from '../../data/landingpage_elements.json';
import { Chrono } from 'react-chrono';

import '../../theme/modify_lib.css'

export function TopicItems() {
    function delay(x) {
        return x * 2 + 's';
    }

    return (
        <>
            <EmptyDisk><BrandScreen>bbasic</BrandScreen></EmptyDisk>
            {data.topic.map((tp, idx) => (
            <Item key={idx}>
                <TopicItem to={tp.nav} style={{ animationDelay: delay(idx) }}>
                    <Icon src={tp.img} alt={tp.tittle} />
                    <TopicTittle>{tp.tittle}</TopicTittle>
                </TopicItem>

                <ContentDisk style={{ backgroundImage: `url(${tp.bgContent})` }}>
                </ContentDisk>
            </Item>
            ))}
            
        </>
    );
}

export function UpdateNews() {
    return(
    <>
        <Container><UpdateTittle>cập nhật gần đây</UpdateTittle></Container>
        <Timeline>
            <Chrono items={data.update} mode='VERTICAL_ALTERNATING' scrollable={{scrollbar: false}}>
                <div className='chrono-icons'>
                {data.update.map((log, idx) => (
                    <img src={log.icon_type} alt={log.type} key={idx}/>
                ))}
                </div>
            </Chrono>
        </Timeline>
    </>
    )
}