import { useState, useEffect, useRef } from 'react'
import '../../theme/SlideElements.css'
import { SlideBackground, SlideShowDots, HomePageBrand, Tittle, Slides, SlideShow,
    CriteriaImg, CriteriaSubcript, CriteriaTittle, ElementsContainer, SlideShow2, Group, SlideShowSlider, SlideForeground } from '../styles/slideShowStyles'
import data from '../../data/landingpage_elements.json'

export function SlideShowSection1() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5000;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === data.slide.open.length - 1 ? 0 : prevIndex + 1), delay);
        return () => { resetTimeout(); };
    }, [index]);

    return(
        <SlideShow>
            <SlideShowSlider style={{ transform: `translate3d(${-index * 100}vw, 0, 0)`, transition: `ease 1000ms`, whiteSpace: `nowrap`}}>
                {data.slide.open.map((content, idx) => (
                    <Slides key={idx}>
                        <SlideBackground key={index} style={{ backgroundImage: `url(${content.background})` }} />
                        <SlideForeground>
                            <HomePageBrand>{content.heading}</HomePageBrand>
                            <Tittle>{content.content}</Tittle>
                        </SlideForeground>
                    </Slides>
                ))}
            </SlideShowSlider>

            <SlideShowDots>
            {data.slide.open.map((_, idx) => (
                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx); } }></div>
            ))}
            </SlideShowDots>
        </SlideShow>
    )
}

export function SlideShowSection2() {
    return (
    <div className='slider'>
        <SlideShow2>
            {data.slide.feature.map((content, idx) => (
            <ElementsContainer key={idx}>
                <Group>
                    <CriteriaImg src={content.illustration} />
                    <CriteriaTittle>{content.heading}</CriteriaTittle>
                </Group>
                <CriteriaSubcript>{content.content}</CriteriaSubcript>
            </ElementsContainer>
            ))}
        </SlideShow2>
    </div>
    )
}