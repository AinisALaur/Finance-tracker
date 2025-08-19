import './App.css'

import {Container, TextBox, DataContainer} from "./Containers";

function App() {
  return (
    <div className = "main-container">
      <Container className = "util-container">
        <TextBox>Utility bills</TextBox>
        <DataContainer></DataContainer>
      </Container>
      <Container className = "food-container">
        <TextBox>Food bills</TextBox>
        <DataContainer></DataContainer>
      </Container>
      <Container className = "statis-container">
        <TextBox>Bill statistics</TextBox>
        <DataContainer></DataContainer>
      </Container>
    </div>
  );
}

export default App;