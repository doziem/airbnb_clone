import React from 'react'
import { Button } from '@material-ui/core'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>38 stay. 10 September to 30 september. 2 guest</p>
                <h1>stay nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility </Button>
                <Button variant='outlined'> Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <SearchResult
                img='/image/details-1.jpg'
                location='private room in center of london'
                title='Stay at this Spacious Edwardian House'
                description='1 bedroom. 1 guest. 1 bed. 1.5 shared bathroom. Wifi. kitchen. Free parking. washing machine'
                star={4.88}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='/image/details-2.jpg'
                location='private room in center of Washington'
                title='Stay at this Spacious Edwardian House'
                description='2 bedroom. 2 guest. 2 bed. 2 shared bathroom. Wifi. kitchen. Free parking. washing machine'
                star={3.99}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='/image/details-3.jpg'
                location='private room in center of Toronto'
                title='Stay at this Spacious Edwardian House'
                description='2 bedroom. 2 guest. 1 bed. 1.5 shared bathroom. Wifi. kitchen. Free parking. washing machine'
                star={4.4}
                price='$40/night'
                total='$200 total'
            />
            <SearchResult
                img='/image/img3.jpg'
                location='private room in center of london'
                title='Stay at this Spacious Edwardian House'
                description='1 bedroom. 1 guest. 1 bed. 1.5 shared bathroom. Wifi. kitchen. Free parking. washing machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult
                img='/image/img9.jpg'
                location='private room in center of Enugu'
                title='Indepandent luxury studio apartment'
                description='3 bedroom. 5 guest. 2 bed. 3 shared bathroom. Wifi. kitchen. Free parking. washing machine'
                star={4.6}
                price='$50/night'
                total='$300 total'
            />
        </div>
    )
}

export default SearchPage
