import './App.css';
import { Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [ip,setip] = useState("192.168.43.133");

  const on = () => {
    fetch(`http://${ip}/on`);
  }

  const off = () => {
    fetch(`http://${ip}/off`);
  }

  return (
    <div className="App">
      <Typography>Router IP Address:</Typography>
      <TextField value={ip}  onChange={e => setip(e.target.value)} />
      <ButtonGroup>
        <Button onClick={off}>OFF</Button>
        <Button onClick={on}>ON</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
