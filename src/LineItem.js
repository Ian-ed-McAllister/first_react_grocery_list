import React from 'react'
import {FaTrashAlt} from "react-icons/fa"


const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <div>
    {/* //list items need to have the key item to allow react to know if it got changed */}
        <li className='item' key={item.id} onDoubleClick={() => handleCheck(item.id)}>
            <input 
                type="checkbox" 
                checked={item.checked}
                onChange = {() => handleCheck(item.id)}
            />
            <label
                style={(item.checked) ? {textDecoration: 'line-through'}: null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
                role="button" 
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                aria-label= {`Delete ${item.item}`}
            />
        </li>
    </div>
  )
}

export default LineItem