import React, {useState} from 'react'
import './Dropdown.css';

// items -> Array containing items of dropdown
export default function Dropdown({items, value, onChange}) {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="dropdown">
        <button className="dropbtn" onClick={setIsVisible(!isVisible)}>
            {value}
        </button>

        {isVisible && <div className="dropdown-items" onChange={onChange}>
            {items.map((item) => {
                if (item === value)
                    return null;

                return (
                    <a href="/" className="dropdown-item">{item}</a>
                )
            })
        }
        </div>}
    </div>
  )
}