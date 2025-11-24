import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Volunteer from './components/Volunteer'
import GetInTouch from './components/GetInTouch'

export default function App() {
  return (
    <div className='mx-72 mt-18'>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Volunteer></Volunteer>
      <GetInTouch></GetInTouch>
    </div>
  )
}
