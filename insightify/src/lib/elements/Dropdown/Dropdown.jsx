import React, { useState } from 'react'
import './Dropdown.css';

// items -> Array containing items of dropdown
export default function Dropdown({ items, value, onChange }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => { setIsVisible(!isVisible); console.log("hei") }}>
                {value}
            </button>
            <div style={{height: '10px', width: '100%'}}></div>
            {isVisible && <div className="dropdown-items" >
                {items.map((item) => {
                    if (item === value)
                        return null;

                    return (
                        <button
                            key={item}
                            href="/"
                            className="dropbtn"
                            onClick={(e) => {
                                onChange(e);
                                setIsVisible(false);
                            }}
                        >
                            {item}
                        </button>
                    )
                })
                }
            </div>}
        </div>
    )
}