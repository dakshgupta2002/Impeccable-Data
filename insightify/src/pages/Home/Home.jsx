import React, { useState } from 'react'
import { Header } from '../../lib'
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
                    header={"Card 1"}
                >
                    <div>
                        BODY of the Card 1
                        <div>
                            Sub body
                        </div>
                    </div>

                </Card>
            </div>
            <div>
                <Dropdown
                    value={month}
                    onChange={(e) => setMonth(e.target.innerText)}
                    items={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                />

            </div>
        </div>
    )
}
