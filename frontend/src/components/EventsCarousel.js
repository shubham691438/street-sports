import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselCard from './CarouselCard'

const EventsCarousel = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

  return (
    <Carousel>
        {
            items.map((item,key)=><CarouselCard key={key} item={item}/>)
        }
    </Carousel>
  )
}

export default EventsCarousel