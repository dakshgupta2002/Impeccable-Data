import React from 'react'
import { Card } from '../../lib/elements/Card'
import './Home.css'

export default function Home() {
  return (
    <div className={'parent'}>
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
    </div>
  )
}
