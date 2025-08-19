import './App.css'

import {Container, TextBox, DataContainer} from './Containers';
import {SettingsButton, ImportButton, ExportButton, AddButton} from './Buttons'

function App() {
  return (
    <>
      <div className = "main-container">
        <Container className = "util-container">
          <TextBox>Utility bills</TextBox>
          <DataContainer className = "util-data"></DataContainer>
        </Container>
        <Container className = "food-container">
          <TextBox>Food bills</TextBox>
          <DataContainer className = "food-data"></DataContainer>
        </Container>
        <Container className = "statis-container">
          <TextBox>This months statistics</TextBox>
          <DataContainer className = "statis-data"></DataContainer>
        </Container>
      </div>

      <div className = "options">
        <SettingsButton/>
        <ExportButton/>
        <ImportButton/>
        <AddButton/>
      </div>
    </>
  );
}

export default App;