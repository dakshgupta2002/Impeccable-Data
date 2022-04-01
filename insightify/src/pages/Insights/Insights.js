import React, { useState } from 'react'
import { Divider, Header, Tabs } from '../../lib'
import './Insights.css'
import Resort from './Hotels/Resort';
import City from './Hotels/City';

export default function Insights() {
    const [hotel, setHotel] = useState('Hotel1');

    return (
        <div className='insights'>
            <Header />

            <div className='hotels'>
                <Tabs
                    titles={['Resort Hotel', 'City Hotel']}
                    value={hotel}
                    onClick={(e) => {
                        setHotel(e.target.outerText);
                    }}
                />

                <div>
                    {hotel === 'Resort Hotel' ? < Resort /> : < City />}
                </div>


                <Divider />
            </div>

        </div>
    )
}
