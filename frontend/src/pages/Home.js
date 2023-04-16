import React from 'react'
import IntroSection from '../components/IntroSection'
import EventsCarousel from '../components/EventsCarousel'
import Features from '../components/Features'
import TournamentsSection from '../components/TournamentsSection'


const Home = () => {
  return (
    <>
      <IntroSection/>
      <EventsCarousel/>
      <Features/>
      <TournamentsSection/>
    </>
  )
}

export default Home