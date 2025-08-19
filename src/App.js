import './App.css'
import { useState } from "react";

import {Container, TextBox, DataContainer, AddMenu} from './Containers';
import {SettingsButton, ImportButton, ExportButton, AddButton} from './Buttons'

function App() {
  const [blurOn, setBlurOn] = useState(false);

  const [addMenuOn, setAddMenuOn] = useState(false);

  return (
    <>
      {blurOn && <div className = "blur">
        {addMenuOn && <AddMenu></AddMenu>}
      </div>}

      <div className = "main-container">
        <Container className = "util-container">
          <TextBox>Utilities</TextBox>
          <DataContainer id = "util-data"></DataContainer>
        </Container>
        <Container className = "food-container">
          <TextBox>Shopping</TextBox>
          <DataContainer id = "food-data"></DataContainer>
        </Container>
        <Container className = "statis-container">
          <TextBox>Monthly Statistics</TextBox>
          <DataContainer id = "statis-data"></DataContainer>
        </Container>
      </div>

      <div className = "options">
        <SettingsButton setBlurOn={setBlurOn}/>
        <ExportButton setBlurOn={setBlurOn}/>
        <ImportButton setBlurOn={setBlurOn}/>
        <AddButton setBlurOn={setBlurOn} setAddMenuOn={setAddMenuOn}/>
      </div>
    </>
  );
}

export default App;