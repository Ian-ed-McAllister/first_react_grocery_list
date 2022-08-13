import React from 'react'

import ItemList from './ItemList'


const Content = ({items, handleCheck, handleDelete}) => {
    // we use const as we never want to reset the "name" again directly





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
            <ItemList 
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}/>
        ) : (
            <p style={{marginTop: '2rem'}}>
                NO ITEMS IN LIST
            </p>
        )}
    </main>
  )
}

export default Content