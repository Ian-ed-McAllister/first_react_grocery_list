import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Dave", "Kevin"]
        const int = Math.floor(Math.random()*3)
        return names[int]
    }

    const handleClick = () =>{
        console.log("CLICKED")
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`)
    }
    const handleClick3 = (event) =>{
        console.log(event.target.innerText)
    }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}
        </p>
        <button onClick={handleClick}>Click Me</button>
        {/* The () is an annonmys function making it not get called immediatly when the page is loaded liek what would happen
         if you were just to do handleClick2(handleNameChange())*/}
        <button onClick={() => handleClick2(handleNameChange())}>Click Me</button>


        <button onClick={(event) => handleClick3(event)}>Click Me</button>

    </main>
  )
}

export default Content