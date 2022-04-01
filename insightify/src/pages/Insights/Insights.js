import React, { useState } from 'react'
import { Divider, Header, Tabs } from '../../lib'
import './Insights.css'
export default function Insights() {
    const [hotel, setHotel] = useState('Hotel1');

    return (
        <div className='insights'>
            <Header />

            <div className='hotels'>
                <Tabs
                    titles={['Hotel1', 'Hotel2']}
                    value={hotel}
                    onClick={(e) => {
                        setHotel(e.target.outerText);
                    }} 
                />
                <Divider/>
            </div>

        </div>
    )
}
