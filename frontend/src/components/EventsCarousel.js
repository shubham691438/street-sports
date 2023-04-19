import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselCard from './CarouselCard'
import Event1 from '../assets/images/event-1.jpg'
import Event2 from '../assets/images/event-2.jpg'
import Event3 from '../assets/images/event-3.jpg'
import Event4 from '../assets/images/event-4.jpg'

const EventsCarousel = () => {
    var items = [
        {
            name: "Football Tournament",
            place: "Mongolkar Stadium",
            time:"20 to 15 july",
            banner:Event1
        },
        {
            name: "National Sports Day",
            place: "India",
            time:"29 august",
            banner:Event2
        },
        {
            name: "none",
            place: "none",
            time:"none",
            banner:Event3
        },
        {
            name: "none",
            place: "none",
            time:"none",
            banner:Event4
        }
    ]

  return (
    <Carousel sx={{margin:"5% 10%"}} navButtonsAlwaysVisible='true' height='300px'>
        {
            items.map((item,key)=><CarouselCard key={key} item={item}/>)
        }
    </Carousel>
  )
}

export default EventsCarousel