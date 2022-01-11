import {useState, useEffect} from 'react'
import { animateScroll as scroll, scroller } from 'react-scroll'
import useOnclickOutside from 'react-cool-onclickoutside'

import {Nav, NavWoLink, NavMenu, LogoHolder, HeaderLogo,
	SearchBtn, NavBtnArea, NavCapsuleBtnLeft, NavCapsuleBtnRight, Dropdown, Item, Bars, NavMini, SlideRight, SlideItem, Break} from '../styles/headerStyles'

import {BsSearch} from 'react-icons/bs'
import { LogInPanel } from './Sign'

export default function Header() {
	const [scrollNav, setScrollNav] = useState(0)

	const changeNav = () => {
		if (window.scrollY < 100) { setScrollNav(0) } //trong suốt
		else if (window.scrollY >= 100 && window.scrollY < 600) { setScrollNav(1) } //đen mờ
		else { setScrollNav(2) } //xanh
	}; //đổi màu header

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const toggleHome = () => scroll.scrollToTop()
	const toggleContact = () => scroll.scrollToBottom()

	const toggleAbout = () => scroller.scrollTo('about', { duration: 1000, smooth: 'easeInOutQuad', offset: -50 })
	const toggleLog = () => scroller.scrollTo('topic', { duration: 1000, smooth: 'easeInOutQuad', offset: -50 })
	// const toggleCardSection = () => scroller.scrollTo('about')
	

	const toggleTest = () => scroll.scrollToBottom()

	function NavSlideRight(props) {
		const [slide, setSlide] = useState(false)
        const ref = useOnclickOutside(() => {setSlide(false)})
		return <>
        <Bars onClick={() => setSlide(!slide)}>
            {props.name}
        </Bars>
        {slide && <SlideRight ref={ref}>{props.children}</SlideRight>}
        </>
	}

	function SlideRightMenu() {
		function SlideRightItem(props) {
			return <>{props.content}</>
		}
		return <>
			<SlideItem><SlideRightItem content='Giới thiệu ▸' /></SlideItem>
			<Break/>
			<SlideItem><SlideRightItem content='Bảng tin ▸' /></SlideItem>
			<Break/>
			<SlideItem><SlideRightItem content='Bài viết ▸' /></SlideItem>
			<Break/>
			<SlideItem><SlideRightItem content='Flashcard ▸' /></SlideItem>
			<Break/>
			<SlideItem><SlideRightItem content='Liên hệ ▸' /></SlideItem>
		</>;
	}

	function NavDropDown(props) {
		const [drop, setDrop] = useState(false)
        const ref = useOnclickOutside(() => {setDrop(false)})
		return <>
        <NavWoLink onClick={() => setDrop(!drop)}>
            {props.name}
        </NavWoLink>
        {drop && <div ref={ref}>{props.children}</div>}
        </>
	}

	function DropDownMenu() {
		function DropDownItem(props) {
			return <>{props.content}</>
		}
		return <Dropdown>
			<Item><DropDownItem content='Flashcard ngẫu nhiên' /></Item>
			<Item><DropDownItem content='Flashcard theo chủ đề' /></Item>
		</Dropdown>;
	}

	function SignAreaPopup(props) {
		const [popup, setPopup] = useState(false)
        const ref = useOnclickOutside(() => {setPopup(false)})
		return <>
		<NavCapsuleBtnLeft onClick={() => setPopup(!popup)}>{props.name}</NavCapsuleBtnLeft>
        {popup && <div ref={ref}>{props.children}</div>}
        </>
	}

    const SmallScreen = () => <>
        <NavMini>
			<NavSlideRight>
				<SlideRightMenu/>
			</NavSlideRight>
			<NavWoLink onClick={toggleLog}>Bảng tin</NavWoLink>
            <LogoHolder to='/' activestyle='true'><HeaderLogo src={process.env.PUBLIC_URL + "icons/logo.png"} onClick={toggleHome} /></LogoHolder>
            <NavWoLink onClick={toggleContact}>Liên hệ</NavWoLink>
			<SearchBtn to='/'><BsSearch /></SearchBtn>
        </NavMini>
    </>

    const LargeScreen = () => <>
        <NavMenu>
            <LogoHolder to='/' activestyle='true'><HeaderLogo src={process.env.PUBLIC_URL + "icons/logo.png"} onClick={toggleHome} /></LogoHolder>
            <NavWoLink onClick={toggleAbout}>Giới Thiệu</NavWoLink>
            <NavWoLink onClick={toggleLog}>Bảng Tin</NavWoLink>
            <NavDropDown name='Flashcard'>
                <DropDownMenu />
            </NavDropDown>
            <NavWoLink onClick={toggleContact}>Liên Hệ</NavWoLink>
        </NavMenu>
        <NavBtnArea>
            <SearchBtn to='/'><BsSearch /></SearchBtn>
            <SignAreaPopup name='Đăng Nhập'>
				<LogInPanel />
			</SignAreaPopup>
            <NavCapsuleBtnRight>Đăng Ký</NavCapsuleBtnRight>
        </NavBtnArea>
    </>

	return (
	<Nav scrollNav={scrollNav}>
		<SmallScreen />
		<LargeScreen />
	</Nav>
	)
}
