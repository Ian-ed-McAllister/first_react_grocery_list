import React from 'react'
import { useState } from 'react'
import {FaTrashAlt} from "react-icons/fa"


const Content = () => {
    // we use const as we never want to reset the "name" again directly
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "1/2 pound bag of cocoa Almonds"
        },
        {
            id: 2,
            checked: false,
            item: "Item2"
        },
        {
            id:3,
            checked: false,
            item: "item 3"
        }
    ])

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))

        console.log(`key: ${id}`)
    }

    const handleDelete = (id) =>{
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }


    // LEARNING ABOUT USE STATE

    // const handleClick = () =>{
    //     // here it will still output 0 the first time you click it as it uses the count value when it enters the function
    //     setCount(count + 1)
    //     //Even when adding again it will set count to what count was comming into the function +1 not +2
    //     setCount(count + 1)
    //     console.log(count)
    //     // This is because the value of count within the function WILL NOT GET CHANGED, the value outside does and when you call the function again the local value gets set to the outside value
    // }
    // const handleClick2 = (name) =>{
    //     console.log(`${name} was clicked`)
    // }
    // const handleClick3 = (event) =>{
    //     console.log(event.target.innerText)
    // }

  return (
    <main>
        {items.length ? (
            <ul>
                {items.map((item) =>(
                    //list items need to have the key item to allow react to know if it got changed
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
                        />
                    </li>
                ))}
            </ul>
        ) : (
            <p style={{marginTop: '2rem'}}>
                NO ITEMS IN LIST
            </p>
        )}
    </main>
  )
}

export default Content