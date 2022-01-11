import { Element } from "react-scroll";
import { SlideShowSection1 } from "../containers/SlideShow";
import About from "../presentationals/About";
import Footer from "../presentationals/Footer";
import Topic from "../presentationals/Topic";
import { EarlyAccess } from "../presentationals/Warnings";

export default function LandingPage() {
    return (
    <>
        <SlideShowSection1 />
        <Element name='about'><About/></Element>
        
        <EarlyAccess/>
        <Element name='topic'><Topic /></Element>
        
        <Footer />
    </>
    );
}