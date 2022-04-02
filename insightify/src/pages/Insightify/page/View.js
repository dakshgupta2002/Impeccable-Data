import React, { useEffect, useState } from 'react'
import { Header } from '../../../lib';
import '../Insightify.css'

export default function View() {
    const [insights, setInsights] = useState({});

    useEffect(() => {
        const fetchInsights = async () => {
            fetch("http://localhost:3333/insightify", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res) => {
                const data = await res.json();
                console.log(data)
                // setInsights(data);
            }).catch( err => {
                console.log(err)
            })
        }

        fetchInsights();

    }, [])

    return (
        <div>
            <Header />
            <div className='view'>

                <h1>Here we will show the current data of the entries</h1>

                {/* {insights.map((insight, index) => {
                    return (
                        <div key={index}>
                            <h3>{insight.name}</h3>
                            <h4>Check in: {insight.checkin}</h4>
                            <h4>Check out: {insight.checkout}</h4>
                            <h4>Days: {insight.days}</h4>
                            <h4>Number of members: {insight.number}</h4>
                            <h4>Feedback: {insight.feedback}</h4>
                        </div>
                    )
                }
                )} */}
            </div>
        </div>
    )
}
