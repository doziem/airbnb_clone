import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card
                    src='image/shoe.jpg'
                    title='online Experirnce'
                    description='unique activities we can do together, led by a world of host'

                />
                <Card
                    src='image/cloth.jpg'
                    title='online Experirnce'
                    description='unique activities we can do together, led by a world of host'

                />
                <Card
                    src='image/ladies.jpg'
                    title='online Experirnce'
                    description='unique activities we can do together, led by a world of host'
                />
            </div>
            <div className='home__section'>
                <Card
                    src='image/laptop.jpg'
                    title='Mac Pro'
                    description='unique activities we can do together, led by a world of host'
                    price='$400/per night'

                />
                <Card
                    src='image/couch.jpg'
                    title='Couch'
                    description='unique activities we can do together, led by a world of host'
                    price='$300/per night'
                />
                <Card
                    src='image/kitchen.jpg'
                    title='Kitchen'
                    description='unique activities we can do together, led by a world of host'
                    price='$200/per night'
                />
            </div>
        </div>
    )
}

export default Home
