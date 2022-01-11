

import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail, IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import vars from '../../theme/variables'

import data from '../../data/landingpage_elements.json'

import { FooterBrand, FooterIcon, FooterLogo, FooterSlogan, Grid, HFlexContainer, HFlexContainerResp, HideContainer, Info, Line, MailForm, MailSignBtn, MailSignContainer, MailSignInput, MailSignTittle, ShowContainer, SponsorImg, SponsorSection, SponsorTittle, VFlexContainer } from '../styles/footerStyles';

const Information = () => (
    <>
        {data.about.map(info => (
        <VFlexContainer>
            <HFlexContainer>
                <FooterLogo src={info.logo} />
                <FooterBrand>{info.brand}</FooterBrand>
            </HFlexContainer>
            <FooterSlogan>- {info.slogan} -</FooterSlogan>
            <Line><IoIosMail /><Info>{info.email}</Info></Line>
            <Line><FaPhoneAlt /><Info>{info.hotline}</Info></Line>
            <Line><IoLogoFacebook /><Info href={info.fb_page}>{info.fb}</Info></Line>
            <Line><IoLogoTwitter /><Info>{info.tw}</Info></Line>
            <Line><IoLogoWhatsapp /><Info>{info.ig}</Info></Line>
        </VFlexContainer>
        ))}
    </>
)

const EmailRegister = () => (
    <MailSignContainer>
        <MailSignTittle>Nhận ngay những cập nhật mới nhất</MailSignTittle>
        <MailForm>
            <MailSignInput type="email"
                id="email"
                name="email"
                placeholder="Nhập e-mail của bạn..." pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            <MailSignBtn type="submit" value="Đăng kí" onSubmit={() => alert('Email của bạn đã được ghi nhận!')}/>
        </MailForm>
        <Line>
        {data.logo.map((e, idx) => (
            <a href={e.link} key={idx}><FooterIcon src={e.icon} alt={e.name}/></a>
        ))}
        </Line>
        
    </MailSignContainer>
)

const Sponsor = () => (
    <SponsorSection>
        <SponsorTittle>Được tài trợ bởi</SponsorTittle>
        <Grid>
        {data.sponsor.map((dt,idx) => (
            <a href={dt.link} key={idx}><SponsorImg src={dt.icon} alt={dt.site}/></a>
        ))}
        </Grid>
    </SponsorSection>
)

export default function Footer() {
    return(
        <VFlexContainer>
            <ShowContainer><EmailRegister /></ShowContainer>
            <HFlexContainerResp style={{ background: vars.theme_background_vertical, justifyContent:'space-evenly' }}>
                <Information />
                <HideContainer><EmailRegister /></HideContainer>
                <Sponsor />
            </HFlexContainerResp>
            <HFlexContainer style={{ justifyContent: 'center' }}>&copy; 2021 - Copyright by Quang Tan</HFlexContainer>
        </VFlexContainer>
)}
