import React, { useState } from 'react'
import { Divider, Header } from '../../lib'
import { Card } from '../../lib/elements/Card';
import Dropdown from '../../lib/elements/Dropdown/Dropdown';
import './Home.css'

export default function Home() {
    const [month, setMonth] = useState('Jan');
    return (
        <div className={'parent'}>
            <Header />
            <div className={'child'}>
                <Card
                    header={"IEEE Hackadroit 2022"}
                >
                    <div>
                        Data Science 
                    </div>
                </Card>

                <Divider/>

                <Card
                    header={"Impeccable Data"}
                >
                    <ul>
                       <li>Uttam Mittal</li>
                       <li>Shiraz Mangat</li>
                       <li>Ishwarendra Jha</li>
                       <li>Daksh Gupta</li>
                    </ul>

                </Card>
            </div>
        </div>
    )
}
