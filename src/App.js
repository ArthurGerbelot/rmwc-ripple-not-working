import React from 'react';

import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";

import './App.scss';

function App() {
  return (
    <div className="App">
      <TextField label="Foo" />
      <Button ripple>Button</Button>
    </div>
  );
}

export default App;
