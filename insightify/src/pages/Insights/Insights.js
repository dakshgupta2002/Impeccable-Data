import React, { useState } from 'react'
import { Divider, Header, Tabs } from '../../lib'
import './Insights.css'
import Resort from './Hotels/Resort';
import City from './Hotels/City';
import Results from './Hotels/Results';

export default function Insights() {
    const [hotel, setHotel] = useState('Hotel1');

    return (
        <div className='insights'>
            <Header />

            <div className='hotels'>
                <Tabs
                    titles={['Results', 'City Hotel', 'Resort Hotel']}
                    value={hotel}
                    onClick={(e) => {
                        setHotel(e.target.outerText);
                    }}
                />

                <div>
                    {hotel === 'Resort Hotel' 
                        ? < Resort /> 
                        : hotel==='City Hotel'
                        ? < City />
                        : <Results/>    
                    }
                </div>


                <Divider />
            </div>

        </div>
    )
}
