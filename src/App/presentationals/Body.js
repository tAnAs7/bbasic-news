import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'
import { animateScroll as scroll} from 'react-scroll'

import {ToggleTopBtn} from '../styles/bodyStyles'
import {AiOutlineToTop} from 'react-icons/ai'

import Header from './Header'
import LandingPage from '../pages/LandingPage'

export default function App() {
  const toggleTop = () => {
		scroll.scrollToTop();
	}

  return (
    <Router>
      <Header/>
      <SlideRoutes>
          <Route path='/' element={<LandingPage />} />
      </SlideRoutes>
      <ToggleTopBtn onClick={toggleTop}><AiOutlineToTop/></ToggleTopBtn>
    </Router>
  );
}