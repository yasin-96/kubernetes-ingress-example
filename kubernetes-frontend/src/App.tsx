import { useRef } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material'


function App() {
  const textRef = useRef<HTMLInputElement | null>(null);

  const buttonClick = () => {
    fetch('http://myappapi.com/hello', 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message: textRef.current?.value})
    }
    )
  }

  return (
    <>
      <div>
        <TextField  inputRef={textRef} id="standard-basic" label="Text" variant="standard" />
        <Button onClick={buttonClick} sx={{mx: 2}} variant="contained">Send</Button>
      </div> 
    </>
  )
}




export default App
